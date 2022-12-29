let age = 16
if (age>=18){
    console.log("I am on my way")

}
else{
    console.log("Nothing can make me late")
}
// ternary operator
let age = 7
let canDrink = (age>=21) ? "Alcohol":"Milk" // condition ? value1:value2
console.log(canDrink)

let age = 16
let name = "louis"
// and
if (name[0] == "H" && age>=18){
    console.log("Major")
}
else{
    console.log("Minor")
}
//or
if (name[0] == "H" || age>=18){
    console.log("Major")
}
else{
    console.log("Minor")
}