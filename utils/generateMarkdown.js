// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license==="MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
    else if(license==="IBM"){
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  }
  else if(license==="Apache"){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if(license==="boost"){
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  }
  else if(license==="none"){
  return ""
  }
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## License
  ${data.license}${renderLicenseBadge(data.license)}
  # ${data.title}
  ## description
  ${data.description}
  ## Table of Content 
  * [Installation](Installation)
  * [License](License)
  * [Contribution](Contribution)
  * [Test](Test)
  * [Usage](Usage)
  * [Questions](Questions)
  ## Installation
  ${data.installation}
  
  
  ## Contribution
  ${data.contributors}
  ## Test
  ${data.test}
  ## Usage
${data.usage}
  ## Questions
  * Github: https://github.com/${data.email}/
  * Email: ${data.email}  

`;
}

module.exports = generateMarkdown;
