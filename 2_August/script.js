const mode = document.querySelector('#mode')
mode.addEventListener("click",
function(){
    document.body.classList.toggle("mode")
})
//Variables = Which can vary
//var, let and const 
// const fname = "Deron"
// const students = ["Deron", "Ziyad","Yazir", "Ijay","Rehan"]
// //for loop
// for (var i = 0; i < students.length; i++) {
//     let listItem = document.createElement("li")
//     const studentsList = document.querySelector("#students")
//     listItem.innerHTML = students[i]
//     studentsList.append(listItem)
// }
const text = document.querySelector("#text")
const add = document.querySelector("#add")
const list = document.querySelector("#list")
add.addEventListener("click",
function(){
    const listItem = document.createElement("li")
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    listItem.innerText = text.value
    list.append(listItem);
})