const md = require("markdown-it");
const fs = require("fs");
const inquirer = require('inquirer');
inquirer
    .prompt([
        {
            type: "input",
            message: "What will your project title be?",
            name: "projectTitle",
        },
        {
            type: "input",
            message: "What will your description be?",
            name: "description",
        },
        {
            type: "input",
            message: "what are your installation instructions",
            name: "installationInstructions",
        },
        {
            type: "input",
            message: "What will the usage info be?",
            name: "usageInfo",
        },
        {
            type: "input",
            message: "What will the contribution guidelines be?",
            name: "contributeGuide",
        },
        {
            type: "input",
            message: "What are the test instructions",
            name: "testInstruct",
        },
        {
            type: "input",
            message: "What will the license badge be?",
            name: "license",
        },
        {
            type: "input",
            message: "What will the email be?",
            name: "email",
        },
        {
            type: "input",
            message: "What will the github username be?",
            name: "githubUsername",
        },
    ])
    .then((answers) => {

        let tableOfContents = `## Table of Contents \n\n`;

        tableOfContents += `1. [Description](#description)\n`;
        tableOfContents += `2. [Installation](#installation)\n`;
        tableOfContents += `3. [Usage](#usage)\n`;
        tableOfContents += `4. [Contrbuting](#contributing)\n`;
        tableOfContents += `5. [Tests](#tests)\n`;
        tableOfContents += `6. [License](#license)\n\n`;


        let readme = ` ${tableOfContents}# ${answers.projectTitle}\n\n`;
        readme += `## Description \n\n ${answers.description}\n\n`;
        readme += `## Installation \n\n ${answers.installationInstructions}\n\n`;
        readme += `## Usage \n\n ${answers.usageInfo}\n\n`;
        readme += `## Contribution Guidelines \n\n ${answers.contributeGuide}\n\n`;
        readme += `## Testing Instructions \n\n ${answers.testInstruct}\n\n`;

        let licenseBadge = "";
        let licenseNotice = "";

        if (answers.license !== "") {
            licenseBadge = `![License](https://img.shields.io/badge/license-${answers.license}-blue.svg)\n\n`;
            licenseNotice = `This application is covered under the ${answers.license} license.\n\n`;
        }

        readme += `## License \n\n ${licenseBadge} ${licenseNotice}`;

        readme += `##Questions\n\n`;
        readme += `If you have any questions or comments about the application, please contact me at `;
        readme += `${answers.email}. You can also visit my Github profile (https://github.com/${answers.githubUsername})`
        readme += `to see my other projects.\n\n`

        fs.writeFile("README.md", readme, (err) => {
            if (err) throw err;
            console.log("README.md file has been generated!");
        });
    });