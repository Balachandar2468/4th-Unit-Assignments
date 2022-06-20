import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import { AppTheme } from './AppTheme';
import ThemeToggle from './ThemeToggle';

const Header = () => {


  const {theme} = useContext(ThemeContext);


const headerStyle : AppTheme  = {
  dark:{
    backgroundColor:'black',
    color:'white',
  },
  light :{
    backgroundColor: 'transparent',
    color:'black',
  },
  common:{
    transition:'all Is ease',
  }
}

const themeStyle = {
  ...headerStyle.common,
  ...(theme === 'light' ? headerStyle.light : headerStyle.dark)
}





  return (
    <div>

<div >
  <header style={themeStyle} id='nav'>

MASAI SCHOOL  [{theme}]

<ThemeToggle/>
</header>

</div>

    </div>
  )
}

export default Header