// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
function renderLicenseBadge(license) {
if (license==="MIT licesnse"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
} 
if (license=== 'Apache license 2.0' )
{return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
}
if ( license=== 'Boose software license 1.0'){
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
}
else {return ''}
}




const generateReadme = ({title, description, Instalation, usage, contributing,test, github, email, license}) =>
`# tiltle of project
${title}
${renderLicenseBadge(license)}

## Desctiption 
${description}
## Installation
${Instalation}
## Usage
${usage}
## license
${license}
## Contrubuting
${contributing}
## Test 
${test}
## Questions 
    If you have any questions, you can reach me at:
   [email](${email}) 
[github](http://github.com/${github})`


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
            choices: ['MIT licesnse', 'Apache license 2.0', 'Boose software license 1.0', 'none']
        },
        ])
.then((response)=> {
const readmePagecontent = generateReadme(response);


fs.writeFile('readme5.md' , readmePagecontent, (err) => 
err ? console.log(err): console.log (' Seccessfully created Readme.md file'));

});
