// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateReadMe = require('./src/readme-template');

// const { title } = require('process');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt([
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
            choices: ['choice 1', 'choice 2', 'choice 3', 'choice 4', 'choice 5']
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
        console.log(readMeData);
        generateReadMe(readMeData);
        console.log(generateReadMe(readMeData));
    });
