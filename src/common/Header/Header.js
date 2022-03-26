import React, {Component} from "react";
import './Header.css';
import logo from '../../assets/logo.svg';
class Header extends Component {
    render () {
        return (
            <header>
                <img src={logo} alt ="logo" className="app-logo" />            
            </header>
        )
    }
}

export default Header;