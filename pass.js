const pass=()=>{
    let upperCase=document.getElementById("upper").checked;
    let lowerCase=document.getElementById("lower").checked;
    let number=document.getElementById("number").checked;
    let symbol=document.getElementById("symbol").checked;
    let smallLetters="abcdefghijklmnopqrstuvwxyz";
    let bigLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers="0123456";
    let special="!@#$%^&*";
    let charPool="";
    if(upperCase){
        charPool+=bigLetters;
    }
    if(lowerCase){
        charPool+=smallLetters;
    }
    if(number){
        charPool+=numbers;
    }
    if(symbol){
        charPool+=special;
    }
    let length=Math.floor(Math.random()*(64-12+1)+12);
    let pass="";
    for(let i=0;i<length;i++){
        let randomIndex=Math.floor(Math.random()*charPool.length);
        pass+=charPool[randomIndex];
    }
    document.getElementById("result").textContent=`Generated Password:${pass}`;
}
document.getElementById("btn").addEventListener("click",pass);