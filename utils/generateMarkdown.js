
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "agpl-3.0":
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](${renderLicenseLink(license)})";
      
    case "gpl-3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](${renderLicenseLink(license))";
      
    case "lgpl-3.0":
     return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](${renderLicenseLink(license))";
      
    case "mpl-2.0":
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](${renderLicenseLink(license))";
      
      case "apache-2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](${renderLicenseLink(license))";
        
        case "mit":
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${renderLicenseLink(license))";
          
          case "bsl-1.0":
          return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](${renderLicenseLink(license))";
            
            case "unlicense":
           return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](${renderLicenseLink(license))";

    case "none":
    return "";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string


function renderLicenseLink(license) {
  switch (license) {
    case "agpl-3.0":
    return "https://www.gnu.org/licenses/agpl-3.0";
      
    case "gpl-3.0":
    return "https://www.gnu.org/licenses/gpl-3.0";
      
    case "lgpl-3.0":
     return "https://www.gnu.org/licenses/lgpl-3.0";
      
    case "mpl-2.0":
    return "https://opensource.org/licenses/MPL-2.0";
      
      case "apache-2.0":
       return "https://opensource.org/licenses/Apache-2.0";
        
        case "mit":
       return "https://opensource.org/licenses/MIT";
          
          case "bsl-1.0":
           return "https://www.boost.org/LICENSE_1_0.txt";
            
            case "unlicense":
        return "http://unlicense.org/";    

    case "none":
    return "";
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
var licenseDescription
function renderLicenseSection(license) {
  if (license === 'none') {
    return ``;
  } else {
  return `To learn more about the ${license} license, click on the URL provided.`
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [Description] (#description)
  * [Installation] (#installation)
  * [Usage] (#usage)
  * [License] (#license)
  * [Contribution] (#contribution)
  * [Tests] (#tests)
  * [Questions] (#questions)
  * [Credits] (#credits)


  ## Description

  (${data.description});

  ## Installation 

  (${data.installation})

  ## Usage 

  (${data.usage})

  ## License 

  ${renderLicenseLink(data.license)}

  ${renderLicenseSection(data.license)}

  ## Contribution 

  (${data.contribution})

  ## Tests

  (${data.tests})

  ## Questions 

  For any questions, Please reach out at: 

  GitHub: http://github.com/${data.username}
  Email: ${data.email}

  ## Credits

  List your collaborators. 

`;
}

module.exports = generateMarkdown;
