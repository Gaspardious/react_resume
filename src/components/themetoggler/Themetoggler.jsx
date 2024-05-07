import styles from './themetoggler.module.css';
import { useDispatch } from "react-redux"
import { toggleTheme } from "../../store"



const ThemeToggler = () => {

    const dispatch = useDispatch();
    
      return (
        <>
          <div>
            <input type="checkbox" id="darkModeToggle" className={styles.input} onClick={() => dispatch(toggleTheme())}/>
            <label htmlFor="darkModeToggle" className={styles.label}></label>
          </div>
        </>
      )
    }
    
    export default ThemeToggler
