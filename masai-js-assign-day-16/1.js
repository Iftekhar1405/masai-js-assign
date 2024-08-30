function Counter(value){
    return{
        value,
        increment : function(){
            value++
            console.log(value)
        },
        decrement : function(){
            value--
            console.log(value)
        }
    }
}

let c1 = Counter(10)
c1.increment()
c1.decrement()