console.log('Getting result of the promise...');
const p = Promise.reject('reason for rejection');
p.catch((error) => console.log('Error: ', error));
