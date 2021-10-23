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
    `;
}