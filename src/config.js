export async function ScriptsRun(args) {
    console.log(args);

    if (args[2] !== undefined && args[2] == "run") {
        var exec = require('child_process').exec;
        var cmd = 'yarn run watch';

        await exec(cmd, function (error, stdout, stderr) {
            // command output is in stdout
            console.log(error);
            
        });
    }
}