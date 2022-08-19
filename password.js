let password = "OvechkinTheGreat8!";

let minNumberOfLetters = /[a-z]/;
let minNumberOfNumbers = /[0-9]/;

let specialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

if(password.length >= 10 && password.search(minNumberOfLetters) > 0 && password.search(minNumberOfNumbers) > 0 && password.length < 20 && password.search(specialCharacter) > 0){
    console.log('Password successful! Well done!')
} else{
    console.log("You failed to enter a valid password. Please try again.")
}