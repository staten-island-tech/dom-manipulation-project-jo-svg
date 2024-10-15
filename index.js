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

function submit_info() {
    DOMSelectors.form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Gather values from the form fields
        const p = DOMSelectors.p.value;
        const header = DOMSelectors.header.value;
        const url = DOMSelectors.url.value;
        const bg_color = DOMSelectors.bg_color.value;

        // Validate input
        if (!header || !url || !bg_color || !p) {
            alert("Please fill in all fields.");
            return; // Exit the function if any field is empty
        }

        // Create the card with the gathered info
        createCard({ p, header, url, bg_color });
        DOMSelectors.form.reset(); // Reset the form after submission
        remove(); // Re-attach the remove functionality
    });
}

function createCard(info) {
    DOMSelectors.container.insertAdjacentHTML("beforeend",
        `<div class="card" style="background-color: ${info.bg_color};">
            <img src="${info.url}" alt="">
            <h1>${info.header}</h1>
            <p>${info.p}</p>
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
}

function remove() {
    const remove_btns = document.querySelectorAll(".remove-btn");
    remove_btns.forEach(button => {
        button.addEventListener("click", function () {
            this.parentElement.remove(); // Removes the parent of the button element
        });
    });
}

// Initialize the form submission and button removal
submit_info();
remove(); // Initial call to set up remove buttons
