import * as React from 'react';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';
export default function Header({sections}) {
  const sectionTitles = sections.map((section) =>  <li><Button variant="contained">{section.title}</Button></li> )
    return (
        <div className="nav-bar">
          <div className="header">
            <div className="logo">
                 <img src="logo.png" alt='Xavis Game Store'/>
            </div>
            
            <div className="brand">
                <h1>Xavi's Game Store</h1>
            </div>
            <div className="menu">
              <CartWidget />           
            </div>
            
          </div>
          <nav className="subheader"> {sectionTitles} </nav>
        
        </div>
        
      );
}