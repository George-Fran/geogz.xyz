document.addEventListener('DOMContentLoaded', () => {
    navegacionFija();
    mostrarNavegador();
    resaltarEnlace();
    scrollNav();
});

function navegacionFija() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
}

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

function resaltarEnlace() {
    document.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const enlacesNavegador = document.querySelectorAll('.nav-principal a');
        let actual = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                actual = section.id;
            }
        });
        enlacesNavegador.forEach(enlace => {
            enlace.classList.remove('activo');
            if (enlace.getAttribute('href') === '#' + actual) {
                enlace.classList.add('activo');
            }
        });
    });
}
function scrollNav() {
    const navLinks = document.querySelectorAll('.nav-principal a');
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const sectionScroll = e.target.getAttribute('href');
            const section = document.querySelector(sectionScroll);

            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
}