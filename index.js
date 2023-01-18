// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid GitHub username.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your email address?",
        name: 'email',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid email address.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
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
        name: 'installation',
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
        message: 'Describe how others can contribute to this project?',
        when: ({confirmContribution}) => {
            if (confirmContribution) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Describe how others can test your application?'
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
        choices: ['agpl-3.0', 'gpl-3.0', 'lgpl-3.0', 'mpl-2.0', 'apache-2.0', 'mit', 'bsl-1.0', 'unlicense','none'],
        name: 'license'
    }
];

// TODO: Create a function to write README file
function writeToFile(content) {
    fs.writeFile("README.md", content, () => console.log("Successfully created README."));
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions).then((data) => {
        const content = generateMarkdown(data);
        writeToFile(content);
    });
}


// Function call to initialize app
init();
