const fsPromises = require('fs/promises');
const openFiles = (fileName) => {
    return new Promise((resolve, reject)=> {
        fsPromises.readFile(fileName, 'utf-8').then((data)=> {
            console.log('Data: ', data);
            resolve(data)
        }).catch((err) => {
            console.log('Error: ', err);
            reject(err)
        })
    })
}

const multipleFileOpen = async() => {
    try{
        const result = await openFiles('Test.txt')
        console.log("Test File contents: ", result)
        const result2 = await openFiles('Test2.txt')
        console.log("Test2 File contents: ", result2)
    } catch(err) {
        console.log('Error', err);
    }
}

multipleFileOpen()