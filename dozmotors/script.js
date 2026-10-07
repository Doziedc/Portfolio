const filterButtons = document.querySelectorAll('.filter-btn');
const carCards = document.querySelectorAll('.car-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {

        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const selectedCategory = button.dataset.filter;

        carCards.forEach(card => {
            const cardCategory = card.dataset.category;

            if (selectedCategory === 'All' || selectedCategory === cardCategory) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});