import arg from 'arg';
// import path from 'path';
import inquirer from 'inquirer';
import { createProject } from './main';
import { preview } from './baazPreview';
import { helpPreview } from './help';
import { ScriptsRun } from './config';


async function promptForMissingOptions(options) {
    const defaultDirectory = 'MyApp'
    if (options.skipPrompts) {
        return {
            ...options,
            template: options.template,
        };
    }

    const questions = [];
    if (!options.name) {
        questions.push({
            type: 'text',
            name: 'name',
            message: 'What is the name of the project? 🤔',
            default: defaultDirectory,
        });
    }
    // if (!options.template) {
    //     questions.push({
    //         type: 'list',
    //         name: 'template',
    //         message: 'Please choose which project template to use',
    //         choices: ['JavaScript'],
    //         default: defaultTemplate,
    //     });
    // }

    if (!options.git) {
        questions.push({
            type: 'confirm',
            name: 'git',
            message: 'Initialize a git repository?',
            default: false,
        });
    }

    const answers = await inquirer.prompt(questions);
    return {
        ...options,
        template: options.template,
        targetDirectory: options.name || answers.name,
        git: options.git || answers.git,
        install: options.install || answers.install,
    };
}

function parseArgumentsIntoOptions(rawArgs) {
    const args = arg(
        {
            '--git': Boolean,
            '--yes': Boolean,
            '--init': Boolean,
            '--name': Boolean,
            '--help': Boolean,
            '-g': '--git',
            '-y': '--yes',
            '-i': '--init',
            '-n': '--name',
            '-h': '--help'
        },
        {
            argv: rawArgs.slice(2),
        }
    );
    return {
        skipPrompts: args['--yes'] || false,
        git: args['--git'] || false,
        directory: args['--directory'],
        template: 'pwa',
        runInstall: args['--init'] || false,
        help: args['--help'] || false,
        name: args['--name'] || false,
    };
}

export async function cli(args) {
    let options = parseArgumentsIntoOptions(args);
    if (options.runInstall) {
        options = await promptForMissingOptions(options);
        await createProject(options);
    }
    else if (options.help) {
        helpPreview();
    }
    ScriptsRun(args);
    preview();
}
