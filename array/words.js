var parole = []
function aggiungiParole(parola) {
    parole.push(parola)
}
function leggi() {
    var frase = ""
    for (i = 0; i < parole.length; i++) {
        frase = frase + parole[i] + " "
    }
    console.log(frase)
}
function leggiAlContrario() {
    var frase = ""
    for (i = 0; i < parole.length; i++) {
        frase = parole[i] + " " + frase
    }
    console.log(frase)
}

aggiungiParole("Nel")
aggiungiParole("mezzo")
aggiungiParole("del")
aggiungiParole("cammin")
aggiungiParole("di")
aggiungiParole("nostra")
aggiungiParole("vita")
leggi(parole)
leggiAlContrario(parole)

