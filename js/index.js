let name;
setTimeout(() => {
    name = 'onoh'
}, 5000);
setInterval(() => {
    console.log(name);
}, 1000);

let p = new Promise((resolve, rejecft) => {
    setTimeout(() =>{name='onoh'},
    
    5000)
})

number = 0
p.then(value => {
    console.log(number);
    name = value}).then(result=>{
        console.log(number);

        console.log(number);b 

        console.log(name)
        number ++
    }
).then(result => console.log(number)
).catch(err => console.log(err)
)
testFunction = async ()=>{
    name = await p
    console.log(name);
}
testFunction()