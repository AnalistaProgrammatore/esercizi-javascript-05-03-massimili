function iseEmpty(oggetto) {

    var grandezza = 0;

    for (key in oggetto) {
        if (oggetto.hasOwnProperty(key)) {
            grandezza++;
        }
    }
    if (grandezza == 0) {
        return true
    }
    else { return false }
}
var user = new Object()
var user = {}
console.log("Prima: " + iseEmpty(user))

user.name = "Mario"
user.surname = "Rossi"
console.log("Dopo: " + iseEmpty(user))
