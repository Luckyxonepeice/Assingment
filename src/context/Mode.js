import React from 'react'
import { createContext,useState } from 'react'

export const ThemeContext = createContext();

export default function Mode({children}) {

    const [light , setLight] = useState(true);


    const toggle= ()=>{
        setLight(!light);
    }
  return (
    <ThemeContext.Provider value={{light,toggle}}>
        {children}
    </ThemeContext.Provider>
  )
}
