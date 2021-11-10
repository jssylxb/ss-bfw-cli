const ora = require('ora');
const { checkRepeat } = require('./check');
const { getConfig } = require('./config');
const { downloadWithPromise } = require('./util');

const spinner = ora('应用初始化');

module.exports.init = async (option) => {
  try {
    await getConfig(option);
    await checkRepeat(option);
    spinner.start();
    await downloadWithPromise('gitlab:http://172.17.32.73:base-framework/frontend#master', `./${option.appName}`, { clone: true });
    spinner.succeed();
  } catch (error) {
    console.log('\n初始化异常, 请联系脚手架web端管理员');
  }
  process.exit();
};
