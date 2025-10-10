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


//
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
    console.log(val)
}



/*
functions: polish my includes, next array of arrays
generator function, async, constructor, class Method,
 
public 
 private 
protected 
readonly 
 as 
declare 
 keyof 
instanceof 
 is 
asserts 
unknown 
void 
 any 

global functions--
isFinite 
isNaN 
parseFloat 
 parseInt 
decodeURI
decodeURIComponent
encodeURI
encodeURIComponent
setTimeout
clearTimeout
setInterval
clearInterval
structuredClone

string methods--
charAt
charCodeAt
codePointAt
 endsWith
includes
indexOf
lastIndexOf
match
 matchAll
repeat
replace
replaceAll
split
startsWith
substring
toLowerCase
toUpperCase
trim
trimEnd
trimStart
at
entries
every
fill
filter
find
findIndex
flat
flatMap
forEach
includes
indexOf
join
keys
lastIndexOf
map
pop
push
reduce
reverse
shift
slice
some
sort
splice
toLocaleString
unshift
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
Math.log2
Math.max
Math.min
Math.pow
Math.random
Math.round
Math.sign
Math.sqrt
Math.trunc

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
toDateString
toISOString
toJSON
toLocaleDateString
toLocaleString
toLocaleTimeString
toString
toTimeString
valueOf

RegExp Methods--
exec
test

JSON Methods--
JSON.parse
JSON.stringify

Console Methods--
console.assert
console.debug
console.group
console.info
console.log
console.time
console.timeEnd
console.trace
console.warn

Map Methods--
Map.prototype.delete
Map.prototype.forEach
Map.prototype.get
Map.prototype.has
Map.prototype.set
Map.prototype.values

Set Methods--
Set.prototype.add
Set.prototype.delete
Set.prototype.forEach
Set.prototype.has
Set.prototype.values

Promise Methods--
Promise.all
Promise.any
Promise.race
Promise.reject
Promise.resolve
Promise.prototype.catch
Promise.prototype.finally
Promise.prototype.then

*/