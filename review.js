// fetch data and add custom object to API using Promise (using JSON placeholder free API) and handle the error

function featchuser(){
    return fetch("https://jsonplaceholder.typicode.com/todos/1").then((res)=>{
        return res.json();
    }).catch((err)=>{
        console.log(err);
    })
}

featchuser().then((mess)=>{
    // let obj=[JSON.parse(JSON.stringify(mess))];
    // let user2={ userId: 2, id: 2, title: 'delectus autnvnh autem', completed: false };
    // obj.push(user2);
    // console.log(obj);

    let obj=[mess];
    let user2={ userId: 2, id: 2, title: 'delectus autnvnh autem', completed: true };
    obj.push(user2);
    console.log(obj);
}).catch((err)=>{
    console.log(err);
})