
// alert("hello, world!") //
const btn = document.getElementById("my-button")

btn.addEventListener("click", sayHi)

btn.addEventListener("mouseover", changecolor)

const body = document.getElementById("body")

function sayHi(){
    alert("Hello World")
}


function changecolor(){
    if(body.styles.backgroundColor === "white") {
        
        body.style.backgroundColor = "green"
     } else body.styles.backgroundColor = "white"

} //must have styles sheet linked for above to work//
