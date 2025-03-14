function json(obj) {
  return JSON.stringify(obj)
}

const tools = [
  {
    name: 'get_weather',
    description: '获取天气信息',
    examples: [
      { query: '查询北京天气', response: json({name: 'get_weather', params: ['北京']}) },
      { query: '查询上海天气', response: json({name: 'get_weather', params: ['上海']}) }
    ],
    params: [
      {
        name: 'city',
        description: '城市名称',
        required: true
      }
    ]
  },
  {
    name: 'get_current_time',
    description: '获取当前时间',
    examples: [
      { query: '查询当前时间', response: json({name: 'get_current_time', params: []}) },
      { query: '现在几点了', response: json({name: 'get_current_time', params: []}) },
      { query: '现在时间', response: json({name: 'get_current_time', params: []}) }
    ],
    params: []
  }
]

export function toolsToSystemPrompt() {
  const prefix = `你有下列这些工具， 你认为需要调用哪个工具? 以及给工具传递哪些参数。输出包含name和params数组的JSON。下面是工具信息：
    `
  const toolsPrompt = tools.map(tool => {
    return `
      工具名称: ${tool.name}
      工具描述: ${tool.description}
      参数描述: ${tool.params.length ? tool.params.map(param => {
        return `
          参数名称: ${param.name}, 参数描述: ${param.description},是否必填: ${param.required ? '是' : '否'}
        `
      }) : '此工具无参数'}`
  })

  const example = '\n\n示例：\n' + tools.map(tool => {
    const examples = tool.examples.map(example => {
      return `Q：${example.query}\nA：${example.response}`
    })
    return examples.join('\n')
  }).join('\n')
  return {
    role: 'system',
    content: prefix + toolsPrompt.join('') + example
  }
}

