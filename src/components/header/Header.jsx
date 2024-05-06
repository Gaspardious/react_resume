
import { Link } from 'react-router-dom'
import styles from './header.module.css'
import DarkmodeComponent from '../darkmode/DarkmodeComponent.jsx'




export default function Header (){
    return (
        <>
  
            <header className={styles.header}>
            <DarkmodeComponent />
            <img className={styles.logo_img} src="../../images/file.png" alt="" />
                    <nav>
                        <ul className={styles.ul}>
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/portfolio">PORTFOLIO</Link></li>
                            <li><Link to="/about">ABOUT</Link></li>
                            <li><Link to="/contact">CONTACT</Link></li>
                        </ul>
                    </nav>
            </header>
        </>
)}
