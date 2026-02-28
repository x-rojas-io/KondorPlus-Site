document.addEventListener("DOMContentLoaded", function() {
    // Load navbar
    document.getElementById("navbar-container").innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <a class="navbar-brand" href="index.html">
                    <img src="images/logo.png" alt="Kondor Plus" height="40">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="projects.html">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="blog.html">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;

    // Load footer
    document.getElementById("footer-container").innerHTML = `
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 mb-4 mb-md-0">
                        <h5>Kondor Plus</h5>
                        <p>Leading the way in Machine Learning and AI Solutions</p>
                    </div>
                    <div class="col-md-4 mb-4 mb-md-0">
                        <h5>Quick Links</h5>
                        <ul class="list-unstyled">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="projects.html">Projects</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <h5>Connect With Us</h5>
                        <div class="social-links">
                            <a href="#" class="mr-3"><i class="fab fa-linkedin"></i></a>
                            <a href="#" class="mr-3"><i class="fab fa-github"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
                <hr class="my-4">
                <div class="text-center">
                    <p class="mb-0">&copy; ${new Date().getFullYear()} Kondor Plus. All rights reserved.</p>
                </div>
            </div>
        </footer>
    `;

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // Add fade-in animation to elements as they come into view
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
});
