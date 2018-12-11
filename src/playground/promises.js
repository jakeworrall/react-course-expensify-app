const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
           name: 'jake',
           age: 22
        });
        //reject('something mental went wrong');
    }, 5000);
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('this is my other promise');
        }, 5000);
    });
}).then((str) => {
    console.log(str);
}).catch((error) => {
    console.log('error: ', error);
});

console.log('after');