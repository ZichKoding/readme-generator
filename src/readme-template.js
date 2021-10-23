module.exports = templateData => {
    const {title, description, installation, usage, licenses, contributions, tests, questions} = templateData;

    return `
        # **${title}**
    `;
}