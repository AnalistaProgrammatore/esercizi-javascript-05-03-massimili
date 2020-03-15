function parola() {
    this.lettere = []
    this.aggiungi = aggiungi
    this.concatena = concatena
}
function aggiungi(lettera) {
    this.lettere.push(lettera)
}
function concatena() {
    var risultato = ""
    for (var i = 0; i < this.lettere.length; ++i) {
        risultato = risultato + this.lettere[i]
    }
    return risultato
}
var leggi = new parola()
leggi.aggiungi("B")
leggi.aggiungi("U")
leggi.aggiungi("O")
leggi.aggiungi("N")
leggi.aggiungi("G")
leggi.aggiungi("I")
leggi.aggiungi("O")
leggi.aggiungi("R")
leggi.aggiungi("N")
leggi.aggiungi("O")
leggi.aggiungi("!")
console.log(leggi.concatena())

