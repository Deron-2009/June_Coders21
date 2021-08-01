//Loop, for loop
// for (let i = 0; i < 10; i++) {
//     console.log("Yazir")
// }
// // const students = ['Yazir','Deron', 'Kamran', 'Mazhar', 'Rashid', 'Shahid', 'Yazir']
// console.log(students)
const list = document.querySelector("#list");
for (let i = 1; i < 11; i++) {
    let listItem = document.createElement("li")
    listItem.innerText = `${i*13}`
    list.append(listItem);
}


