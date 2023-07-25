// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  else if (license === "IBM") {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  }
  else if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if (license === "boost") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  }
  else if (license === "none") {
    return ""
  }
}
function renderLicenseSection(license) {
  if (license === "MIT") {
    return "This Project is under the MIT license"
  }
  else if (license === "IBM") {
    return "This Project is under the IBM license"
  }
  else if (license === "Apache") {
    return "This Project is under the Apache license"
  }
  else if (license === "boost") {
    return "This Project is under the boost license"
  }
  else if (license === "none") {
    return "no licenses"
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}
  
  # ${data.title}
 
  ## description
  ${data.description}

  ## License
  ${data.license}: 
  <br>${renderLicenseSection(data.license)}

  ## Table of Content 
  * [Installation](#installation)
  * [Contribution](#contribution)
  * [License](#license)
  * [Test](#test)
  * [Usage](#usage)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Contribution
  ${data.contributors}
  
  ## Test
  ${data.test}
 
  ## Usage
 ${data.usage}
  
## Questions
  * Github: https://github.com/${data.github}/
  * Email: ${data.email}  
`;
}

module.exports = generateMarkdown;
