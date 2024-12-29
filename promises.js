const fsPromises = require('fs/promises');

fsPromises.readFile('Test.txt', 'utf-8').then((data)=> {
    console.log('Data: ', data);
}).catch((err) => {
    console.log('Error: ', err);
})


fsPromises.readFile('Test.txt', 'utf-8').then((data)=> {
    console.log('Data 1: ', data);
    return fsPromises.readFile('Test2.txt', 'utf-8')
}).then((data) => {
    console.log('Data 2: ', data);
}).catch((err) => {
    console.log('Error: ', err);
})