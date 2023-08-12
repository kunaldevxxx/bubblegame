var hitnn=0;
function makebubble(){
    var clutter="";
for(var i =1;i<169;i++){
    var rn=Math.floor(Math.random()*10)
  clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector(".pbottom").innerHTML=clutter
}
var timer=60;
function runtime(){
var timek=setInterval(function(){
    if(timer>0){
        timer--;
        document.querySelector("#timeinterval").textContent=timer;
    }
    else{
        clearInterval(timek);
    document.querySelector(".pbottom").innerHTML="";    }
},1000);
}
function newhit(){
    hitnn=Math.floor(Math.random()*10);
    document.querySelector("#hitn").textContent=hitnn;
}
var score=0;
function increasescr(){
    score+=10;
    document.querySelector("#scrval").textContent=score;
}
document.querySelector(".pbottom")
.addEventListener("click",function(dets){
var cnum=Number(dets.target.textContent);
if(cnum===hitnn){
    increasescr();
    makebubble();
    newhit();
}

})
makebubble();
runtime();
newhit();