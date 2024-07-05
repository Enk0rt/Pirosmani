document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.products__card');

    productCards.forEach(card => {
        const productId = card.getAttribute('data-product-id');
        const stars = card.querySelectorAll('.star');
        const averageRatingElement = card.querySelector('.count');
        let ratings = JSON.parse(localStorage.getItem(`ratings-${productId}`)) || [];

        function updateAverageRating() {
            const total = ratings.reduce((acc, rating) => acc + rating, 0);
            const average = ratings.length ? (total / ratings.length).toFixed(1) : 0;
            averageRatingElement.textContent = average;

            const averageRounded = Math.round(average);
            stars.forEach((star, index) => {
                if (index < averageRounded) {
                    star.classList.add('selected');
                } else {
                    star.classList.remove('selected');
                }
            });
        }

        stars.forEach(star => {
            star.addEventListener('click', () => {
                const rating = parseInt(star.getAttribute('data-value'));
                ratings.push(rating);
                localStorage.setItem(`ratings-${productId}`, JSON.stringify(ratings));
                updateAverageRating();
            });

            star.addEventListener('mouseover', () => {
                const rating = parseInt(star.getAttribute('data-value'));
                stars.forEach((s, index) => {
                    if (index < rating) {
                        s.classList.add('hover');
                    } else {
                        s.classList.remove('hover');
                    }
                });
            });

            star.addEventListener('mouseout', () => {
                stars.forEach(s => s.classList.remove('hover'));
            });
        });

        updateAverageRating();
    });
});
