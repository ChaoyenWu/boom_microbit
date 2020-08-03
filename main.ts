basic.forever(function () {
    basic.showNumber(5)
    basic.pause(1000)
    basic.showNumber(4)
    basic.pause(1000)
    basic.showNumber(3)
    basic.pause(1000)
    basic.showNumber(2)
    basic.pause(1000)
    basic.showNumber(1)
    basic.pause(1000)
    basic.showString("B")
    basic.pause(1000)
    basic.showString("O")
    basic.pause(1000)
    basic.showString("O")
    basic.pause(1000)
    basic.showString("M")
    basic.pause(1000)
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
    basic.pause(2000)
    basic.clearScreen()
    basic.pause(1000)
})
