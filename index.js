// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
        default: 'savitamanchanda',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid GitHub username.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the name of your GitHub repo?",
        name: 'repo',
        default: 'README-Generator',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid Github repo.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
        default: 'README Generator',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid project title.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'description',
        default: 'A command-line application to generate a README file.',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter valid project description.");
            }
            return true;
        }
    },
    {
        type: 'confirm',
        name: 'confirmInstallation',
        message: 'Would you like to include installation instructions?',
        default: false
    },
    {
        type: 'input',
        message: "Describe the steps required to install your project",
        name: 'Installation',
        when: ({confirmInstallation}) => {
            if (confirmInstallation) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
    type: 'confirm',
    name: 'confirmUsage',
    message: 'Would you like to include usage instructions?',
    default: false
    },
    {
        type: 'input',
        message: "Describe the instructions on how to use your project",
        name: 'usage',
        when: ({confirmUsage}) => {
            if (confirmUsage) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmContribution',
        message: 'Would you like to include instructions on how others can contribute to your project?',
        default: false
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Describe how can others contribute to this project?',
        when: ({confirmContribution}) => {
            if (confirmContribution) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmLicenses',
        message: 'Would you like to include a license?',
        default: false
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
