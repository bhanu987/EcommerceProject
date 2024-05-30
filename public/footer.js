const footerHTML = ` <footer>
<div class="footer-container flex">
    <div class="flex content content_1">
        <p>Welcome to Gadget Junction, your ultimate destination for cutting-edge gadgets!</p>
        <img src="./images/cards.png" alt="">
    </div>
    <div class="flex content ">
        <h3>Shopping</h3>
        <div class="footer-links ">
            <a href="#">Computer Store</a>
            <a href="#"> Laptop Store</a>
            <a href="#">Accessories</a>
            <a href="#">Sales & Discount</a>
        </div>
    </div>
    <div class="flex content">
        <h3>Experience</h3>
        <div class="footer-links">
            <a href="#">Contact Us</a>
            <a href="#"> Payment Method</a>
            <a href="#"> Delivery</a>
            <a href="#">Return and Exchange</a>
        </div>
    </div>
    <div class="flex content">
        <h3>NewsLetter</h3>
        <p>Be the first to know about new
            arrivals, sales & promos!</p>
        <input type="email" name="email" class="email" id="email" placeholder="Your Email">
    </div>
</div>
</footer>
`;

const footerElement = document.querySelector('.footer-section')
footerElement.insertAdjacentHTML("afterbegin",footerHTML)
