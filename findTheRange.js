// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]
let i = 0
// Write your solution below:
let max = array[0] 
let min = array[0]

for(i = 0; i < array.length; i++){
    if(array[i] > max) {max = array[i];}
    if(array[i] < min) {min = array[i];}
}
console.log(max)
console.log(min)
