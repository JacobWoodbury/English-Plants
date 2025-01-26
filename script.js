
document.getElementById("previous").onclick = function(){prevSlide();}
document.getElementById("next").onclick = function(){nextSlide();} 
let container = document.getElementById("slide-container");
let voice = document.getElementById("voice");
let slide = document.createElement("img");
let imgOne = "one.png";
let imgTwo = "two.png";
let imgThree = "three.png";
let collection = [imgOne,imgTwo,imgThree];
let audioCollection = ["voiceOne.mp3", "voiceTwo.mp3", "voiceThree.mp3"]
let currentSlide = -1;


function nextSlide(){

if(currentSlide >= collection.length -1){
    currentSlide = 0;
}else{
    currentSlide++;
}
slide.src = collection[currentSlide];
slide.alt="";
container.appendChild(slide);
voice.src =audioCollection[currentSlide];
}
function prevSlide(){
   
    if(currentSlide < 1){
        currentSlide = collection.length-1;
    }else{
        currentSlide--;
    }
    slide.src = collection[currentSlide];
    slide.alt ="Slide"
    container.appendChild(slide);
    voice.src =audioCollection[currentSlide];
}
