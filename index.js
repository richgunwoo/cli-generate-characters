#!/usr/bin/env node
const program = require('commander')
const chalk = require('chalk')
const clipboardy = require('clipboardy')
const log = console.log
const createCharacter = require('./utils/createCharacter')
const savePassword = require('./utils/saveCharacter')

program.version('1.0.0').description('Simple Character Generator')

program
    .option('-l, --length <number>', 'length of character', '8')
    .option('-s, --save', 'save character to characters.txt')
    .option('-nn, --no-numbers', 'remove numbers')
    .option('-ns, --no-symbols', 'remove symbols')
    .parse()

const { length, save, numbers, symbols } = program.opts()

// Get generated character
const generatedCharacter = createCharacter(length, numbers, symbols)

// Save to file
if (save) {
    savePassword(generatedCharacter)
}

// Copy to clipboard
clipboardy.writeSync(generatedCharacter)

log(chalk.blue('Generated Character: ') + chalk.bold(generatedCharacter))
log(chalk.yellow('Character copied to clipboard'))

