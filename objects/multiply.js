let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}
function moltiplica(moltiplicando, moltiplicatore) {
    return moltiplicando * moltiplicatore
}

for (key in menu) {
    if (!isNaN(menu[key])) {
        Object.defineProperty(menu, key, {
            value: moltiplica(menu[key], 3)
        })
    }

}
console.log(menu)