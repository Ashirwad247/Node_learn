
function fetching() {
    const url = ' https://dummyjson.com/products/'
    fetch(url).then((resp) => resp.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))

}
const sayHi = (anme) => {
    console.log(`Hello ${anme}`)
}

module.exports = sayHi