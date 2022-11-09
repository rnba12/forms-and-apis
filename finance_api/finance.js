const selected = document.querySelector('#currency')
const arr = ["EUR", "GBP", "AUD", "NZD", "USD", "CAD", "CHF", "JPY"]

let selectedCurrency;
let newArr

selected.addEventListener('change', (e) => {
    selectedCurrency = e.target.value
    newArr = arr.filter((curr) => curr !== selectedCurrency)
    // let children = newArr.map(el => document.createElement('h6').innerHTML(el))
    // console.log(children)
    // document.querySelector('#currency-list').appendChild(() => 
})
