// const
const num = 21;

//input client prompt
let firstNameUser = prompt("Please enter your first name");
let lastNameUser = prompt("Please enter your last name");
let favoriteColor = prompt("Please enter your favorite color");
let yourPassword = (firstNameUser + lastNameUser + favoriteColor + num);
document.getElementById("password").innerHTML = yourPassword;

console.log(yourPassword);