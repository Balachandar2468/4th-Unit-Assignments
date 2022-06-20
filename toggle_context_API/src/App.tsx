import { useState,createContext } from 'react'
//import logo from './logo.svg'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'

interface IThemeContext {
  theme:string;
  settheme: any;
}



export const ThemeContext = createContext({} as IThemeContext);

function App() {
  const [count, setCount] = useState(0)
  const[theme,settheme] = useState('light');

  return (

    <ThemeContext.Provider value={{theme,settheme}}>
    <div className="App">
     


  
    <Header/>
    <Hero/>
    
    
    </div>
    </ThemeContext.Provider>
  )
}

export default App
