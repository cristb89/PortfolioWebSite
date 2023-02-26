let animacion = document.querySelectorAll(".animacion");

function mostrarScroll() {
    
    let scrollTop = document.documentElement.scrollTop;
    
    for (let i = 0; i < animacion.length; i++){

        let alturaAnimacion = animacion[i].offsetTop;

        if (alturaAnimacion - 400 < scrollTop) {
            animacion[i].style.opacity = 1;
            animacion[i].classList.add("mostrarArriba");
        }
    }
}

window.addEventListener('scroll', mostrarScroll);