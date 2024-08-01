let num = [1,2,3,4,5,6,7,8]

let sqr = num.map(function(elem){ return elem**2})
console.log(sqr)


let even = num.filter(function(elem){ return elem % 2 === 0})
console.log(even)


let sum = num.reduce(function(acc,elem){ return acc + elem})
console.log(sum)