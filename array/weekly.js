function weekTemps() {
    this.dataStore = [[], [], [], []];
    this.add = add;
    this.mediaMensile = mediaMensile;
    this.mediaSettimanale = mediaSettimanale;
}
function add(settimana, temp) {
    this.dataStore[settimana - 1].push(temp);
}
function mediaMensile() {
    var total = 0;
    var elementi = 0
    for (var i = 0; i < this.dataStore.length; ++i) {
        for (var j = 0; j < this.dataStore[i].length; ++j) {
            total += this.dataStore[i][j];
            elementi += 1
        }
    }
    return total / elementi;
}
function mediaSettimanale(settimana) {
    var total = 0;
    for (var j = 0; j < this.dataStore[settimana - 1].length; ++j) {
        total += this.dataStore[settimana - 1][j];
    }

    return total / this.dataStore[settimana - 1].length;
}
var thisWeek = new weekTemps();

thisWeek.add(1, 52);
thisWeek.add(1, 55);
thisWeek.add(1, 61);
thisWeek.add(1, 65);
thisWeek.add(1, 55);
thisWeek.add(1, 50);
thisWeek.add(1, 52);
thisWeek.add(2, 49);
thisWeek.add(2, 52);
thisWeek.add(2, 55);
thisWeek.add(2, 61);
thisWeek.add(2, 65);
thisWeek.add(2, 55);
thisWeek.add(2, 50);
thisWeek.add(3, 52);
thisWeek.add(3, 49);
thisWeek.add(3, 52);
thisWeek.add(3, 55);
thisWeek.add(3, 61);
thisWeek.add(3, 65);
thisWeek.add(3, 55);
thisWeek.add(4, 50);
thisWeek.add(4, 52);
thisWeek.add(4, 49);
thisWeek.add(4, 52);
thisWeek.add(4, 55);
thisWeek.add(4, 61);
thisWeek.add(4, 65);
console.log("Media mensile " + thisWeek.mediaMensile());
var sett = 2
console.log("Media settimana " + sett + " " + thisWeek.mediaSettimanale(sett))
for (sett = 1; sett < 5; ++sett) {
    console.log("Media settimana " + sett + " " + thisWeek.mediaSettimanale(sett))
}
