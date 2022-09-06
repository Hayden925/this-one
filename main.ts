input.onButtonPressed(Button.A, function () {
    Theodore += 1
    basic.showNumber(Theodore)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("You both lose")
})
input.onButtonPressed(Button.B, function () {
    Frank += 1
    basic.showNumber(Frank)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("A")
    basic.pause(500)
    basic.showNumber(Theodore)
    basic.pause(500)
    basic.showString("B")
    basic.pause(500)
    basic.showNumber(Frank)
    basic.pause(500)
    basic.clearScreen()
})
let Theodore = 0
let Frank = 0
Frank = 0
Theodore = 0
loops.everyInterval(200, function () {
    music.playMelody("D B D B D B D B ", 2222)
})
