/* eslint-disable react-refresh/only-export-components */

import { createContext, useState, useContext } from "react";

//this context will serve as a container for global state
const ModeChangeContext = createContext()

export const UseToggler = ({children}) => {
    const [mode, setMode] = useState('light')
    // const [darkMode, setDarkMode] = useState(true)

    const appContent = {
        heading: 'Light mode or dark mode',
        subheading: 'Choose one mode that you prefer'
    }

    const handleModeChange = () =>{
        setMode (mode==='light' ? 'dark' : 'light')
    }

    return(
        <ModeChangeContext.Provider value={{mode, appContent, handleModeChange}}>
            {children}
        </ModeChangeContext.Provider>
    )
}
export const useAppData = () => useContext(ModeChangeContext)

