import React, {Component} from 'react';
import { Link, IndexLink} from 'react-router';
import './Header.css'
class Header extends Component {
    render() {
        return (
            <div className="Header-common Header-title-padding">
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    <h2 >Meghashyam Kodmad</h2>
                <div className="Header-common Header-nav-padding">
                    <nav>
                        <Link to="/">Home</Link>
                        {" | "}
                        <Link to="about">About</Link>
                        {" | "}
                        <Link to="blog">Blog</Link>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Header;
