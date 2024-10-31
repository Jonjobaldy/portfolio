const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const value = e.target.textContent.toLowerCase();
        document.body.style.backgroundColor = value;

        if(value === "white"){
            document.body.style.color = "black";
        } else {
            document.body.style.color = "white";
        }
    })
})