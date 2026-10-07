const inicio = document.getElementById("inicio");
const pagina = document.getElementById("pagina");

const abrirCarta = document.getElementById("abrirCarta");
const sobre = document.getElementById("sobre");


/* =====================================
   ABRIR LA CARTA
===================================== */

function abrirPagina() {

    inicio.classList.add("cerrando");

    inicio.style.transition =
        "opacity .8s ease, transform .8s ease";

    inicio.style.opacity = "0";

    inicio.style.transform =
        "scale(1.04)";


    setTimeout(() => {

        inicio.style.display = "none";

        pagina.classList.remove("oculto");

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

        iniciarAnimaciones();

    }, 800);
}


abrirCarta.addEventListener(
    "click",
    abrirPagina
);


sobre.addEventListener(
    "click",
    abrirPagina
);


/* =====================================
   ANIMACIONES AL HACER SCROLL
===================================== */

function iniciarAnimaciones() {

    const elementos =
        document.querySelectorAll(
            ".carta, .tarjeta, .suenos-carta, .suenos-decoracion, .final"
        );


    elementos.forEach(elemento => {

        elemento.classList.add("animar");

    });


    const observer =
        new IntersectionObserver(

            entradas => {

                entradas.forEach(entrada => {

                    if (
                        entrada.isIntersecting
                    ) {

                        entrada.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entrada.target
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    elementos.forEach(elemento => {

        observer.observe(elemento);

    });

}