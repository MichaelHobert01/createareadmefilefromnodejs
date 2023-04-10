const md = require ("markdown-it");
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
  ])
  .then((answers) => {
    let readme = `# ${answers.projectTitle}\n\n`;
    readme += `## Description\n\n ${answers.description}\n\n`;
    readme += `## Installation\n\n ${answers.installationInstructions}\n\n`;
    readme += `## Usage\n\n ${answers.usageInfo}\n\n`;
    readme += `## Contribution Guidelines\n\n ${answers.contributeGuide}`;
    readme += `## Testing Instructions\n\n ${answers.testInstruct}\n\n`;

    let licenseBadge = "";
    let licenseNotice = "";

    if (answers.license !== "") {
      licenseBadge = `![License](https://img.shields.io/badge/license-${answers.license}-blue.svg)\n\n`;
      licenseNotice = `This application is covered under the ${answers.license} license.\n\n`;
    }

    readme += `## License \n\n ${licenseBadge} ${licenseNotice}`;

    const fs = import("fs");

    fs.writeFile("README.md", readme ,(err) => {
      if (err) throw err;
      console.log("README.md file has been generated!");
    });
  });