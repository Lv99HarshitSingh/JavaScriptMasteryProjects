console.log("Hello Universe!")
let count = 0
document.getElementById("increase").onclick = function() {
    count += 1
    document.getElementById("counter").innerHTML = count
}
document.getElementById("decrease").onclick = function() {
    count -= 1
    document.getElementById("counter").innerHTML = count
}
document.getElementById("reset").onclick = function() {
    count = 0
    document.getElementById("counter").innerHTML = count
}
