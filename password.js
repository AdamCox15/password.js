let password = "OvechkinTheGreat8!";

let minNumberOfLetters = /[a-z]/;
let minNumberOfNumbers = /[0-9]/;
let specialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

if(password.length >= 10 && password.search(minNumberOfLetters) > 0 && password.search(minNumberOfNumbers) > 0 && password.length < 20 && password.search(specialCharacter) > 0){
    console.log('Password successful! Well done!')
} else{
    console.log("You failed to enter a valid password. Please try again.")
}

//------------------------------------------------------------------------------//
//Fallowing along with Alec 

let password1 = 'RookTheMalinois15!'

//check vars to make sure requirements are met
let minChars = false;
let letterCheck = false;
let numCheck = false;
let upperCheck = false;

for(let i= 0; i < password1.length; i++){
    //checking if the char can be converted to a num data type
    if(!isNaN(+password1[i])){
        numCheck = true;
        
    //Checking if the num is uppercase 
    } if (password1[i] === password1[i].toUpperCase() && !isNaN(+password1[i])){
        upperCheck = true;
    }
}
//Check that the password has a letter
if(/[a-zA-Z].test(password1)/){
    letterCheck = true;
}

//password1.includes('a')


//check that password meets min and max chars
if(password1.length >= 10 && password1.length <= 20){
    minChars = true;
}
//Puts an output of if you've entered a password that meets all requirements
if(minChars && letterCheck && upperCheck && numCheck){
console.log('Your password fills the requirements!');
} else{
    console.log('The password does not fill all the requirements, try again.')
}

