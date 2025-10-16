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


//create a function generator w/ include, followed by async function.
//  filter, shift, unshift, indexOf

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
                    console.log(result)
                } else {
                    result = policeBox.map(box => box.join(" - "))
                    Object.create({packetSend: "null"})
                }
                if (typeof doubleVal === "string" && (["v", "j", "k", "m"]).some(element2 => 
                    doubleVal.toLowerCase().startsWith(element2))) {
                   Object.values(result, foodStalls)
                    result = JSON.stringify(result)
                } else {
                    const ObjResult = JSON.parse(policeBox).map(element3 => element3.filter(
                        e => typeof e === "string")).filter(element3 => element3.length > 0)
                        Object.fromEntries(foodStalls).filter( e => ["i", "u"] ).split()
                }
            }
        }
        return result
    }
}
const llc = new LlcInc("Tokyo", "Haneda Terminal")
llc.dreamWorks()



/*
//
global functions--
isFinite 
isNaN 
parseFloat 
 parseInt 
decodeURI
decodeURIComponent
setTimeout
clearTimeout
setInterval
clearInterval
structuredClone


string methods--
charAt
charCodeAt
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


Object Methods---
Object.assign
Object.entries
Object.freeze
Object.fromEntries
Object.getPrototypeOf
Object.hasOwn
Object.is
Object.keys
Object.setPrototypeOf
Object.values

Number Methods---
Number.isFinite
Number.isInteger
Number.isNaN
Number.parseFloat
Number.parseInt
Number.prototype.toFixed
Number.prototype.toString

Math Methods---
Math.abs
Math.ceil
Math.exp
Math.floor
Math.hypot
Math.log
Math.max
Math.min
Math.pow
Math.random
Math.round
Math.sign
Math.sqrt
Math.trunc


Map Methods--
map.prototype.add
Map.prototype.delete
Map.prototype.forEach


Set Methods--
Set.prototype.add
Set.prototype.delete
Set.prototype.forEach


Promise Methods--
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