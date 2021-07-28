// Output to the console
console.log(10)

// Find the element
// Change the element 

const heading = document.querySelector('h1')
const btn = document.querySelector('input')
const link = document.querySelector("a");
link.addEventListener("mouseover",
function(){
heading.innerText = "Hello, World";
heading.className = "heading";
link.href = "https://www.google.com";
})

