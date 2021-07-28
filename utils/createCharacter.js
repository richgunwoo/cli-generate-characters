const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const specials = '!@#$%^&*_-+='

const createCharacter = (length = 8, hasNumbers = true, hasSpecials = true) => {
    let chars = alpha
    hasNumbers ? (chars += numbers) : ''
    hasSpecials ? (chars += specials) : ''
    return generateCharacter(length, chars)
}

const generateCharacter = (length, chars) => {
    let character = ''
    for (let i = 0; i < length; i++) {
        character += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return character
}

module.exports = createCharacter
