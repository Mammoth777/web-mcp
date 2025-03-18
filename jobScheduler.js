import { getWeather } from './tools/getWeather.js';
import { toolsToSystemPrompt } from './tools/tools.js'

import OpenAI from 'openai';

const openai = new OpenAI({
  // 若没有配置环境变量，请用百炼API Key将下行替换为：apiKey: "sk-xxx",
  apiKey: process.env.DASHSCOPE_API_KEY,
  baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1"
});

class JobScheduler {
  #systemToolPrompt;
  constructor() {
    this.#systemToolPrompt = toolsToSystemPrompt();
  }

  async allocateTool(question) {
    const completion = await openai.chat.completions.create({
      model: "qwen-plus",
      messages: [
        this.#systemToolPrompt,
        {
          role: "user",
          content: question
        }
      ],
      response_format: {
        type: "json_object"
      }
    });
    const jsonString = completion.choices[0].message.content
    return JSON.parse(jsonString)
  }

  getToolResponse(tool) {
    if (tool.name === 'get_weather') {
      return getWeather(tool.params[0])
    }
  }

  async humanReadableResponse(question, info) {
    const completion = await openai.chat.completions.create({
      model: "qwen-plus",
      messages: [
        {
          role: 'system',
          content: `请根据已知信息， 回复用户问题, 已知信息如下：\n${info}`
        },
        {
          role: 'user',
          content: question
        }
      ]
    })
    const response = completion.choices[0].message.content
    return response
  }

  async ask(question) {
    const tool = await this.allocateTool(question);
    console.log(tool)
    const toolResponse = await this.getToolResponse(tool);
    const response = await this.humanReadableResponse(question, JSON.stringify(toolResponse))
    return response
  }
}

export const jobScheduler = new JobScheduler();