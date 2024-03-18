import React from 'react'
import '../styles/navbar.css'
import sun from '../images/sun-color-icon.svg';
import moon from '../images/moon-svgrepo-com.svg';
import Form from 'react-bootstrap/Form';
import {ThemeContext} from '../context/Mode.js';
import { useContext } from 'react';


export default function Navbar() {
  const {light, toggle} = useContext(ThemeContext);
  
  const dynamicStyles = !light ? {color: 'gold' } : {};




  return (
    <div>
      <div className={light?'nav-bar':'nav-bar-dark'}>
        <div className='nav-time'>
          <img src={light?sun:moon} alt='sun'></img>
        </div>
        <div className={!light?'nav-type-dark':'nav-type'}>
            <h1>Let's check the Process.</h1>
        </div>
        <div className='nav-switch'>
          <Form onChange={toggle}>
            <Form.Check // prettier-ignore
              style={dynamicStyles}
              type="switch"
              id="custom-switch"
              label={light?"Light":"Dark"}
            />
          </Form>
        </div>
        
      </div>
    </div>
  )
}
