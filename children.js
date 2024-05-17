const slider = document.querySelector(".slider > div")

let pos = 0;


setInterval(() => {

    pos++
    if(pos == 3){    
        pos = -1;
    }else{
        slider.style.left = `${-1920 * pos}px`
    }

},2000)