buttons=document.querySelectorAll(".button");
let sound=new Audio("");

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        PlaySound(buttons[i].textContent);
        AddAnimation(buttons[i].textContent);
    });
}

document.addEventListener("keydown",function(event){
    PlaySound(event.key);
    AddAnimation(event.key);
    });


function PlaySound(character){
    switch (character){
        case "w":
            sound=new Audio("./soundss/tom-1.mp3");
            sound.play();
            break;
        case "a":
            sound=new Audio("./soundss/tom-2.mp3");
            sound.play();
            break;
        case "s":
            sound=new Audio("./soundss/tom-3.mp3");
            sound.play();
            break;
        case "d":
            sound=new Audio("./soundss/tom-4.mp3");
            sound.play();
            break;
        case "j":
            sound=new Audio("./soundss/crash.mp3");
            sound.play();
            break;
        case "k":
            sound=new Audio("./soundss/kick-bass.mp3");
            sound.play();
            break;
        case "l":
            sound=new Audio("./soundss/snare.mp3");
            sound.play();
            break;
        default:
            console.log("Invalid input! Not found...");        
    }
}


function AddAnimation(character){
    let element=document.querySelector("."+character);   
    //it is important to write let here and for ti variable, because if we do not, 
    //each time the already existing variable will be overwritten when a butto is clicked, so let ensures that 
    // each click has its own element and settimeout
    element.classList.add("pressed");

    //let ti=setTimeout(function(){element.classList.remove("pressed")},500);
}