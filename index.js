var numberOfDrumButton = document.querySelectorAll(".drum").length;

for (var i=0; i<numberOfDrumButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);       
        buttonAnimation(buttonInnerHTML); 
    })
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key){
    switch(key) {
        case "w":
            var Om = new Audio("sounds/mySounds/assets_B.mp3");
            Om.play();
            break;

        case "a":
            var Aum = new Audio("sounds/mySounds/assets_C.mp3");
            Aum.play();
            break;
            
        case "s":
            var Oum = new Audio("sounds/mySounds/assets_D.mp3");
            Oum.play();
            break;

        case "d":
            var Ooom = new Audio("sounds/mySounds/assets_E.mp3");
            Ooom.play();
            break;

        case "j":
            var Omm = new Audio("sounds/mySounds/assets_F.mp3");
            Omm.play();
            break;

        case "k":
            var Aumm = new Audio("sounds/mySounds/assets_B.mp3");
            Aumm.play();
            break;

        case "l":
            var Oumm = new Audio("sounds/mySounds/assets_C.mp3");
            Oumm.play();
            break;

            default : console.log(key);
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}