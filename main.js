document.getElementById("button").addEventListener("click",(e)=>{
    e.preventDefault();
    const name=document.getElementById("name").value.trim();
    const phoneNumber=document.getElementById("phone_number").value.trim();
    const email=document.getElementById("email").value.trim();
    const division=document.getElementById("division").value.trim();
    const city=document.getElementById("city").value.trim();
    if(!name||!phoneNumber||!email||!division||!city){
        alert("Please fill out all the fields!");
        return;
    }
    console.log(`Name:${name}`);
    console.log(`Phone Number:${phoneNumber}`);
    console.log(`Email:${email}`);
    console.log(`Division:${division}`);
    console.log(`City:${city}`);
    document.getElementById("success").textContent=`Thank You ${name}`;
    document.querySelector("form").reset();
});