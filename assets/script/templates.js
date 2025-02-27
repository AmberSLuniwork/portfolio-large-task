//so assets like the header, nav and footer can be reused for each page.

//nav
class navTemplate extends HTMLElement{
    //functions similarly to on load, but instead is executed as the connection between server and client is made rather than when the page loads.
    connectedCallback() {
        this.innerHTML = `
        <nav>
            <ul>
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
        </nav>
        `
    }
}
customElements.define('nav-template', navTemplate)

//footer
class footerTemplate extends HTMLElement{
    connectedCallback(){
        `
        `
    }
}
customElements.define('footer-template',footerTemplate)

