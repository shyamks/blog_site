import React, {Component} from 'react';
import {HashLink} from "react-router-hash-scroll";
import {Link} from 'react-router';
import './Header.css'

class Header extends Component {
    render() {
        var props = this.props;
        console.log(props);
        var navBar;
        if (props.page === 'home')
            navBar = (<nav >
                <HashLink to="#home">About</HashLink>{" | "}
                <HashLink to="#about">Contact Me</HashLink>{" | "}
                <Link to="Blog">Blog</Link>
            </nav>);
        else
            navBar = (<nav >
                <Link to="/#home">About</Link>{" | "}
                <Link to="/#about">Contact Me</Link>{" | "}
                <Link to="Blog">Blog</Link>
            </nav>);
        return (

            <div className="Header-common">
                <h1 >Meghashyam Kodmad</h1>
                <div className="Header-common Header-nav-padding">
                    {navBar}
                </div>
            </div>
        );
    }
}

export default Header;
