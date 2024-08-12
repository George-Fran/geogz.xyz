document.addEventListener('DOMContentLoaded', () => {
    // navegacionFija();
    mostrarNavegador();
});

// function navegacionFija() {
//     const header = document.querySelector('.header');
//     const inicio = document.querySelector('.boton');
//     document.addEventListener('scroll', function () {
//         if (inicio.getBoundingClientRect().bottom < 1) {
//             header.classList.add('sticky');
//         } else {
//             header.classList.remove('sticky');
//         }
//     })
// }

function mostrarNavegador() {
    const menu = document.querySelector('.menu');
    const navegador = document.querySelector('.nav-principal');
    const fondo = document.querySelector('.fondo');
    const body = document.querySelector('body');
    const iconOpen = menu.innerHTML;
    const iconClosed = '<i class="fa-solid fa-circle-xmark"></i>';

    menu.addEventListener('click', () => {
        if (navegador.classList.contains('dont')) {
            navegador.classList.remove('none');
            menu.innerHTML = iconClosed;
            menu.classList.add('fixed');
            body.classList.add('hidden');
            fondo.classList.remove('none');
            setTimeout(() => {
                navegador.classList.remove('dont');
            }, 10);
        } else {
            navegador.classList.add('dont');
            menu.innerHTML = iconOpen;
            menu.classList.remove('fixed');
            body.classList.remove('hidden');
            setTimeout(() => {
                fondo.classList.add('none');
            }, 300);
        }
    });
    navegador.addEventListener('transitionend', () => {
        if (navegador.classList.contains('dont')) {
            navegador.classList.add('none');
        }
    });
}