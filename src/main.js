const yargs = require('yargs');
const { init } = require('./init');
const { processError } = require('./util');

// 界面交互配置
yargs
  .command('init [appName]', 'init the program', {}, async (argv) => {
    const option = {
      appName: argv.appName,
    };
    try {
      await init(option);
    } catch (error) {
      processError(error);
    }
  })
  .parse();
