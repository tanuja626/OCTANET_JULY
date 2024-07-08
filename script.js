document.addEventListener("DOMContentLoaded", function() {
    const footer = document.createElement('footer');

    footer.innerHTML = `
        <div class="footer-container">
            <div class="footer-section">
                <h4>Informational</h4>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Site Map</a></li>
                </ul>
            </div>
                <div class="footer-section">
                <h4>Educational</h4>
                <ul>
                    <li><a href="#">Forest Conservation</a></li>
                    <li><a href="#">Biodiversity</a></li>
                    <li><a href="#">Sustainable Forestry</a></li>
                    <li><a href="#">Climate Change</a></li>
                    <li><a href="#">Wildlife Protection</a></li>
                    <li><a href="#">Ecosystem Services</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Resources</h4>
                <ul>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Publications</a></li>
                    <li><a href="#">Research</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Engagement</h4>
                <ul>
                    <li><a href="#">Volunteer</a></li>
                    <li><a href="#">Donate</a></li>
                    <li><a href="#">Get Involved</a></li>
                    <li><a href="#">Membership</a></li>
                    <li><a href="#">Newsletter Sign-up</a></li>
                </ul>
            </div>
            </div>
            <div class="footer-section">
                <h3>Follow Us</h3>
                <div class="social-media">
                <ul>
                    <a href="#"><img src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png"></a>
                    <a href="#"><img src="https://www.freepnglogos.com/elon-musk-twitter-rebrand-x-logo-2.png" alt="Twitter"></a>
                    <a href="#"><img src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-logo-instagram-ini-ada-varias-dan-transparan-33.png" alt="Instagram"></a>
                </ul>
                    </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
    `;

    document.getElementById('footer-container').appendChild(footer);
});