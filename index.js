
// ****** Event Listner for Drum Button way 1 ***********//

/* document.querySelectorAll("button")[0].addEventListener("click",onclick);
document.querySelectorAll("button")[1].addEventListener("click",onclick);
document.querySelectorAll("button")[2].addEventListener("click",onclick);
document.querySelectorAll("button")[3].addEventListener("click",onclick);
document.querySelectorAll("button")[4].addEventListener("click",onclick);
document.querySelectorAll("button")[5].addEventListener("click",onclick);
document.querySelectorAll("button")[6].addEventListener("click",onclick);
function onclick(){
    alert("you just click");
} */

// ****** Event Listner for Drum Button way 2 ***********//


var numberofbuttons=document.querySelectorAll(".drum").length;
for( var i=0; i<numberofbuttons; i++ ){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
       
        var buttoninnerHtml=this.innerHTML;
        makesound(buttoninnerHtml); 
    buttonAnimation(buttoninnerHtml);


      
       
    });

}
document.addEventListener("keydown",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
});
 function makesound(key){
    switch(key){
        case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
            case "a":
                var kickbass = new Audio('sounds/kick-bass.mp3');
                kickbass.play();
                break;
                case "s":
                 var snare = new Audio('sounds/snare.mp3');
                 snare.play();
                 break;
                 case "d" :
                     var tom1 = new Audio('sounds/tom-1.mp3');
                     tom1.play();
                     break;
                     case "j" :
                         var tom2 = new Audio('sounds/tom-2.mp3');
                         tom2.play();
                         break;
                         case "k" :
                             var tom3 = new Audio('sounds/tom-3.mp3');
                             tom3.play();
                             break;
                             case "l" :
                                 var tom4 = new Audio('sounds/tom-4.mp3');
                                 tom4.play();
                                 break;
                                 default :console.log(buttoninnerHtml);
 }
 }

 function buttonAnimation (currentkey){
     var activebutton = document.querySelector("." + currentkey );
     activebutton.classList.add("pressed");
     setTimeout(function(){
activebutton.classList.remove("pressed");
     },100)
 }