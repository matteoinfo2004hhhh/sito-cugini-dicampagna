document.addEventListener('DOMContentLoaded', function () {
    const navbarLinks = document.querySelectorAll('.navbar a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            smoothScrollTo(targetSection);
        });
    });

    function smoothScrollTo(targetElement) {
        const startPosition = window.scrollY;
        const targetPosition = targetElement.offsetTop;
        const distance = targetPosition - startPosition;
        const duration = 800;
        let startTimestamp;

        function scrollAnimation(timestamp) {
            if (!startTimestamp) startTimestamp = timestamp;

            const elapsed = timestamp - startTimestamp;
            const progress = Math.min(elapsed / duration, 1);
            const easeInOutQuad = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;

            window.scrollTo(0, startPosition + distance * easeInOutQuad);

            if (elapsed < duration) {
                requestAnimationFrame(scrollAnimation);
            }
        }

        requestAnimationFrame(scrollAnimation);
    }
});

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }


// Cookie Consent JavaScript
function acceptCookies() {
    document.getElementById('cookieConsent').style.display = 'none';
    // You can also set a cookie here to remember user consent if needed.
}
