function getUserData(id,callback){
    setTimeout(() => {
        callback({id:id,name :'hey',email:"heya@gmail.com"})
    }, 2000);
}
function displayUser(userData){
    console.log(`id: ${userData.id} \n name: ${userData.name} \n email: ${userData.email}`)
}

getUserData(3,displayUser)