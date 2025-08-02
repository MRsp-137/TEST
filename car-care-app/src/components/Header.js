import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="app-header">
            <h1>نام برند شما</h1>
            <nav>
                <ul>
                    <li><a href="#products">محصولات</a></li>
                    <li><a href="#about">درباره ما</a></li>
                    <li><a href="#contact">تماس با ما</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
