const DOMSelectors = {
    form: document.querySelector("form"),
    header: document.querySelector(".header"),
    container: document.querySelector(".container"),
    card: document.querySelector(".card"), 
    bg_color: document.querySelector(".bg-color"),
    url: document.querySelector(".url"),

}
/* function submit(){
    let sub_button = document.querySelector(".search");
    sub_button.addEventListener("click", function (event){
        event.preventDefault(); 
        console.log(event.target);
    });
} */
function values(){
    DOMSelectors.form.addEventListener("submit", function(event){
        console.log("submit");
        event.preventDefault(); 
        let inputs = [
            DOMSelectors.header.value,DOMSelectors.bg_color.value,DOMSelectors.url.value
        ]
        console.log(inputs)
    })
}
values()
submit();


