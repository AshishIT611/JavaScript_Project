let start=parseInt(prompt("Enter start range"));
let input=parseInt(prompt("Enter end range"));
let random_number=Math.floor(Math.random()*((input-start+1))+start);
let guess=false;
while(!guess){
    let number=parseInt(prompt("Enter a number"));
    if (number===random_number) {
        document.getElementById("display").innerHTML="You guessed the right number!";
        guess=true;
    } 
    else if(number>random_number){
        alert("Your guess is too high.");
    } 
    else{
        alert("Your guess is too low.");
    }
}