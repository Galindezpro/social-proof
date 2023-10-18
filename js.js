const containerCalificaiones = document.querySelectorAll('.estrellas__calificaiones');
const numberStar = 5;

containerCalificaiones.forEach(container => {
    for (let i = 0; i < numberStar; i++) {
        const star = document.createElement('span');
        star.innerHTML = '⭐';
        container.appendChild(star);
    };
})

