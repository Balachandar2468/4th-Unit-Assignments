import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from '../App'

const ThemeToggle = () => {

    const{theme,settheme} = useContext(ThemeContext)

const handletheme = ()=>{

    settheme(theme === 'light' ? 'dark' : 'light')

}


  return (
    <div>

        <Switch uncheckedIcon={false} checkedIcon={true} onChange={handletheme}  checked={theme === 'light'}/>
    </div>
  )
}

export default ThemeToggle