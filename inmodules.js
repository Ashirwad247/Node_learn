const { log } = require('console');
const path = require('path');
console.log(path.sep)
const filePath = path.join('/content/', 'syb', 'text.txt')
console.log(filePath)
const base = path.basename(filePath)
console.log(base)
// console.log(__dirname)
const absol = path.resolve(__dirname, 'content', 'syb', 'test.txt')
console.log(absol)