var prevbtn=document.querySelector(".prev");
var nextbtn=document.querySelector(".next");

var images=document.querySelector(".carousel").children  

var totalImages = images.length;

var index=0;

prevbtn.addEventListener("click",()=>{
    nextImage("prev");
})
nextbtn.addEventListener("click",()=>{
    nextImage("next");
})

function nextImage(direction){
    if(direction=="next"){
        index++;
        if(index==totalImages){
            index=0;
        }
    }
    else{
        if(index==0){
            index=totalImages-1;
        }
        else{
            index--;
        }
    }
        for(let i=0;i<totalImages;i++){
        images[i].classList.remove("main");
        images[index].classList.add("main");
        }
   
}
function autoMove(){
setInterval(()=>{
    nextImage("next");},2000);
}
/* window.onload=autoMove; */