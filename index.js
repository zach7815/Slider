let i = 1;
var images = [];
let caption = document.querySelector(".imageCap");
let num =2;
let prevBtn = document.querySelector(".prev");



images[0] = "images/Flamingo.jpg";
images[1] = "images/person.jpg";
images[2] = "images/splash.jpg";
images[3] = "images/texture.jpg";



function plusImage(){
  slide.src  = images[i];
  caption.innerHTML = num;
    if(i<images.length-1) {
      i++;
        num++;
   }
    else {
        i=0;
        num = 1;
    }
    prevBtn.classList.remove("hidden")
};

function minusImage(){
    slide.src  = images[i];
    caption.innerHTML = num;
     if (i == 3){
         i = 0;
         num = 1;
     }
     else{
         i--;
         num--;
     }
    };

   

