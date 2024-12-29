const fs = require('fs')
let readFileCallBack = (err, data) => {
    if(err) {
        console.log('Error Occured', err);
        return err;
    }
    console.log('Data: ', data);
    return data;
}

fs.readFile('Test.txt', 'utf8', readFileCallBack)

fs.readFile('Test2.txt', 'utf8', readFileCallBack)