const test1 = "EDEN";
const test2 = "'DVA'!!";
const hello = test1 + " " + test2;
console.log(hello);


const persons = [1, 2, 3, 4, 4, 5, 5, 5, 5, 532, 3, 2, 4, 234, 23, 42, 34, 234, 23, 432,];

persons.filter(p => console.log('person number %s', p % 2 === 0));


function changeColor() {
    const dateNow = new Date();
    if (dateNow.getSeconds() < 10) {
        document.getElementById("div1").style.backgroundColor = "red"
    } else if (dateNow.getSeconds() > 10 && dateNow.getSeconds() < 20) {
        document.getElementById("div1").style.backgroundColor = "green"
    } else if (dateNow.getSeconds() > 20 && dateNow.getSeconds() < 30) {
        document.getElementById("div1").style.backgroundColor = "yellow"
    } else if (dateNow.getSeconds() > 30 && dateNow.getSeconds() < 40) {
        document.getElementById("div1").style.backgroundColor = "pink"
    } else if (dateNow.getSeconds() > 40 && dateNow.getSeconds() < 50) {
        document.getElementById("div1").style.backgroundColor = "brown"
    } else if (dateNow.getSeconds() > 50 && dateNow.getSeconds() < 60) {
        document.getElementById("div1").style.backgroundColor = "orange"
    }
}

setInterval(changeColor, 1000);

// alert('Hello world');
//
// const  r = confirm("Do you have strong mindset?");
// if(r === true){
//     x = "You are gonna make it"
// }else{
//     x = "You should change that immediately!!!"
// }
//
// document.write(x);

const promptScreen1 = prompt("Please enter your number!");
const promptScreen2 = prompt("Please enter your number!");
let a = parseInt(promptScreen1);
let b = parseInt(promptScreen2);

console.log('First number: ' + a);
console.log('Second number: ' + b);


if (!isNaN(a) && !isNaN(b)) {
    if (a > b) {
        console.log('First number: '+ promptScreen1.valueOf());
        console.log('First number: '+ promptScreen1);
        alert("First number is max: " + promptScreen1)
    } else if (a < b){
        console.log('Second number: '+ promptScreen2.valueOf());
        console.log('Second number: '+ promptScreen2);
        alert("Second number is max: " + promptScreen2)
    }else{
        alert("Both numbers are equal: " + promptScreen2.valueOf())
    }
}else
{
    alert("Wrong input!")
}