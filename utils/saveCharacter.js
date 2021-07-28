const fs = require('fs')
const os = require('os')

function closeFd(fd) {
    fs.close(fd, (err) => {
        if (err) throw err;
    });
}

const saveCharacter = (character) => {
    fs.open('characters.txt', 'a', (err, fd) => {
        if (err) throw err;

        try {
            fs.appendFile(fd, character + os.EOL, 'utf8', (err) => {
                closeFd(fd);
                if (err) throw err;
            });
        } catch (err) {
            closeFd(fd);
            throw err;
        }
    })
}

module.exports = saveCharacter