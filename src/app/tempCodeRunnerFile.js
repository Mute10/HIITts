henryFordCars(-162, -33, -3, -.03, -44, -250, -202, -17) //5
function henryFordCars(arr) {
const filteredCarId = arr.filter(x => typeof x === "number" && x < 0 && !x.toString().includes("3"))
console.log(filteredCarId);
return filteredCarId
}
