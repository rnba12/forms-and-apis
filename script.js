const myForm = document.querySelector("form");

myForm.addEventListener('submit', createCard)

function createCard(e) {
    e.preventDefault();
    let greeting = document.getElementById("greeting").value;
    let event = document.getElementById("event").value;
    let message = document.getElementById("message").value;
    myForm.style.display = "none";
    document.getElementById("card").style.display = "block"
    document.getElementById("cardGreeting").textContent = `Dear ${greeting}`;
    document.getElementById("cardEvent").textContent = event;
    document.getElementById("cardMessage").textContent = message;
    console.log(event);
    if (event == "Happy Birthday!") {
        document.getElementById("bday").style.display = "block";
    } else if (event == "Merry Christmas!") {
        document.getElementById("xmas").style.display = "block";
    } else if (event == "Get Well Soon!") {
        document.getElementById("getwell").style.display = "block";
    } else if (event == "Congratulations!") {
        document.getElementById("congrats").style.display = "block";
    }
}
