input.buttonA.onEvent(ButtonEvent.Down, function () {
    if (health == 1) {
        pins.LED.digitalWrite(true)
        network.infraredSendNumber(Colors.Indigo)
        pins.LED.digitalWrite(false)
    }
})
input.buttonB.onEvent(ButtonEvent.Down, function () {
    if (health == 1) {
        pins.LED.digitalWrite(true)
        network.infraredSendNumber(Colors.Orange)
        pins.LED.digitalWrite(false)
    }
})
network.onInfraredReceivedNumber(function (num) {
    pins.LED.digitalWrite(true)
    light.showAnimation(light.theaterChaseAnimation, 500)
    hits += 1
    pins.LED.digitalWrite(false)
})
network.onInfraredReceivedNumber(function (_2) {
	
})
let health = 0
light.setAll(0xffffff)
health = 1
let hits = 0
