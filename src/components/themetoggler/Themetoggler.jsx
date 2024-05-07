import { useDispatch } from "react-redux"
import { toggleTheme } from "../../store"



const ThemeToggler = () => {

    const dispatch = useDispatch();
    
      return (
        <div>
            <button onClick={() => dispatch(toggleTheme())}>Byt tema</button>
            
        </div>
      )
    }
    
    export default ThemeToggler