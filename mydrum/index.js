
var drumParts=document.querySelectorAll(".drum");
for(var i=0;i<drumParts.length;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
        var PressedButton=this.innerHTML;
        playDrum(PressedButton);
        ButtonAnimation(PressedButton);

        
    // d[i].addEventListener("click", function(){
 // var audio=new Audio("./sounds/snare.mp3");
    // audio.play();
})
}
document.addEventListener("keypress",function(event){
    playDrum(event.key);
    ButtonAnimation(event.key);

})
function playDrum(drum){
    switch(drum){
                case "a":
                    var audio=new Audio("./sounds/snare.mp3");
                    audio.play();
                break;

                case "w":
                    var audio=new Audio("./sounds/crash.mp3");
                    audio.play();
                break;

                case "d":
                    var audio=new Audio("./sounds/tom-1.mp3");
                    audio.play();
                break;

                case "j":
                    var audio=new Audio("./sounds/tom-3.mp3");
                    audio.play();
                break;

                case "i":
                    var audio=new Audio("./sounds/tom-2.mp3");
                    audio.play();
                break;

                case "l":
                    var audio=new Audio("./sounds/kick-bass.mp3");
                    audio.play();
                break;

                

                default:
                    console.log("wrong key");


    }
}

function ButtonAnimation(keys){
    var button=document.querySelector("." + keys);
    button.classList.add("pressed");

    setTimeout(function(){
        button.classList.remove("pressed");
    },100)

}