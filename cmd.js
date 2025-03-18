import 'dotenv/config'
import readline from 'readline';
import { jobScheduler } from './jobScheduler.js';

// 创建readline接口
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

/**
 * 获取用户输入
 */
function askQuestion(query) {
  return new Promise(resolve => {
    rl.question(query, answer => {
      resolve(answer);
    });
  });
}

export const commander = {
  async run() {
    try {
      const question = await askQuestion('请输入您的问题: ');

      const response = await jobScheduler.ask(question);
      console.log(`Q: ${question}`)
      console.log(`A: ${JSON.stringify(response)}`);
    } catch (error) {
      console.error('发生错误:', error);
    } finally {
      rl.close();
    }
  }
}