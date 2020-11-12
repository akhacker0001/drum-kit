// document.querySelectorAll("button")[0].addEventListener("click",button);
// function button() {
//     alert("i got clicked");
    

// var numberOf = document.querySelectorAll("button").length;
// for (let i = 0; i < numberOf; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         alert("ankit kumar")
//     });
   
    

// }


// let list = document.querySelectorAll("button").length;
// for (let i = 0; i < list; i++) {
//     let a = document.querySelectorAll("button")[i];
//     a.addEventListener("click",function(){
//         var b = document.querySelectorAll("button")[i].innerHTML;
//         alert("i got clicked "+ "  "+ b);
//     })
    
// }

// document.querySelector("button").addEventListener("keypress",function(e){
//     alert("ankit kumar")
// })

// let list = document.querySelectorAll("button").length;
// for (let i = 0; i < list; i++) {
//     let a = document.querySelectorAll("button")[i];
//     var b = document.querySelectorAll("button")[i].innerHTML;
//     a.addEventListener("kwypress",function(b){
       
//         alert("i got clicked "+ "  "+ b);
//     })
    
// }

// drum-kit function

// document.querySelectorAll("button")[0].addEventListener("click",function(){
//     var audio = new Audio("sounds/crash.mp3");
//     audio.play();
// })
// document.querySelectorAll("button")[1].addEventListener("click",function(){
//     var audio = new Audio("sounds/kick-bass.mp3");
//     audio.play();
// })
// document.querySelectorAll("button")[2].addEventListener("click",function(){
//     var audio = new Audio("sounds/snare.mp3");
//     audio.play();
// })
// for (let i = 3; i <7; i++) {

//         let a = document.querySelectorAll("button")[i];
//         a.addEventListener("click",function(){                                sounds/
//             var audio = new Audio("sounds/tom-" + (i-2) + ".mp3");
// audio.play();
//         })  
// }

// i made the arry basic function in drum kit



// var buttonLenght = document.querySelectorAll("button").length;
// for (let i = 0; i < buttonLenght; i++) {
//    document.querySelectorAll("button")[i].addEventListener("click",function () {
//        var innerHtml = this.innerHTML;
//        switch (innerHtml) {
//            case "w":
//                let crash = new Audio("sounds/crash.mp3");
//                crash.play();
//                break;
//            case "a":
//                let kick_bass = new Audio("sounds/kick-bass.mp3");
//                kick_bass.play();
//                 break;
//             case "s":
//                 let snare = new Audio("sounds/snare.mp3");
//                 snare.play();
//                 break;
//             case "d":
//                 let tom_1 = new Audio("sounds/tom-1.mp3");
//                 tom_1.play();
//                 break;
//             case "j":
//                 let tom_2 = new Audio("sounds/tom-2.mp3");
//                 tom_2.play();
//                 break;
//             case "k":
//                 let tom_3 = new Audio("sounds/tom-3.mp3");
//                 tom_3.play();
//                 break;
//             case "i":
//                 let tom_4 = new Audio("sounds/tom-4.mp3");
//                 tom_4.play();
//                 break;
//        }   
//    })
// }


// var array = ["sounds/crash.mp3","sounds/kick-bass.mp3","sounds/snare.mp3","sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3"]
// for (let i = 0; i < array.length; i++) {
//      document.querySelectorAll("button")[i].addEventListener("click",function(){
//         var audio = new Audio(array[i]);
//         audio.play();
//     })
// }

// var array = ["sounds/crash.mp3","sounds/kick-bass.mp3","sounds/snare.mp3","sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3"];
// for (let i = 0; i < array.length; i++) {
//     // var list = ["w","a","s","d","j","k","i"];
//     // var index = list[i];
//     document.querySelectorAll("button")[i].addEventListener("onkeypress",function(a){
//        alert("akit");

//     })
    
// }


// document.addEventListener("keypress",function(a){
//      alert("ankit");
// })





function drumSound(key) {
     switch (key) {
          case "w":
              let crash = new Audio("sounds/crash.mp3");
              crash.play();
              break;
          case "a":
              let kick_bass = new Audio("sounds/kick-bass.mp3");
              kick_bass.play();
               break;
           case "s":
               let snare = new Audio("sounds/snare.mp3");
               snare.play();
               break;
           case "d":
               let tom_1 = new Audio("sounds/tom-1.mp3");
               tom_1.play();
               break;
           case "j":
               let tom_2 = new Audio("sounds/tom-2.mp3");
               tom_2.play();
               break;
           case "k":
               let tom_3 = new Audio("sounds/tom-3.mp3");
               tom_3.play();
               break;
           case "l":
               let tom_4 = new Audio("sounds/tom-4.mp3");
               tom_4.play();
               break;
      }   
     
}
var buttonLenght = document.querySelectorAll("button").length;
for (let i = 0; i < buttonLenght; i++) {
  
  document.querySelectorAll("button")[i].addEventListener("click",function(){
     var innerHtml = this.innerHTML;
     drumSound(innerHtml);
     buttonAnimation(innerHtml)
  })
}


document.addEventListener("keydown",function(event){
     var key = event.key;
     drumSound(key);
     
    buttonAnimation(key)
})

function buttonAnimation(currentKey){
     var activeKey = document.querySelector("."+currentKey);
     activeKey.classList.add("pressed");

     setTimeout(function(){
          activeKey.classList.remove("pressed");
     }, 100)
}