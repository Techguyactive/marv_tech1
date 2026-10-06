let cartCount = 0;

function updateCartCount() {
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        if (cartCount > 0) {
            cartCountElement.textContent = cartCount;
            cartCountElement.style.display = 'flex';
        } else {
            cartCountElement.style.display = 'none';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();

    const addButtons = document.querySelectorAll('.add-btn');
    addButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            cartCount++;
            updateCartCount();
            
            const originalText = button.innerHTML;
            button.innerHTML = 'Added!';
            button.style.backgroundColor = '#4ade80';
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.backgroundColor = '';
            }, 1000);
        });
    });

    const startShoppingBtn = document.querySelector('.btn-start-shopping');
    if (startShoppingBtn) {
        startShoppingBtn.addEventListener('click', () => {
            window.location.href = 'products.html';
        });
    }

    const viewCatalogBtn = document.querySelector('.btn-view-catalog');
    if (viewCatalogBtn) {
        viewCatalogBtn.addEventListener('click', () => {
            window.location.href = 'products.html';
        });
    }

    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = newsletterForm.querySelector('input');
            const button = newsletterForm.querySelector('button');
            
            if (input.value) {
                const originalText = button.textContent;
                button.textContent = 'Subscribed!';
                button.style.backgroundColor = '#4ade80';
                input.value = '';
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.backgroundColor = '';
                }, 2000);
            }
        });
    }
});