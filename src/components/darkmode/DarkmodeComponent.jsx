import { useEffect } from 'react';
import { useTheme, useThemeUpdate } from "./Themecontext";
 
const DarkmodeComponent = () => {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();


    useEffect(() => {
        document.documentElement.setAttribute('data-theme', darkTheme ? 'dark' : 'light');
    }, [darkTheme]);  

    return (
        <>
            <button onClick={toggleTheme}>Green / Grey</button>
        </>
    );
}
 
export default DarkmodeComponent;
