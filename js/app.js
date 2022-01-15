// // cursor
// const root = document.querySelector('html')

// // Real cursor element
// const cursor = document.createElement('div')
// cursor.classList.add('cursor')
// root.appendChild(cursor)

// // Following extra cursor element
// const follower = document.createElement('div')
// follower.classList.add('cursor', 'cursor__follower')
// root.appendChild(follower)


// document.addEventListener('mousemove', (e) => {
//     setPosition(follower, e)
//     setPosition(cursor, e)
    
// })


// function setPosition(element, e) {
//   element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
// }





// section change
let arr = [
 document.querySelector(".home"),
 document.querySelector(".about"),
 document.querySelector(".portfolio"),
document.querySelector(".blogs"),
 document.querySelector(".contact")];


 let nav__menu = document.querySelectorAll(".menu-li")
 

for(let i =0;i<nav__menu.length;i++){
        nav__menu[i].addEventListener("click",()=>{
            arr[i].style.opacity="1"
        arr[i].style.display="flex";
        arr[i].classList.add("section__anima")
        // console.log(arr[i].style.display)
        for(let x = 0; x<arr.length;x++){
            if(x==i)
                continue
            
             arr[x].style.opacity="0"
             arr[x].style.display = "none";
            arr[x].classList.remove("section__anima")
            }
           
            
        });
        
        
}



// preloader
let preloader = document.querySelector(".preloader")

    setInterval(function(){ 
  
      preloader.classList.toggle("loaded");
      preloader.style.transition="2.9s"
      preloader.style.opacity="0"
      
      }, 2000);
    setInterval(function() {
        preloader.style.display="none"
    }, 3000);
    


// music
var state=0;
$(document).ready(function(){
    $(".power").click(function(){
          $(".record").toggleClass('on');
          $(".stick").toggleClass('play');
          if(state==0){
              setTimeout(function(){
               $(".mysong")[0].play();
              },1000);
              state=1;
          }
          else{
              $(".mysong")[0].pause();
              state=0;
          }
          $(".slider").change(function(){
              $(".mysong")[0].volume=this.value;
          });
      });
      
});