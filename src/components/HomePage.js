import React, {Component}from 'react';
import Home from './Home'
import About from './About'

class HomePage extends Component {
    render() {
        return (
            <div>
               <Home />
               <About/>
            </div>
        );
    }
}

export default HomePage;