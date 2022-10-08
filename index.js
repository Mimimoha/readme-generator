// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = ({title, description, Instalation, usage, contributing,test, github, emai, licens }) =>
`# tiltle of project
${title}
## Desctiption 
${description}
## Installation
${Instalation}
## Usage
${usage}
## License 
${licens}
## Contrubuting
${contributing}
## Test 
${test}
## Questions 
    If you have any questions, you can reach me at:
    
    [Github](${github})
    [Emal](${emai})`

    inquirer
        .prompt([{
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project?'
        },
        {
            type: 'input',
            name: 'Instalation',
            message: ' what installation is needed to run your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What will your project be use for?',
        },
        {
            type: 'confirm',
            name: 'contributing',
            message: 'will you allow other developer to contribute to your project?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'what test be needed to test your project'
        },
        {
            type:'input',
            name:'github',
            message:'what is your github username?',
        },
        {
            type:'input',
            name:'email',
            message:'what is your email address?',
        },
        {
            type:'list',
            name: 'license',
            message: 'choose your license',
            choices: ['MIT licesnse', 'Apache license 2.0', 'Boose software license 1.0']
        },
        ])
.then((response)=> {
const readmePagecontent = generateReadme(response);


fs.writeFile('readme.md' , readmePagecontent, (err) => 
err ? console.log(err): console.log (' Seccessfully created Readme.md file'));

});
