import 'dotenv/config'
import { toolsToSystemPrompt } from './tools/tools.js'
// 步骤 1：发出请求

import OpenAI from "openai";

// 预定义示例响应
const example1Response = JSON.stringify({
    info: { name: "张三", age: "25岁", email: "zhangsan@example.com" },
    hobby: ["唱歌"]
});
const example2Response = JSON.stringify({
    info: { name: "李四", age: "30岁", email: "lisi@example.com" },
    hobby: ["跳舞", "游泳"]
});
const example3Response = JSON.stringify({
    info: { name: "王五", age: "40岁", email: "wangwu@example.com" },
    hobby: ["Rap", "篮球"]
});

const openai = new OpenAI({
    // 若没有配置环境变量，请用百炼API Key将下行替换为：apiKey: "sk-xxx",
    apiKey: process.env.DASHSCOPE_API_KEY,
    baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1"
});
const systemPrompt = toolsToSystemPrompt();
const question = '常州下雨了吗'
const completion = await openai.chat.completions.create({
    model: "qwen-plus",
    messages: [
      systemPrompt,
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
console.log(`Q: ${question}`)
console.log(`A: ${jsonString}`);