// Function

// let sum1 = 2 + 3

// let sum2 = 5 + 10

// let sum3 = 10 + 20

// console.log(sum1)
// console.log(sum2)
// console.log(sum3)



// function sum(x,y){
//     return x+y
// }

// sum(5,10)

// Function declaration

// let x = sum(5,10)

// function sum(val1, val2){
//     return val1 + val2
// }



// let y = sum(10,15)

// console.log(x)

// console.log(y)

// Function expression


// let sum = function(val1, val2) {
//     return val1 + val2
// }

// console.log(sum(100, 200))

// Arrow function (ES6)

// let sum = (val1, val2) => {
//     console.log(val1 + " " + val2)
//     return val1 + val2
// }

// let sum1 = (val1, val2) => val1 + val2


// console.log(sum1(50, 100))

// Calculate BMI = (weight/height ** 2)

// const calBmi = (weight, height) => {
//     return weight / height ** 2
// }

// let johnWeight = 74
// let johnHeight = 1.72

// let markWeight = 65
// let markHeight = 1.65


// let johnBmi = calBmi(johnWeight, johnHeight)

// let markBmi = calBmi(markWeight, markHeight)

// // console.log('John weight is ' + johnWeight + 'kg height is ' + johnHeight + 'cm BMI ' + johnBmi)

// console.log(`John weight is ${johnWeight}kg height is ${johnHeight}cm BMI is ${johnBmi}`)

// console.log(`Mark weight is ${markWeight}kg height is ${markHeight}cm BMI is ${markBmi}`)

// Arrays

// const countries = ['Australia', 'USA', 'UK', 'France', 'Germany', 10, false] // literal

// const countries = new Array()
// countries[1] = "Australia"
// countries[2] = "USA"

// for(let i=0; i<countries.length; i++){
//     console.log(countries[i])
// }

// countries.push('Spain')
// countries.pop()
// countries.pop()

// delete countries[1]

// for( country of countries) {
//     console.log(country)
// }

// Calculate tips

// const bills = [22, 295, 176, 440, 37, 105, 10]

// const calcTips = (bill) => {
//     return bill > 50 && bill < 300 ? bill * 0.05 : bill * 0.02
// }

// for(bill of bills) {
//     const tip = calcTips(bill)
//     console.log(`Bill value is ${bill} and tip is ${tip}`)
// }

// Objects literals
// const car = {
//     colour: "red", // Properties
//     make: "bmw",
//     drive: function() { // Method
//         console.log("driving...")
//     }
// }

// console.log("Colour of the car : " + car.colour)

// car.drive()

// const car = new Object()
// car.colour = "red"
// car.make = "bmw"
// car.drive = funt

// const Mark = {
//     fName: "Mark Miller",
//     height: 1.74,
//     weight: 74,
// }

// const John = {
//     fName: "John Smith",
//     height: 1.8,
//     weight: 84,

// }





// const bmi = {
//         calcBmi: function() {
//         let bmi = this.weight / this.height ** 2
//         return bmi
//     }
// }

// const markBmi = bmi.calcBmi.call(Mark)
// const johnBmi = bmi.calcBmi.call(John)


// console.log(markBmi + " " + johnBmi)



// const markBmi = Mark.calBmi(1.5, 60)
// const johnBmi = John.calBmi()

// if(markBmi > johnBmi){
//     console.log(`${Mark.fName} BMI ${markBmi} is greater than John's BMI ${johnBmi}`)
// }
// else if ( johnBmi > markBmi){
//     console.log(`${John.fName} BMI ${johnBmi} is greater than Marks's BMI ${markBmi}`)
// }
// else {
//     console.log(`Mark's and John's BMI is same`)
// }

// Function constructor

function Person( fullname, height, weight ) {

    this.fullname = fullname
    this.height = height
    this.weight = weight

    this.calBmi = this.weight / this.height ** 2

}

const john = new Person("John Smith", 172, 74)

const mark = new Person("Mark", 165, 80 )

console.log(`${john.fullname} bmi = ${john.calBmi}`)

console.log(`${mark.fullname} bmi = ${mark.calBmi}`)








