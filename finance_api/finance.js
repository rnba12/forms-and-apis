const arr = ["EUR", "GBP", "AUD", "NZD", "USD", "CAD", "CHF", "JPY"]
const selected = document.querySelector('#currency')
const list = document.querySelector('#currency-list')

let selectedCurrency
let newArr

selected.addEventListener('change', (e) => {
    list.innerHTML = ""
    selectedCurrency = e.target.value
    newArr = arr.filter((curr) => curr !== selectedCurrency)
    showCurrencies(newArr)
})

// spans created will have ids of 'c1' to 'c7', 
// can be used to query and update with rates fetched from api
function showCurrencies(arr) {
    let children = arr.map((currency, index) => {
        let parent = document.createElement('h6')
        let child = document.createElement('span')
        child.setAttribute('id', `c${index + 1}`)
        parent.textContent = currency
        parent.appendChild(child)
        return parent
    })

    children.forEach(child => {
        list.appendChild(child)
    })
}
