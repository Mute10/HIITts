const morning = "9:00AM"
let midnight = "12:00AM"
console.log(`it's ${morning} now, we'll talk again at ${midnight}`)

function dialog(conversation) {
    let counting = 0
    const gratitude = ["leap", "movement without direction", "what matters", "power from precision"]
    let reflect = ["discipline", "ascend", "steward of abundance", "world bends", "anchored"]
    const mathHelp = Math.min(reflect.length, gratitude.length)
    for (let i = 0; i < mathHelp; i++) {
        if (reflect[i].length >= 4 && gratitude[i].length >= 4) {
            counting ++;
            console.group("it's a win")
        } else {
            counting--;
            console.group("it's a loss")
            }
    }
    return console.log(counting);
}
dialog("what's the solution")