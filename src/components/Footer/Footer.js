import React from 'react';
import './Footer.css'; // Importa el archivo CSS

function Footer() {
    return (
        <footer>
            <div className="social-icons">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/facebook-icon.png" alt="Facebook" />
                </a>
                <a href="https://www.reddit.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/reddit-icon.png" alt="Reddit" />
                </a>
                <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/telegram-icon.png" alt="Telegram" />
                </a>
                <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/pinterest-icon.png" alt="Pinterest" />
                </a>
                <a href="https://www.example.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/x-icon.png" alt="X" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
