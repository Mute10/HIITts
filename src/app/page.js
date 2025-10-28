//function declarations
function problem(solution) { //1
    let one = 17
    let two = 18
    let three = one * two
    return solution
}
problem(18)


function demolition(radius) { //2
    let cubed = Math.ceil(7) * 7 **3
    let triangle = Math.floor(8.8)
}
demolition(10)


function glassDoor(product) { //3
    let doorKnob = "Stainless Steel"
    if (product.length >= doorKnob.length) {
        product = product.slice(0, -1)
    } else {
        doorKnob = doorKnob.slice(0, -1)
    }
    //console.log(doorKnob)
    return product
}
glassDoor("product")


function fieldSpace(km = []) { //4
    verticalSpace = ["100 yards", "200 yards", "300 yards"]
    horizontalSpace = ["50 kilometers", "100 kilometers", "150 kilometers"]
    counter = 0
    for (let i = 0; i < km.length; i++) {
        if (verticalSpace > km[i]) {
            verticalSpace.pop()
            counter++
        } else {
            km.pop()
            counter--
        }
    }
    return km
}
fieldSpace(["100", "200", "300"])


function direction(left = [], right = []) { //5
 let down = [-12, -1, -3]
 let up = [11, 11, 12]
 counter = 0
 for (i = 0; i <= left.length; i++)
    for (j = 0; j <= right.length; j++){
        if (up[i] >= left[i] && down[j] >= right[j]) {
            counter++;
            up.pop()
            down.shift()
            //console.log(`Up is: ${up} and Down is: ${down}`)
        } else {
            counter--;
        }
    }
return left, right
}
direction([50, 11, 14], [-11, -25, -45])


function guam(milesLong = 32) { //6
    let saipanLength = 14;
    let difference = 7
    let solution = saipanLength * 7
    let newSolution;
    if (solution >= milesLong) {
        solution--
    } else {
        newSolution = parseFloat(solution)
    }
    return difference
}
guam()


function performance(mbps = [30, 60, 100, 150, 200, 250]) { //7
 let benchMarkMbps = 100
 let solidMbps = 200
 let solution = "";
 let newSolution = 0.0
 for (let i = 0; i < mbps.length; i++) {
    if (mbps.includes(benchMarkMbps) || mbps.includes(solidMbps)) {
        solution +=  benchMarkMbps.toString() + " " + solidMbps.toString()
        //console.log(solution)
    } else {
        newSolution = parseFloat(solution)
    }
 }
 return mbps
}
performance()


//Hoisting
mentalEnergy() //8
function mentalEnergy(brain = true) {
    let thoughts = ["ideas", "limits", "fears", "what is possible"]
    let learned = ["understanding", "creator of own world"]
    let mentalProgramming = "make dreams real"
 do {
    brainChange = brain.toString(brain)
    mentalProgramming += "thoughts work day and night"
 } while (learned.length > thoughts.length)
    //console.log(`My "${mentalProgramming}" ideology get's better everyday. And ${brainChange} is a boolean`)
    return mentalProgramming

}



//Function Expression

const instructions = function hillBooksInc(limit = "") { //1
    const details = "what makes hard problems simple?"
    let goals = ["I can learn anything", "I can build relationships with anyone",
        "create your own path to success", "I'm learnign to succeed"
    ]
    let charCount = goals.reduce((sum, str) => sum + str.length, 0)
    //console.log(charCount)
    return charCount
}
instructions()


//Arrow Functions
const growth = (signal) => { //2
    let fear = "price of growth"
    let counter = 0
    let risks = ["Take no risks at all.", "face challenges!", "welcome fear, I see you are here."]
    for (let i = 0; i < risks.length; i++) {
        if (risks[i] > fear) {
            fear += " + " + "possibilities instead of problems"
            counter++
        } else {
            counter--
            fear += "your interal dialogue has got the better of you"
        }
    }
    return signal
}
growth("what can you do differently next time?")


const purpose = () => { //3
    let lightBulb = "every failure teaches you something valuable"
    let nextStep = "";
    if (typeof purpose != "") {
        nextStep += "keep trying"
        lightBulb = lightBulb.slice(1, -2)
        //console.log(lightBulb)
    } else {
        lightBulb += ". read more books"
    }
    return lightBulb
}
purpose()



const visualization = (str, chars) => { //4
    const result = {}
    for (const ch of chars) {
        result[ch] = [...str].filter(letter => letter === ch).length
    }
    return result;
}
const buildHighSum = () => {
    let momentum = "consistency is more important than duration!?"
    let automatic = "Progess is effortless!"
    let newMomentum = [...momentum].filter(letter => ["c", "a"].includes(letter))
    let newSolution = visualization(automatic, ["?", "!"])
    let achievement = visualization(momentum, ["c", "a"])
    //console.log(achievement)
    //console.log(newSolution)
return newSolution
}
buildHighSum()



buildLowSum([-20, -2, -33, -404, "bad error"]); //5
function buildLowSum(arr) {
    let Result = [];
    for (i = 0; i < arr.length; i++){
        if (typeof arr[i] === "number" && arr[i] < -2) {
            Result.push(arr[i])
            //console.log(Result)
        }
    }
    return Result
}


henryFordCars([-162, -33, -3, -.03, -44, -250, -202, -17]) //6
function henryFordCars(arr) {
const filteredCarId = arr.filter(x => typeof x === "number" && x < 0 && !x.toString().includes("3"))
//console.log(filteredCarId);
return filteredCarId
}



const beerBrands = (summer = [], fall = []) => { //7
 let result = "";
 for (let i = 0; i < summer.length; i++) {
    for (let j = 0; j < fall.length; j++) {
        if (summer.length > fall.length) {
            result += [...summer[i]].filter(letter => ["s", "l", "c"].includes(letter)).join(" ,")
        }
        else {
            result += [...fall[j]].filter(letter => ["f", "l"].includes(letter)).join(" ")
           //console.log(result) 
        }   
    }
    return result
 }
}
beerBrands(["striped summer", "hot summer", "rainy summer"], 
    ["signs of fall", "halloween", "orange leaf"]);


    //invoked functions
function project(waterfall) { //1
    const stageOne = {
        name: "Sueco",
        hitSong: "paralyzed"   
    }
    //console.log(stageOne.hitSong)
}
project("405")



const Build = { //2
    name: "Sora",
    location: "Kingdom Hearts",
    releaseDate() {
        //console.log(`Hello, ${this.name}! `)
    }
}
Build.releaseDate()


const stall = { //3
    unit: "stall",
    build: () => {
        //console.log(`Unit: ${stall.unit}`)
    }
}
stall.build()


const facility = { //4
    main_office: "floor 4",
    Science_and_Engineering: "floor 6",
    maintenence: "floor 2",
    electrical: "floor 7",
    Build: () => {
        let result = "I lost the key, can you help me find it?"
        let start = [`Hit the ${facility.Science_and_Engineering} button.`, 
            `Hit the ${facility.electrical} button.`,
            `Hit the ${facility.maintenence} button.`, 
            `Hit the ${facility.main_office} button.`
        ]
        for (let i = 0; i < start.length; i++) {
            let step = start[i].split(",")[0];
                if (result.length >= step.length) {
                    result = result.slice(0, step.length)
                    //console.log(result)
                    
                } else {
                    start.unshift("Let's go to the secret basement level.")
                    //console.log(start)
                   break
                }
        }
        return result    
    } 
}
facility.Build()


//function generators
function* projectZ(Attendence) { //1
    yield 99;
    yield [1, 1, 0]
    yield {x: 0, z: 1, y: 2}
    yield "Utopia"
    yield true;
    yield false;

}
const results = projectZ()
//console.log(results.next())


const project4 =  {//2
    name: "Frank",
    age: 72,
    location: "Michigan",
    build4: () => {
        let storage = `${project4.name}` +  `, ${project4.age}`
        let residency = `, ${project4.location}`
        //console.log(storage + residency)
    }
    }
    project4.build4()
    


    function* project20() { //3
        let score = 88
    yield score;
    let result = Math.ceil(score) * 7.432
    if (result >= 860) yield "STOP"
    else yield "Below expected output"
    
    yield score /2;
}
    const project202 = project20()
      for (const val of project20()) {
   //console.log(val)
      }
      const allValues = Array.from(project20(), val => `Value: ${val}`)
      //console.log(allValues)
      


function* frequency(nums = [Math.ceil(Math.random() *499 + 150), Math.ceil(Math.random() *499 + 150),
    Math.ceil(Math.random() *499 + 150), Math.ceil(Math.random() *499 +150)
]) { //4

    let result = []
    let msg = ""
    const limit = 500
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > limit){
        msg =  `Can't go above ${limit}`
        }  else {
            msg = "Frequency is fully operational"
        }

        if (nums[i] > 200 && nums[i] < 400) {
            result.push(nums[i])
          msg = ` Hidden frequency found at: ${nums[i]}.` 
        } else {
            msg =  "No hidden frequency detected"
        }
        yield msg
    }
yield result
}
//console.log(sum.next())
for (const val of frequency()){
    //console.log(val)
}



function* build_a_house(supplies) { //5
    yield "Monday"
    let money = ["Bricks to build houses and libraries", "tools", "counting coins"]
    let clothingStore = "High Quality fabric"
    yield "Tuesday"
    for (let i = 0; i < supplies.length; i++) {
    if (supplies[i].split("").filter(l => ["b", "B"].includes(l)).length > 0) {
        money.push(supplies[i])
       // console.log(money)
        yield "STOP"
    } else {
        delete money[1]
        money.splice(1, 1, clothingStore) 
        break
    }
    
 }
return money
}
for (const val of build_a_house(["hammer", "brick", "stone", "leaf", "Tree"])) {
 
}



const smallChoices = function*() { //6
    yield "GO"
    yield "STOP"
let dreams = {date: "10/9/25", goal: "build something.", cancel: "Let's cancel the project."};
for (const key in dreams) {
    let val = dreams[key]
    if (typeof val === "string") {
        val = val.replace("build", "create")
    }
    yield val
}
}
for (const val of smallChoices()) {
//console.log(val)
}


const bigChoices = () => ({ //7
*[Symbol.iterator]() {
yield "firewall";
yield {secretCode: 7293, name: "Cube", type: "OD10"}
yield "packet send"
}
})
let result = {};
let randomObj = {name: "Mike", location: "FL", job: "conductor"}
let count = 0
for (const val of bigChoices()) {
 if (typeof val === "object") {
    Object.assign(result, val)
 } else {
    result[`message ${count}`] = val;
    Object.assign(result, randomObj)
    count++
 }
 //console.log(result)
}



const superComputer = () => ({
    *[Symbol.iterator] () {
        yield "Firewall"
        yield "Data Breach"
        yield 100.1
        yield {Q1: "Test Phase", Q2: "Final Preparations", Q3: "Mass Production", Q4: "No major projects"
        }
    }
})
let testResults = {}
let counterr  = 0
const l = ["e", "c"]
let testObj = {name: "4X-290", type: "weapon", progress: "80%", malfunctions: 2}
const superData = [...superComputer()]
for (const val of superData) {
    if (typeof val === "object") {
        const matches = Object.entries(val).filter(([_, value]) => 
        l.some(xyz => value.toString().toLowerCase().includes(xyz))
        );
        Object.assign(testResults, testObj)
        if (matches.length > 0) {
            testResults[`object_${counterr}`] = matches
            counter++
        } 
    } else if (
    typeof val === "string" &&
    l.some(xyz => val.toLowerCase().includes(xyz))
  ) {
    testResults[`match_${counterr}`] = val;
    counterr++;
  }
}
//console.log(testResults)



class LlcInc { 
    constructor(city, terminal) {
        this.city = city
        this.terminal = terminal
    }
    dreamWorks = () => {
        let result = {}
        let cityLimits = {name: "Shinjuku", population: 1500000, km: 50, trains: "Bullet and regular"}
        let foodStalls = {takoyaki: "seafood", sushi: "salmon", rice: 1, RedLightDistrict: "Avoid"}
        let policeBox = [["kobayashi", "shinkai", "koga", "asaskua"], [1.2, 5, 3.3, 9]]
        for (const key in cityLimits) {
            let val = cityLimits[key]
            for (const key2 in foodStalls) {
                let doubleVal = foodStalls[key2]
                if (typeof val == "string" && (["a, b, d, t"]).some(element => val.toLowerCase().endsWith(element))) {
                    Object.assign(result, val)
                    Object.freeze(result)
                } else {
                    result = policeBox.map(box => box.slice(0, 2).join(" "))
                    Object.create({packetSend: "null"})
                    //console.log(result)
                }
                if (typeof doubleVal === "string" && (["v", "j", "k", "m"]).some(element2 => 
                    doubleVal.toLowerCase().startsWith(element2))) {
                   Object.values(result, foodStalls)
                    result = JSON.stringify(result)
                } else {
                    const ObjResult = JSON.stringify(policeBox)
                        Object.freeze(foodStalls)
                }
            }
        }
        return result
    }
}
const llc = new LlcInc("Tokyo", "Haneda Terminal")
llc.dreamWorks()




class Indigo {
    constructor(batteryType) {
        this.batteryType = batteryType
    }
    budget(num) {
        let task = [103, 131, 312, 313, 134, 310, 211, 212, 113, 414,
            110, 111, 152, 133, 194, 120, 2.01 **10, 122, 193, 140, Math.ceil(Math.random() *2500.12 * 175)]
            let tasksCompleted = task.filter(e => e > 175)
            //console.info(tasksCompleted)
    }
}
const indigo = new Indigo("2 AAs")
indigo.budget(10)



class decodeToy {
    constructor(toy, electronic) {
        this.toy = toy
        this.electronic = electronic
    }
    *toyWorks() {
        yield "Toys"
        let toyList = [["Spawn", "Spider Man", "TMNT", "Crash Bandicoot"], [9.99, 9.99, 6.99, 7.99]]
        let editedList = toyList.map(e => e.filter(oe => !oe.toString().includes("7")).map(oe =>
            typeof oe === "string" ? oe.replace(/m/gi, "xx") : oe))
        let result = []
        result.push(editedList)
        yield "Bacon Saver"
        yield 10
        yield result
    } 
}
const toyBox = new decodeToy("Toy Box!", "RC Car")
for (const val of toyBox.toyWorks()){
            //console.log(val)
        }



class SoapCo {
    constructor() {

    }
    chemicals() {
        let chemicals = ["Sodium Hydroxide(NaOH)", "Potassium Hydroxide(KOH)", "Sodium Carbonate",
            "Cocamidopropyl Betaine"
        ]
        let recommendedChemicals = []
        let notUsed = ["linalool", "limonene hydroperoxides", "hydroxyisohexyl", "treemoss absolute",
        "isoeugenol", "cinnamyl alcohol"]

        for (let i = 0; i < chemicals.length; i++) {
            if (chemicals.length < notUsed.length) {
                 let badElements = notUsed.filter(e => !e.includes("h"))
                 recommendedChemicals.push(...badElements)
                break;
                
            } else {
               let goodElements = chemicals.filter(e => e.includes("h").toLowerCase())
               recommendedChemicals.push(...goodElements)
                
            }
        }
        return recommendedChemicals
        
    }
}
const soap = new SoapCo()
soap.chemicals()



class Planets {
    constructor(stars, moons) {
        this.star = stars
        this.moons = moons
    }
    mainMenu(nums = []) {
        let result = []
        let counter = 0
        let stats = [Math.random()*70 + 10, Math.random() * 80 + 15, Math.random()*70 + 15,
            Math.random()*100 + 10, Math.random()*170 + 20
        ]
        for (i = 0; i < stats.length; i ++) {
            if (nums.length > stats.length) {
                counter++;
                result.push(stats.filter(e => e > 25).map(e => Math.floor(e)))
            } else {
                counter++;
                let lowStats = stats.filter(e => e < 25)
                result.push(lowStats)
            }
        }
        //console.log(result)
        //console.log(`${counter}`)
        return result
    }
}
const planets = new Planets("nebulous", "black hole")
planets.mainMenu([11, 17, 66, 55, 34, 99, 99])



class Globe {
    *weather(stats = [Math.random() *50 + 20, Math.random() *50 + 20, Math.random() *50 + 20, 
        Math.random() *50 + 15
    ]) {
        yield 19.99;
        yield "STOP"
         let result = []
         let nums = [22, 22, 23, 23, 25, 29]
         for (let i = 0; i < Math.min(stats.length, nums.length); i++) {
            if (nums[i] <= stats[i]) {
                result.push(Math.ceil(stats[i]))
            }
            else {
                stats.pop()
            }
         }
yield result

    } 
}
const countries = new Globe()
for (const val of countries.weather()){
            //console.log(val)
        }



        class CrownsLibrary {
            constructor(book){
                this.book = "Think rich and grow"
            }
            libraryBooks = () => {
                let rentedBooks = [["lost and found", "hunting voyage", "avoiding scams", "clowns"], ["hollywood",
                    "happy trees", "viruses", "Deuced", "Wavy River"
                ]]
                let missingBooks = ["Jason", "Halloween", "Halloween Pranks"]
                let result = []
                const regexStart = /^(h|c)/i; 
                const regexEnd = /(r|b)$/i;
                const returnedBooks = rentedBooks.map(inner => inner.filter(e => !regexStart.test(e) &&
                !regexEnd.test(e)))

                for (const arr of returnedBooks) {
                        if (arr.length > 0) {
                            result.push(arr)
                            //console.log(result)
                        } else {
                            result.concat(missingBooks += javaScript)
                        }
                        
                }
                return result
            }
        }
        const closedLibrary = new CrownsLibrary()
        closedLibrary.libraryBooks("Book theft is common!")



class SeventyOne {
constructor(nine){
    this.nine = nine
}
*[Symbol.iterator]() {
    yield 1097
    yield "beginning transfer"
    yield "STOP"
    let result = ""
    let counter = 0

     if (Array.isArray(this.nine)) {
         for (let i = 0; i < this.nine.length; i++){
        yield "is nine a list?"
            result += this.nine[i]
            counter++
         }
        } else {
            counter--
            result += `${this.nine} isn't a list`
        }
        yield result

}
}
const bigSeven = new SeventyOne(Math.ceil(Math.random() *35 + 1))
for (const value of bigSeven) {
    //`console.log(value)
}


class B2L10 {
    constructor(fiberCable) {
      this.wired = fiberCable
    }
    *[Symbol.iterator]() {
        let result = []
        let mathList = Math.ceil(Math.random() * 200 +1)
        let mathList2 = Math.floor(Math.random() *200 + 1)
        let data = [[Math.trunc(Math.random()*700 + 10), Math.abs(Math.random()*700 + 17, 
        Math.hypot(Math.random()*700+18))], [Math.floor(Math.random()*500 + 50), Math.floor(Math.random()*500 + 50),
            Math.floor(Math.random()*500 + 50), Math.floor(Math.random()*500 + 50), Math.floor(Math.random()*500 + 50)
        ]]
        if (mathList >= mathList2) {
            result = mathList += mathList2
             data = data.map(m => m >= Math.floor(Math.random() *800 +90)).some(e => e / 10 ? e * 8: e)
            console.log(data)
        } else if (mathList < mathList2) {
            data = data.map(n => n > 225 ? n * 3 + 4: n).some(element => 
                element / 4 ? element * 4: element)
            console.log(data)
            result = mathList2 += mathList
        }
        yield result
    }

}
const Subd = new B2L10("fiber")
for (const val of Subd) {
    //console.log(val)
}


class WaterPresssure {
    *[Symbol.iterator]() {
        yield "too low"
        let result = []
        let unlisted;
        let counter = 0
        let tao = [[11, 13, 7, 43, 67], [11, 3, 89, 101, 55], [9, 19, 29, 29, 49]]
        let yin = [[33, 22, 10, 5, 64], [10, 20, 80, 40, 20], [2, 22, 30, 14, 100]]
        for (let i = 0; i < tao.length; i++){
            for (let j = 0; j < yin.length; j--){
                if (tao.flat().length > yin.flat().length) {
                    i += "tao is bigger"
                    const numfil = tao.filter(num => !num.toString().includes("8").map(num =>
                        typeof num === "string" ? num.replace(/7/gi, "3.3") : num))
                    counter ++;
                    unlisted = Object.freeze({name: "virus"})
                    result.push(numfil)
                } else {
                    j += "yin is bigger"
                    counter--;
                }
            }
            yield result
        }
    }
}
const tank = new WaterPresssure()
for (const val of tank){
    //console.log(val)
}



//today we focus on Objects and global functions
class CrabIsland {
    constructor(crab, island) {
        this.crab = crab
        this.island = island
    }
   *[Symbol.iterator]() {
    yield "Hermit Crab"
    let result = {}
    let species = {
        crab1: { name: "Coconut Crab", weight: 7, habitat: "land", diet: "Microorganisms" },
        crab2: { name: "Hermit Crab", weight: 1, habitat: "land", diet: "Algi"  },
        crab3: { name: "Fiddler Crab", weight: 2, habitat: "land and water", diet: "microorganisms" }
    }
    let examineCrab = Object.values(species).map(e => e.name).filter(e => !e.includes("g"))
    const confirmCrab = structuredClone(examineCrab)
    for (const key in Object.keys(species)) {
        if (isNaN(key)){
            result.push(...species[key])
            Object.assign(result, confirmCrab)
            Object.entries(species)
        } else if(!isFinite(key)) {
            result.push(...Object.freeze(species[key]))
            Object.fromEntries(crab1)
            Object.getPrototypeOf(crab2)
        } else {
           result += null
           Object.hasOwn(crab3, "Hermit Crab")
            Object.is(weight, 3)
            Object.setPrototypeOf(habitat, "water")
        }

        }
        yield "Found all 3 species"
    }
   }
   const bigIsland = new CrabIsland("three", 3)
   for (const val of bigIsland) {
    console.log(val)
   }


/*/
global functions--Stand alone checkers---Strict mode: Number.isFinite()
parseFloat 
 parseInt 
setTimeout
clearTimeout
setInterval
clearInterval




/*
//

string methods--
codePointAt
lastIndexOf
match
 matchAll
repeat
replace
replaceAll
substring
trim
trimEnd
trimStart
fill
find
findIndex
flat
forEach
join
keys
reduce
reverse
slice
some
sort
splice
values





Number Methods---
Number.isFinite
Number.isInteger
Number.isNaN
Number.parseFloat
Number.parseInt
Number.prototype.toFixed
Number.prototype.toString



Map Methods--
map.prototype.add
Map.prototype.delete
Map.prototype.forEach


Set Methods--
Set.prototype.add
Set.prototype.delete
Set.prototype.forEach


Promise Methods-- async and await functions
Promise.all
Promise.any
Promise.race
Promise.reject
Promise.resolve
Promise.prototype.catch
Promise.prototype.then


Date Methods--
getDate
getDay
getFullYear
getHours
getMinutes
getMonth
getSeconds
getTime
setDate
setFullYear
setHours
setMinutes
setMonth
setSeconds
setTime

*/