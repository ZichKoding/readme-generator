module.exports = templateData => {
    const {title, description, installation, usage, licenses, contributions, tests, questions} = templateData;
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
If there is any questions email me at ${questions}.
    `
    return readMe.replace('', '');
};