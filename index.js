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

var array = ["sounds/crash.mp3","sounds/kick-bass.mp3","sounds/snare.mp3","sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3"]
for (let i = 0; i < array.length; i++) {
     document.querySelectorAll("button")[i].addEventListener("click",function(){
        var audio = new Audio(array[i]);
        audio.play();
    })
}

