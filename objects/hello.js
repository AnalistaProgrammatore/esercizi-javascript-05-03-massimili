var user = new Object()
var user = {}
user.name = "Mario"
user.surname = "Rossi"
Object.defineProperty(user, 'surname', {
    writable: false,
    configurable: false
})
Object.defineProperty(user, 'name', {
    value: "Marco"
})

console.log(user)
delete user.name
console.log(user)
