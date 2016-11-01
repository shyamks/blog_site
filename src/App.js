import React, {Component} from 'react';
import {StickyContainer, Sticky}  from 'react-sticky';
import Header from './components/Header/Header'
import './App.css';

class App extends Component {
    render() {
        return (
            <div >
                <StickyContainer >
                    <Sticky className={App}>
                        <Header />
                    </Sticky>
                    {this.props.children}
                </StickyContainer>
            </div>
        );
    }
}

export default App;
