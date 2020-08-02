basic.forever(function () {
    basic.showNumber(5)
    basic.pause(100)
    basic.showNumber(4)
    basic.pause(100)
    basic.showNumber(3)
    basic.pause(100)
    basic.showNumber(2)
    basic.pause(100)
    basic.showNumber(1)
    basic.pause(100)
    basic.showString("B")
    basic.pause(100)
    basic.showString("O")
    basic.pause(100)
    basic.showString("O")
    basic.pause(100)
    basic.showString("M")
    basic.pause(100)
    basic.showString("!")
    led.setBrightness(255)
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    basic.pause(500)
    led.setBrightness(119)
    basic.pause(500)
    led.setBrightness(255)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
})
