let count=0;
const countEl=document.getElementById("count");
document.getElementById("btn-inc").addEventListener("click",()=>{
    count++;
    countEl.innerHTML=count;
});
document.getElementById("btn-dec").addEventListener("click",()=>{
    count--;
    countEl.innerHTML=count;
});
document.getElementById("btn-reset").addEventListener("click",()=>{
    count=0;
    countEl.innerHTML=count;
});