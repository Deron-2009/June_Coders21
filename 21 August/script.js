const myListItems = []
const text = document.getElementById("text")
const myList = document.querySelector(".my-list")
const push = document.querySelector("#add")
const pop = document.querySelector("#pop")
function display(){
    myList.innerHTML = "";
    text.value = ""
    for (let index = 0; index < myListItems.length; index++) {
        const item = document.createElement("li")
        item.textContent = myListItems[index]
        myList.append(item)
    }
}
push.addEventListener("click", function () {
    if(text.value)
    {
    myListItems.push(text.value);
    display();
    }
})
pop.addEventListener("click", function () {
    myListItems.pop();
    display();
})
text.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        if (text.value) {
            myListItems.push(text.value);
            display();
        }
    }
})
