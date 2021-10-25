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

const writeLicense = licenseData => {
    fs.writeFile('../dist/LICENSE.txt', licenseData, err => {
        if (err) {
            reject(err);
            return;
        }
        console.log('LICENSE.txt has been created!');
    });
};

module.exports = { writeFile, writeLicense };

