var oggetto = function () {
    this.step = 0

    this.up = function () {
        this.step += 1
        return this
    }

    this.down = function () {
        this.step -= 1
        return this
    }

    this.showStep = function () {
        console.log(this.step)
    }
}
var ladder = new oggetto()

ladder.up().up().down().showStep() 
