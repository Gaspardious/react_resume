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
                <img className={styles.logo_img} src="../../images/file.png" alt="" />
                <nav>
                    <ul className={styles.ul}>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/portfolio">PORTFOLIO</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                        <li><Link to="/contact">CONTACT</Link></li>
                    </ul>
                </nav>
                <img 
                    className={styles.mobile_menu} 
                    src="images/more.png" 
                    alt="Menu Icon" 
                    onClick={toggleMenu}
                />
            </header>
¨

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
