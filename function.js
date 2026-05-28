document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const productCards = Array.from(document.querySelectorAll('.product-card'));

    if (!searchInput || productCards.length === 0) {
        return;
    }

    const filterProducts = () => {
        const query = searchInput.value.trim().toLowerCase();

        productCards.forEach((card) => {
            const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
            const description = card.querySelector('.product-description')?.textContent.toLowerCase() || '';
            const price = card.querySelector('.price')?.textContent.toLowerCase() || '';
            const matches = title.includes(query) || description.includes(query) || price.includes(query);

            card.style.display = matches ? '' : 'none';
        });
    };

    searchInput.addEventListener('input', filterProducts);
});
