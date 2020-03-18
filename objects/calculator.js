let calculator = {
    values: [],
    sum: function () {
        let risultato = this.values.reduce((x, y) => x + y)
        return risultato
    },
    sub: function () {
        let risultato = this.values.reduce((x, y) => x - y)
        return risultato
    },
    mul: function () {
        let risultato = this.values.reduce((x, y) => x * y)
        return risultato
    },
    div: function () {
        let risultato = this.values.reduce((x, y) => x / y)
        if (risultato == Infinity) {
            return "infinito"
        }
        else {
            return risultato
        }
    }
}

calculator.values = [10, 5];
console.log(calculator.sum())
console.log(calculator.sub())
console.log(calculator.mul())
console.log(calculator.div())