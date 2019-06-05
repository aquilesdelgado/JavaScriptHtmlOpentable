const backgroundCss = ["portada_img1","portada_img2","portada_img3"];
let indice = 0;

setInterval( ()=> { 
    let background = document.querySelector("#contenedor_portada");
    // background.style.background = "url('./public/img/slider-2.jpg')";
    if (indice!=2)
    {
    background.classList.remove(backgroundCss[indice]);
    background.classList.add(backgroundCss[indice+1]);
    }
    else {
        background.classList.remove(backgroundCss[indice]);
        background.classList.add(backgroundCss[indice-2]);
    }
    indice = (indice >=2) ? 0 : indice + 1;
    }
    ,3000);
//funcion de los sliders
let divBotonSlider1 = document.querySelector(".slider1");
divBotonSlider1.addEventListener("click",plusSlides1,false);


let divContenedor1 = document.querySelector(".contenedor".substr(0));
let items1 = divContenedor1.children.length;
let actualItem1 = 0;
let pixel1;

console.log(divContenedor1);

function plusSlides1 (e) {
    let desactivarBotonNext = document.querySelector(".next2");
    let desactivarBotonPrev = document.querySelector(".prev2");
    let click = e.target.id;
    click = parseInt(click);
    if (click > 0) {
        actualItem1 = (actualItem1>=items1) ? actualItem1-4: 4+actualItem1;

    } else {
        actualItem1 = (actualItem1<=3) ? 0 : actualItem1-4;

    }
    pixel1 = actualItem1*236;
    divContenedor1.scrollTo(pixel1,0);
    console.log(pixel1);
    console.log(actualItem1);
}




let divBotonSlider2 = document.querySelector(".slider2");
    divBotonSlider2.addEventListener("click",plusSlides2,false);


let divContenedor2 = document.querySelector("#contenedor_1".substr(0));
let items2 = divContenedor2.children.length;
let actualItem2 = 0;
let pixel2;

console.log(divContenedor2);

function plusSlides2 (e) {
    let desactivarBotonNext = document.querySelector(".next2");
    let desactivarBotonPrev = document.querySelector(".prev2");
    let click = e.target.id;
        click = parseInt(click);
        if (click > 0) {
            actualItem2 = (actualItem2>=items2) ? actualItem2-4: 4+actualItem2;

        } else {
            actualItem2 = (actualItem2<=3) ? 0 : actualItem2-4;
        }
        pixel2 = actualItem2*208;
        divContenedor2.scrollTo(pixel2,0);
    console.log(pixel2);
    console.log(actualItem2);
}

