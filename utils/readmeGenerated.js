const fs = require('fs');
const { resolve } = require('path');

const writeFile = readmeContent => {
    fs.writeFile('./dist/README.md', readmeContent, err => {
        if (err) {
            reject(err);
            return;
        }

    });
};

module.exports = {writeFile};

