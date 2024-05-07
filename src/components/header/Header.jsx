import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import ThemeToggler from '../themetoggler/Themetoggler';


const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className={styles.header}>
                <ThemeToggler />
                <li><Link to="/"><h2 className={styles.title} >GAŠPAR.</h2></Link></li>
                <nav>
                    <ul className={styles.ul}>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/portfolio">PORTFOLIO</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                        <li><Link to="/contact">CONTACT</Link></li>
                    </ul>
                </nav>
                    <svg class="custom-svg" onClick={toggleMenu} className={styles.mobile_menu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                        <path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"/>
                    </svg>
            </header>

{/* mobile menu */}

            <div className={styles.mobileNav} style={{ width: isMenuOpen ? '60%' : '0' }}>
                <ul>
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link></li>
                    <li><Link to="/portfolio" onClick={() => setMenuOpen(false)}>PORTFOLIO</Link></li>
                    <li><Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link></li>
                    <li><Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link></li>
                </ul>
            </div>
            <div 
                className={styles.overlay}
                style={{ width: isMenuOpen ? '40%' : '0' }} 
                onClick={() => setMenuOpen(false)}
            />
        </>
    );
};

export default Header;
