import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import { AppTheme } from './AppTheme'

const Hero = () => {

  const {theme} =  useContext(ThemeContext);

  const heroStyle : AppTheme = {
    dark:{
      backgroundColor:'#333',
      color:'black',

    },
    light:{
      backgroundColor: '#eee',
      color:'black',
    },
    common:{
      transition:'all Is ease',
      height:'100px',
    }
  }

const themeStyle = {
  ...heroStyle.common,
  ...(theme === 'light' ? heroStyle.light : heroStyle.dark)
}
  
  return (
    <div>
      <main>
      <div id='admission' style={themeStyle}>
<h1>Welcome Admissions open!!!</h1>
</div>
      </main>








    </div>
  )
}

export default Hero