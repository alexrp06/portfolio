console.log("Bienvenido al portafolio de [Alex Romera Piñero]");

document.addEventListener("DOMContentLoaded", function () {
    let proyectos = document.querySelectorAll(".proyecto-link");
    proyectos.forEach(proyecto => {
        proyecto.addEventListener("click", function (event) {
            event.preventDefault();
            alert("¡Has hecho clic en un proyecto!");
        });
    });
});
