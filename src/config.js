const inquirer = require('inquirer');

// 应用配置环节
module.exports.getConfig = async (option) => {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      message: '应用名称:',
      name: 'appName',
      default: option.appName,
    }
  ]);
  Object.assign(option, answers);
};
