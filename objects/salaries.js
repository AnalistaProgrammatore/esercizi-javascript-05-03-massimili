let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
function sumSalaries(oggetto) {
    console.log(oggetto)

    var totale = 0;

    for (key in oggetto) {
        totale = totale + oggetto[key]

    }
    return totale
}
console.log("La somma dei salari è: " + sumSalaries(salaries))