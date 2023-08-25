input.onButtonPressed(Button.A, function () {
    X += 1
    basic.showString("A")
    basic.showNumber(X)
})
input.onButtonPressed(Button.AB, function () {
    SUM = X + Y
    basic.showNumber(SUM)
    X = 0
    Y = 0
})
input.onButtonPressed(Button.B, function () {
    Y += 1
    basic.showString("B")
    basic.showNumber(Y)
})
let SUM = 0
let Y = 0
let X = 0
X = 0
Y = 0
