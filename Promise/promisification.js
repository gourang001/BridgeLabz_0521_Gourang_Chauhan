function fetchData(callback) {
    setTimeout(() => {
        const data = { name: 'Gourang' };
        callback(null, data);
    }, 1000);
}

fetchData((error, result) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Data:', result);
    }
});



function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: 'Gourang' };
            resolve(data); 
        }, 1000);
    });
}

fetchData().then(result => console.log('Data:', result)).catch(error => console.error('Error:', error));

