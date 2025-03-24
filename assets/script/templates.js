//so assets like the header, nav and footer can be reused for each page.

//nav
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header"); // Selects the existing <nav> element
    if (header) {
        header.innerHTML = `
        <a class="logo" href="index.html">Company Name</p>
        <nav>
            <button class="menu-toggle" id="hamburger">&#9776;</button>
            <ul class="nav-list">
                <li>
                    <a href=index.html>Home</a>
                </li>
                <li>
                    <a href=about.html>About Us</a>
                </li>
                <li>
                    <a href=services.html>Services</a>
                </li>
                <li>
                    <a href=portfolio.html>Portfolio</a>
                </li>
                <li>
                    <a href=our-process.html>Our Process</a>
                </li>
                <li>
                    <a href=blog.html>Our Insights</a>
                </li>
                <li>
                    <a class="contactlink" href=contact.html>Contact Us</a>
                </li>
            </ul>
        </nav>
        `;
    }
    const footer = document.querySelector("footer");
    if (footer) {
        footer.innerHTML = `
        <section class="links">
            <ul class="footer-nav">
                <li>
                    <a href=index.html>Home</a>
                </li>
                <li>
                    <a href=about.html>About Us</a>
                </li>
                <li>
                    <a href=services.html>Services</a>
                </li>
                <li>
                    <a href=portfolio.html>Portfolio</a>
                </li>
                <li>
                    <a href=our-process.html>Our Process</a>
                </li>
                <li>
                    <a href=blog.html>Our Insights</a>
                </li>
                <li>
                    <a href=contact.html>Contact Us</a>
                </li>
            </ul>
        </section>
        <section class="awards"></section>
        `;
    }
});

