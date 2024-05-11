const p = fetch('https://dummyjson.com/products/1') 
// p is promise

p.then((value1) => {
    return value1.json()
}).then((value2) => {
    console.log(value2);
})