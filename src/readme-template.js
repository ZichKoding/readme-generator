const licensing = require('../licenses/licenses');
const readmeGenerated = require('../utils/readmeGenerated');


const licenseLink = (licenseData) => {
    console.log(licenseData);
    switch(licenseData) {
        case 'Apache License 2.0':
            console.log(licensing.apacheLicense());
            return readmeGenerated.writeLicense(licensing.apacheLicense());

        case 'MIT License':
            console.log(licensing.mitLicense());
            return readmeGenerated.writeLicense(licensing.mitLicense());

        case 'GNU General Public License v3.0':
            console.log(licensing.gnuLicense());
            return readmeGenerated.writeLicense(licensing.gnuLicense());
    };
};

module.exports = templateData => {
    const {title, description, installation, usage, licenses, contributions, tests, questions, username} = templateData;
    licenseLink(licenses);
    let readMe = `
# **${title}**

## _Table of Contents_
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#questions)

## **Description**
${description}

## **Installation**
${installation}

## **Usage**
${usage}

## **License**
${licenses}

## **Contributions**
${contributions}

## **Tests**
${tests}

## **Questions**
https://github.com/${username}/
If there is any questions email me at ${questions}.
    `;
    return readMe;
};