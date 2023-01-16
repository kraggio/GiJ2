let monthNum = prompt("Please enter a number between 1 and 12:");

let months = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , 
"September" , "October" , "November" , "December"];
if(monthNum < 1 || monthNum > 12){
    alert("Invalid number entered. Please enter a number between 1 and 12.");
} else {

    console.log(`The month corresponding to the number ${monthNum} is ${months[monthNum-1]}`);
}