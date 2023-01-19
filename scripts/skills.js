const cards = document.querySelectorAll('.skill__card_container');

cards.forEach(card => {
    console.log(card);
    card.addEventListener('mousemove', e => {
        const cardItems = card.querySelector('.skill__card');

        const halfHeight = cardItems.offsetHeight / 2;
        const halfWidth = cardItems.offsetWidth / 2;

        cardItems.style.transform = `rotateX(${
            -(e.offsetY - halfHeight) / 5
        }deg) rotateY(${(e.offsetX - halfWidth) / 5}deg)`;
    });
    card.addEventListener('mouseout', e => {
        const cardItems = card.querySelector('.skill__card');

        cardItems.style.transform = 'rotate(0)';
    });
});
