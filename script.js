const imgsClick = document.querySelectorAll('.clickable');

imgsClick.forEach(img => {
    img.addEventListener('click', () => {
        const galeriaID = img.getAttribute('data-galeria');
        const galeria = document.getElementById(galeriaID);
        galeria.style.display = 'block';

        const cerrar = galeria.querySelector('.cerrar');
        cerrar.addEventListener('click', () => {
            galeria.style.display = 'none';
        });

        galeria.addEventListener('click', (e) => {
            if (e.target === galeria) {
                galeria.style.display = 'none';
            }
        });
    });
});



