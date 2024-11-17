import { createContext, useContext } from "react";
 export const ThemeContext = createContext({
 darkMode: false,
 setDarkMode: () => {}
});
const Theme = () => {
 const {darkMode, setDarkMode} = useContext(ThemeContext);
 const handleClick = () => {
   if(darkMode) {
    setDarkMode('light')
   } else {
     setDarkMode('Dark')
   }
 }
 return (
   <>
     <ThemeContext.Provider value={{ darkMode,   
 setDarkMode }}>
     <button type="button" onClick={handleClick}>
       {darkMode ? 'Dark' : 'Light'}
     </button>
     </ThemeContext.Provider>
   </>
 );
}
export default { ThemeContext, Theme };