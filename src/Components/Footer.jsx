function Footer() {
    return (
        <footer className="footer-container">
            <section className="footer-socials">
                <span className="footer-title">BareSKN</span>
                <div className="footer-brief">
                    You can contact us for more information
                </div>
                <div className="footer-socials-icons">icons</div>
            </section>
            <section className="footer-bookmarks">
                <span className="footer-title">Pages</span>
                <ul className="footer-page-links">
                    <li><a href="" className="footer-page-link">Home</a></li>
                    <li><a href="" className="footer-page-link">Appointment</a></li>
                    <li> <a href="" className="footer-page-link">Blog</a></li>
                    <li><a href="" className="footer-page-link">About us</a></li>
                </ul>
            </section>
            <section className="footer-newsletter">
                <span className="footer-title">Newsletter</span>
                <form action="">
                    <input type="email" name="email" id="footer-email" placeholder="Your email address" />
                    <button type="submit" id="footer-submit">Subscribe</button>
                </form>
            </section>
        </footer>
    )
}
export default Footer;