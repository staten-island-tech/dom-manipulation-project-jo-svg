const DOMSelectors = {
    header: document.querySelector("header")
}
function submit(){
    let sub_button = document.querySelector(".search");
    sub_button.addEventListener("click", function (event){
        event.preventDefault(); 
        console.log(event.target);
    });
    
}
submit();

