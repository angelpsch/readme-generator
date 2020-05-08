function generateMarkdown(data) {
    return `
# ${data.title}
[Link to Deployed Application](${data.link})
## Description: ${data.description}
## Table of Contents: 
### ${data.content}
## Installation:
### ${data.installation}
## Usage: 
### ${data.usage}
## Contribution: 
### ${data.contributing}
## Tests: 
### ${data.tests}
${data.image}
${data.email}`;
  }

  module.exports = generateMarkdown;