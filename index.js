// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateReadMe = require('./src/readme-template');
const readmeGenerated = require('./utils/readmeGenerated');


function init() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: `What is your GitHub username?`
        },
        {
            type: 'input',
            name: 'title',
            message: `What is your project's title?`
        },
        {
            type: 'input',
            name: 'description',
            message: `Please describe this project:`
        },
        {
            type: 'input',
            name: 'installation',
            message: `How to install this project?`
        },
        {
            type: 'input',
            name: 'usage',
            message: `What is the usage of this project?`
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: `Choose one of the following licenses:`, 
            choices: ['Apache License 2.0', 'MIT License', 'GNU General Public License v3.0']
        },
        {
            type: 'input',
            name: 'contributions', 
            message: `What is the policy for contributuins?`
        },
        {
            type: 'input',
            name: 'tests',
            message: `What tests are allowed and have been done?`
        },
        {
            type: 'input',
            name: 'questions',
            message: `What is your email?`
        }
    ]);
}

// Function call to initialize app
init()
    .then(readMeData => {
        generateReadMe(readMeData);
        readmeGenerated.writeFile(generateReadMe(readMeData));
    })
    .catch(err => {
        console.log(err);
    });