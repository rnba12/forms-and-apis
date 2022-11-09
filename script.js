const myForm = document.querySelector("form");

myForm.addEventListener('submit', createCard)

function createCard(e) {
    e.preventDefault();
    let greeting = document.getElementById("greeting").value;
    let event = document.getElementById("event").value;
    let message = document.getElementById("message").value;
    myForm.style.display = "none";
    document.getElementById("cardGreeting").textContent = greeting;
    document.getElementById("cardEvent").textContent = event;
    document.getElementById("cardMessage").textContent = message;
}
