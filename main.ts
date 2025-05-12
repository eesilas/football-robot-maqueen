radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Heart)
        Maqueen_V5.motorRun(Maqueen_V5.Motors.M1, Maqueen_V5.Dir.CW, 100)
        Maqueen_V5.motorRun(Maqueen_V5.Motors.M2, Maqueen_V5.Dir.CW, 100)
    } else if (receivedNumber == 2) {
        basic.showIcon(IconNames.SmallHeart)
        Maqueen_V5.motorStop(Maqueen_V5.Motors.M1)
        Maqueen_V5.motorStop(Maqueen_V5.Motors.M2)
    } else {
        basic.showIcon(IconNames.Angry)
    }
})
radio.setGroup(77)
Maqueen_V5.I2CInit()
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
