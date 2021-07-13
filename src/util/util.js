const path = require('path') //The path module provides utilities for working with file and directory paths.
const fs = require('fs') //allows to interact with the file system of the system.

/**
 *
 * @param {string} email
 * Returns true if email is valid.
 */
function validEmail(email, error) {
    if (email.match(/^[a-zA-Z0-9.!@#$%^&*]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/)) return true
    error.email = 'Invalid email.'
    return false
}

/**
 * @param {string} username
 * The above param tag provides the name, type, and description of a function parameter.
 * Here it returns true for username with alphanumeric value.
 */
function validUsername(username, error) {
    if (username.match(/^[a-zA-Z]+[a-zA-Z0-9]*/)) return true
    error.username = 'Invalid username. Username should be alphanumeric, starting with a letter'
    return false
}

/**
 * @param {string} password
 * @param {string} repassword
 * Returns true if password and repassword are valid and equal.
 */
function validPassword(password, error) {
    if (password.length >= 8 && password.length <= 16) {
        return true
    } else {
        error.password = 'Invalid password. Password should have characters between 8 to 16.'
    }
    return false
}
function validRepassword(repassword, password, error) {
    if (repassword === password) {
        return true
    } else {
        error.repassword = 'Invalid re-password. Password and Re-password should be equal.'
    }
    return false
}

/**
 * @param {object} error
 * @returns {string}
 * Returns a string of errors based on the error object key
 */
function getError(error) {
    console.log(error)
    const keys = Object.keys(error) //The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
    return keys
        .reduce((errorMessage, currentKey) => {
            //The reduce() method reduces the array to a single value. The return value is stored in an accumulator. Here it is errorMessage.
            errorMessage.push(`${currentKey} : ${error[currentKey]}`)
            return errorMessage
        }, [])
        .join('\n')
}

function getTemplate(templateName) {
    const filePath = path.join(path.resolve('public/'), templateName)
    return fs.readFileSync(filePath, 'utf-8')
}

function getPrisma() {
    var { PrismaClient } = require('@prisma/client')
    return new PrismaClient()
}

module.exports = {
    validEmail,
    validUsername,
    validPassword,
    validRepassword,
    getError,
    getTemplate,
    getPrisma,
}
