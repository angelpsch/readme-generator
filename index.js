const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require('./utils/generateMarkdown'); 

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?"
    },
    {
      type: "input",
      name: "link",
      message: "Please provide the link to your application:"
    },
    {
      type: "input",
      name: "description",
      message: "Please describe your project:"
    },
    {
      type: "input",
      name: "content",
      message: "Please provide a table of contents:"
    },
    {
      type: "input",
      name: "installation",
      message: "How do we install your application?"
    },
    {
      type: "input",
      name: "usage",
      message: "What is the intended purpose of your application?"
    },
    {
      type: "input",
      name: "contributing",
      message: "Who can contribute to your application?"
    },
    {
      type: "input",
      name: "tests",
      message: "What kind of tests has your application been through?"
    },
    {
      type: "input",
      name: "image",
      message: 'Please provide the link to your GitHub profile image:'
    },
    {
      type: "input",
      name: "email",
      message: 'Please provide the e-mail you registered with GitHub:'
    }
  ]);
}



async function init() {
  console.log("hi")
  try {
    const data = await promptUser();

    const md = generateMarkdown(data);

    await writeFileAsync("./your-readme/README.md", md);

    console.log("Successfully wrote to README.md. It will be placed inside the your-readme folder.");
  } catch(err) {
    console.log(err);
  }
}


init();
