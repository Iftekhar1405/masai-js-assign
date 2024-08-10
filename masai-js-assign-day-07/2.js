function filterArray(array,callback){
    let filteredArray = array.filter(elem => callback(elem));
    return filteredArray
}

function even(elem){
    return elem%2 === 0
}

console.log(filterArray([1,2,3,4,5,6,7,8,9,10],even))