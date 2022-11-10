const arr = ["EUR", "GBP", "AUD", "NZD", "USD", "CAD", "CHF", "JPY"]
const selected = document.querySelector('#currency')
const list = document.querySelector('#currency-list')

let selectedCurrency
let newArr

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

selected.addEventListener('change', (e) => {
    list.innerHTML = ""
    selectedCurrency = e.target.value
    newArr = arr.filter((curr) => curr !== selectedCurrency)
    showCurrencies(newArr)
})

// spans created will have ids of their related currency, 
// can be used to update with rates fetched from api
function showCurrencies(arr) {
    let children = arr.map(currency => {
        let parent = document.createElement('h6')
        let child = document.createElement('span')
        child.setAttribute('id', `${currency}`)
        parent.textContent = currency
        parent.appendChild(child)
        return parent
    })

    children.forEach(child => {
        list.appendChild(child)
    })
}
