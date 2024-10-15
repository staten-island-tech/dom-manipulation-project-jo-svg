const DOMSelectors = {
    form: document.querySelector("form"),
    header: document.querySelector(".header"),
    container: document.querySelector(".container"),
    card: document.querySelector(".card"), 
    bg_color: document.querySelector(".bg-color"),
    url: document.querySelector(".url"),
    p : document.querySelector(".paragraph")
}
document.addEventListener('scroll', () =>{
    const nav = document.querySelector("nav")

    if (window.scrollY > 0){
        nav.classList.add('scrolled');
    }
    else{
        nav.classList.remove('scrolled');
    }
})
function Create_card(){
    //create a function that only allows you to submit if all the stuff has an input, DO TS AT HOME 
    let card_count = document.querySelectorAll(".card").length; 
    //allows for you to see the amount of cards 
    DOMSelectors.form.addEventListener("submit", function(event){
        console.log("submit");
        event.preventDefault(); 

        let p = DOMSelectors.p.value;
        let header = DOMSelectors.header.value;
        let url = DOMSelectors.url.value;
        let bg_color = DOMSelectors.bg_color.value;

        if (!header || !url || !bg_color || !p) {
            alert("Please fill in all fields.");
            //alert sends an alert to the user (they have to press ok) if the function is true
            return; // Exit the function if any field is empty
        }
        DOMSelectors.container.insertAdjacentHTML("beforeend",
            `<div class="card"style="background-color: ${bg_color};">
            <img src="${url}" alt="">
            <h1>${header}</h1>
            <p> ${p}</p>
            <button class="remove-btn">
                <span class="trash">
                    <span class="lid"></span>
                    <span class="top"></span>
                    <span class="bottom"></span>
                </span>
                DELETE
            </button>
            </div>`
        );
        /* DOMSelectors.header.value = '';
        DOMSelectors.bg_color.value = '';
        DOMSelectors.url.value = '';
        DOMSelectors.p.value = '';
        //this makes the value back to nothing once the stuff is submited, ts is one way to do it*/
        DOMSelectors.form.reset();

        const remove_btn= document.querySelectorAll(".remove-btn");
        remove_btn.forEach(button =>{
            button.addEventListener("click", function(){
            this.parentElement.remove();
            //removes the parent of the button element
        }); 
    });
});
}

Create_card();



