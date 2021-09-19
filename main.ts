input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    music.playMelody("C5 - C5 - C5 - C5 - ", 120)
    basic.showLeds(`
        # . . . #
        # # . # #
        . . # . .
        # # . # #
        # . . . #
        `)
    music.playMelody("B - B - B - B - ", 120)
    basic.showLeds(`
        # # . # #
        # # . # #
        # . # . #
        # # . # #
        # # . # #
        `)
    music.playMelody("A - A - A - A - ", 120)
    basic.showLeds(`
        # # # # #
        # # . # #
        # # # # #
        # # . # #
        # # # # #
        `)
    music.playMelody("G - G - G - G - ", 120)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    music.playMelody("C5 - C5 - C5 - C5 - ", 120)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # . # #
        # # # # #
        # # # # #
        `)
    music.playMelody("B - B - B - B - ", 120)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    music.playMelody("A - A - A - A - ", 120)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    music.playMelody("G - G - G - G - ", 120)
    music.stopAllSounds()
    basic.showLeds(`
        # . # . #
        . # . # .
        # . . . #
        . # . # .
        # . # . #
        `)
    basic.showLeds(`
        # # # # #
        # # . # #
        # . . . #
        # # . # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # . # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
basic.forever(function () {
	
})
