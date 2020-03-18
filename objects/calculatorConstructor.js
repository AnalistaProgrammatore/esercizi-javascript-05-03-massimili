let calculator = function (values) {
    this.values = values,
        this.sum = function () {
            let risultato = this.values.reduce((x, y) => x + y)
            return risultato
        },
        this.sub = function () {
            let risultato = this.values.reduce((x, y) => x - y)
            return risultato
        },
        this.mul = function () {
            let risultato = this.values.reduce((x, y) => x * y)
            return risultato
        },
        this.div = function () {
            let risultato = this.values.reduce((x, y) => x / y)
            if (risultato == Infinity) {
                return "infinito"
            }
            else {
                return risultato
            }
        }
}

calculator = new calculator([10, 5]);
console.log(calculator.sum())
console.log(calculator.sub())
console.log(calculator.mul())
console.log(calculator.div())
