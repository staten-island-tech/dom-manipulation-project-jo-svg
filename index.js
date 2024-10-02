const DOMSelectors = {
    header: document.querySelector("header")
}
function changeColor(){
    let button = document.querySelector(".search");
    console.log(button)
    button.addEventListener("click", function (event){
        event.preventDefault();
        console.log(event.target);
    });
}
changeColor();