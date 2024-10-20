const DOMSelectors = {
    form: document.querySelector("form"),
    container: document.querySelector(".container"),
    header: document.querySelector(".header"),
    bg_color: document.querySelector(".bg-color"),
    url: document.querySelector(".url"),
    p : document.querySelector(".paragraph")
};
document.addEventListener('scroll', () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
function submit_info(){
    // Gather values from the form fields
    const p = DOMSelectors.p.value;
    const header = DOMSelectors.header.value;
    const url = DOMSelectors.url.value;
    const bg_color = DOMSelectors.bg_color.value;

    // Validate input
    if (!header || !url || !bg_color || !p) {
        alert("Please fill in all fields.");
        return false; // Exit the function if any field is empty
    }
    return true; 
};
function createCard(p, header, url, bg_color) {
    DOMSelectors.container.insertAdjacentHTML("beforeend",
        `<div class="card" style="background-color: ${bg_color};">
            <img src="${url}" alt="">
            <h1>${header}</h1>
            <p>${p}</p>
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
    
};
function remove() {
    const remove_btns = document.querySelectorAll(".remove-btn");
    remove_btns.forEach(button => {
        button.addEventListener("click", function () {
            this.parentElement.remove(); // Removes the parent of the button element
        });
    });
};


function main() {
    DOMSelectors.form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Gather values and validate them before creating the card
        if (submit_info()) {
            createCard(DOMSelectors.p.value, DOMSelectors.header.value, DOMSelectors.url.value, DOMSelectors.bg_color.value);
            DOMSelectors.form.reset(); // Reset the form after submission
            remove();
        }
    });
};
main();