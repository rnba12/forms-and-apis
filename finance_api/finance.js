const myForm = document.querySelector('form');

myForm.addEventListener('submit', liveExchange)

async function liveExchange(e) {
    e.preventDefault();
    // let currency = document.getElementById('currency').value;
    let url = "https://www.freeforexapi.com/api/live?pairs=EURUSD"
    await fetch(url)
    .then((response) => response.json())
    .then((data) => {
        let currencyInfo = data;
        console.log(currencyInfo);
    })
    .catch(console.log("error"))
}
