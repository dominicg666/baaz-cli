const chalk = require('chalk');
const figlet = require('figlet');


export function preview(){
    console.log(
        chalk.yellow(
          figlet.textSync('Baaz', { horizontalLayout: 'full' })
        )
      );
}

  