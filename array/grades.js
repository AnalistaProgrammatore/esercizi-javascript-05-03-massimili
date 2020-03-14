function studente() {
    this.voti = []
    this.aggiungi = aggiungi
    this.media = media
}
function aggiungi(voto) {
    this.voti.push(voto)
}
function media() {
    var totale = 0
    for (var i = 0; i < this.voti.length; ++i) {
        totale += this.voti[i]
    }
    return totale / this.voti.length
}
var mario = new studente()
mario.aggiungi(30)
mario.aggiungi(25)
mario.aggiungi(25)
mario.aggiungi(21)
mario.aggiungi(25)
mario.aggiungi(25)
mario.aggiungi(20)
mario.aggiungi(25)
mario.aggiungi(19)
mario.aggiungi(18)
console.log(mario.media())
