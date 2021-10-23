module.exports = templateData => {
    const {title, description, installation, usage, licenses, contributions, tests, questions} = templateData;

    return `
        # **${title}**

        ## _Table of Contents_
        * Description
        * Installation
        * Usage
        * License 
        * Contributions
        * Tests
        * Questions
        
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
    `;
}