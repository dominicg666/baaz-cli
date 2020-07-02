

const cliUsage = require('command-line-usage');
export async function helpPreview() {
    const sections = [
        {
            header: 'Options',
            optionList: [
                {
                    name: 'init',
                    alias: 'i',
                    type: Boolean,
                    typeLabel: '{underline /path/MyApp}',
                    description: 'Then run the following commands to create a new Baaz project called "MyApp":',
                },{
                    name: 'name',
                    alias: 'n',
                    type: Boolean,
                    typeLabel: '{underline /path/Customname}',
                    description: 'you want to create custom name project use the argument: --name',
                },
            ],
        },
        // {
        //     header: 'Optional Stuff',
        //     optionList: [
        //         {
        //             name: 'letters',
        //             alias: 'l',
        //             type: String,
        //             typeLabel: '{underline letter} ...',
        //             description: 'This option takes multiple values',
        //             multiple: true,
        //             defaultOption: 'a b c',
        //         },
        //         {
        //             name: 'help',
        //             alias: '?',
        //             type: Boolean,
        //             description: 'Print this usage guide.',
        //         }
        //     ],
        // },
    ];

    const usage = cliUsage(sections);
    console.info(usage);
}