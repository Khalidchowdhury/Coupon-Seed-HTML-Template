// Modal JavaScript Code 
document.addEventListener('DOMContentLoaded', function () {

    // Elements for modal
    const getCouponButtons = document.querySelectorAll('.coupon-button');
    const modalOverlay = document.getElementById('couponModalOverlay');
    const closeModalButton = document.getElementById('closeModalButton');

    // Elements for clipboard copy
    const copyIcon = document.getElementById('copyIcon');
    const couponCodeText = document.getElementById('couponCodeText');
    const copyCodeButton = document.getElementById('copyCodeButton');

    // Show modal function
    function showModal() {
        modalOverlay.style.display = 'flex';
        setTimeout(() => modalOverlay.classList.add('show'), 10);
    }

    // Hide modal function
    function hideModal() {
        modalOverlay.classList.remove('show');
        setTimeout(() => modalOverlay.style.display = 'none', 200);
    }

    // Show modal on button click
    getCouponButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            showModal();
        });
    });

    // Close modal on 'X' click
    if (closeModalButton) {
        closeModalButton.addEventListener('click', hideModal);
    }

    // Close modal when clicking on overlay (but not modal content)
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function (event) {
            if (event.target === modalOverlay) {
                hideModal();
            }
        });
    }

    // Clipboard copy functionality (shared for both icon and button)
    function copyCouponCode() {
        if (!couponCodeText) return;

        const textToCopy = couponCodeText.textContent;

        navigator.clipboard.writeText(textToCopy).then(function () {
            // Success feedback
            if (copyIcon) {
                copyIcon.classList.replace('bi-clipboard', 'bi-clipboard-check-fill');
                copyIcon.style.color = '#198754';
            }

            if (copyCodeButton) {
                copyCodeButton.innerHTML = '<i class="bi bi-check-circle-fill"></i> Copied!';
            }

            setTimeout(function () {
                if (copyIcon) {
                    copyIcon.classList.replace('bi-clipboard-check-fill', 'bi-clipboard');
                    copyIcon.style.color = '#868e96';
                }

                if (copyCodeButton) {
                    copyCodeButton.innerHTML = '<i class="bi bi-clipboard-check"></i> Copy Code';
                }
            }, 2000);
        }).catch(function (err) {
            console.error('Could not copy text: ', err);
            alert('Failed to copy code.');
        });
    }

    // Attach copy handler to both elements
    if (copyIcon) {
        copyIcon.addEventListener('click', copyCouponCode);
    }

    if (copyCodeButton) {
        copyCodeButton.addEventListener('click', copyCouponCode);
    }
});
