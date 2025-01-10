// Conditional statement

if (12 > 7) {
    console.log("True")
}

// Else statement

var age = 12
if (age > 18) {
    console.log("Adult")
} else {
    console.log("Kid")
}

// Else if Statement
var marks = 101;
if (marks > 100) {
    console.log("Cannot be greater than 100")
} else if (marks < 0){
    console.log("Cannot be blow Zero")
}else{
    console.log("Reasonable Marks")
}

// Switch

switch (new Date().getDay()){
    case 0:
        day = "Sunday";
        console.log(day)
        break;
    case 1:
        day = "Monday";
        console.log(day)
        break;
    case 2:
        day = "Tuesday";
        console.log(day)
        break;
    case 3:
        day = "Wednesday";
        console.log(day)
        break;
    case 4:
        day = "Thursday";
        console.log(day)
        break;
    case 5:
        day = "Friday";
        console.log(day)
        break;
    case 6:
        day = "Saturday";
        console.log(day)
        break;
}