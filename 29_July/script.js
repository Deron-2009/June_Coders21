// const fname = "Yazir"
// const age = 11
// const isNaughty = true //boolean
// console.log(fname + " is "+ age+" years old") // concatanition string

// console.log(`${fname} is ${age} years old`) //template literals

// Adding Strings or data types
// type of data or data type
// console.log(typeof fname)
// console.log(typeof age)
// console.log(typeof isNaughty)

//boolean has only two value true or false
// console.log(5 > 3) //true
// console.log(5 < 3)  //false

// const x = "11"
// const y = 12
// const z = x + y
// console.log(z)

//conditions
// if(false){
//     console.log("If true, I will be in consolelog")
// }
// else{
//     console.log("If false, I will be there")
// }
const body = document.querySelector("body")
const mode = document.querySelector("#mode")
let light = true
mode.addEventListener("click", 
function(){
    if(light){
        body.style.backgroundColor = "black"
        mode.value = "Light Mode"
        light = false
    }
    else{
        body.style.backgroundColor = "white"
        mode.value = "Dark Mode"
        light = true
    }
})



