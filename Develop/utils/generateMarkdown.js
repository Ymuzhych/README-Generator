// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
    # ${data.Title}

    https://github.com/${data.Username}/${data.Title}

    # Description
    ${data.Description}
    
    # Table of Contents

    * [Installation](#instalation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    
    # Installation
    The following necessary dependencies must be installed to run the application properly: inquire, fs, util 
    
    # Usage 
    To use this app, ${data.Usage}

    # License
    This project is licensed under the ${data.License} license.
    ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

    # Contributing 
    Contributing: ${data.Contributing}

    # Tests
    To run the test you need: ${data.Tests}

    # Questions
    If you have any questions contact ${data.Username}

    `}
    module.exports = generateMarkdown;