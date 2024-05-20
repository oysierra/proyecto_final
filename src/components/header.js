import React from 'react';
import './Header.css';

function Header() {
    return (
        <header>
            <div className="logo"><img src="/images/logo.png" alt="logo" /></div>
            <div className="contact-info">
                <div className="email">correo@example.com</div>
                <div className="phone">123-456-7890</div>
            </div>
            <nav>
                <a href="#">Buy Tickets</a>
                <a href="#">Login</a>
                <a href="#">Register</a>
                <a href="#"><img src="/images/cart-icon.png" alt="Cart" /></a>
            </nav>
        </header>
    );
}

export default Header;
