
document.getElementById("previous").onclick = function(){prevSlide();}
document.getElementById("next").onclick = function(){nextSlide();} 
let container = document.getElementById("slide-container");
let voice = document.getElementById("voice");
let slide = document.createElement("img");
let imgOne = "one.png";
let imgTwo = "two.png";
let imgThree = "three.png";
let collection = [imgOne,imgTwo,imgThree];
let audioCollection = ["recording.m4a", "voiceTwo.m4a", "voiceThree.m4a"]
let currentSlide = -1;


function nextSlide(){
container.innerHTML="";
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
    container.innerHTML="";
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