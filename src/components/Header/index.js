import React, { Component } from 'react';
import './header.css';

import { Link } from 'react-router-dom';


class Header extends Component{


  render(){
    return(

      <div className="app" >

        <div className="header" >
            <Link to="/" >Movies</Link>
        </div>

      </div>

    );
  }
}

export default Header;
