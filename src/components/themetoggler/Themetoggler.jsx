import styles from './themetoggler.module.css';
import { useDispatch } from "react-redux"
import { toggleTheme } from "../../store"



const ThemeToggler = () => {

    const dispatch = useDispatch();
    
      return (
        <>
          <div>
            <input type="checkbox" id="darkModeToggle" className="toggle-checkbox" onClick={() => dispatch(toggleTheme())}/>
            <label htmlFor="darkModeToggle" className="toggle-label"></label>
          </div>
        </>
      )
    }
    
    export default ThemeToggler
