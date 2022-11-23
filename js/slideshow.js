const image1 = document.getElementById("slideshow-image1")
const image2 = document.getElementById("slideshow-image2")
const image3 = document.getElementById("slideshow-image3")
const image4 = document.getElementById("slideshow-image4")
var x = 1;
function next(){
    switch(x){
        case 1:
            image1.style.opacity = "0";
            image2.style.opacity = "1";
            x++;
            break;
        case 2:
            image2.style.opacity = "0";
            image3.style.opacity = "1";
            x++;
            break;
        case 3:
            image3.style.opacity = "0";
            image4.style.opacity = "1";
            x++;
            break;
        case 4:
            image4.style.opacity = "0";
            image1.style.opacity = "1";
            x=1;
            break;
    }
}
function prev(){
    switch(x){
        case 1:
            image1.style.opacity = "0";
            image4.style.opacity = "1";
            x=4;
            break;
        case 2:
            image2.style.opacity = "0";
            image1.style.opacity = "1";
            x--;
            break;
        case 3:
            image3.style.opacity = "0";
            image2.style.opacity = "1";
            x--;
            break;
        case 4:
            image4.style.opacity = "0";
            image3.style.opacity = "1";
            x--;
            break;
    }
}

