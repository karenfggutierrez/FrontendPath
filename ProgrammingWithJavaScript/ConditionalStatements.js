var age = 10;
if (age >= 65) {
    console.log("You get your income from your pension");
} else if (age < 65 && age >= 18) {
    console.log("Each month you get a salary");
} else if (age < 18) {
    console.log("You get an allowance");
} else {
    console.log("The value of the age variable is not numerical");
}

var day = "Sundaly";
switch (day) {
case "Sunday":
console.log('sunday')
break;
case "Monday":
console.log('monday')
break;
case "Tuesday":
console.log('tuesday')
break;
case "Wednesday":
console.log('wednesday')
break;
case "Thursday":
console.log('thursday')
break;
case "Saturday":
console.log('saturday')
break;
default: console.log('There is no such day')
}
