/*Animacion para cerrar las paginas */
//Obtener los elementos de la clase .close
let cerrar = document.querySelectorAll(".close");

//recorrerlos
cerrar.forEach(function(cerrar){

    //Agregar un evento a cada uno de ellos
    cerrar.addEventListener("click", function(ev){
        ev.preventDefault(); //evita redirigir a otro lado de la pagina
        let content = document.querySelector(".content");

        //Quitar clase de animacion que ya existe
        content.classList.remove("animate__animated");
        content.classList.remove("animate__bounceInRight");

        //Agregar clases para animar su salida
        content.classList.add("animate__animated");
        content.classList.add("animate__fadeOutUpBig");

        //Retrasa el direccionamiento al index
        setTimeout(function(){
            location.href = "/";
        }, 700)

        return false;
    });
});





