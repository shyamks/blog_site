import React, {Component}from 'react';
import './Home.css'
import {Sticky} from 'react-sticky';
import Header from './Header/Header';

class Home extends Component {
    render() {
        return (
            <div>
                <Sticky>
                    <Header page="home"/>
                </Sticky>
                <div>
                    <div className="home-marketing">
                        <div className="home-left-side">
                            <img className="home-img" src={require("../../public/me.jpg")}/>
                        </div>
                        <div className="home-relative" id="home">
                            <p className="home-col-lg-8">Hi, I’m a 21 year old football(soccer!) enthusiast and full stack
                                web
                                engineer.
                            </p>
                            <p className="home-col-lg-8">Its in the year of 2015 that I entered the world of coding.
                            </p>
                            <p className="home-col-lg-8">I interned at Commonfloor which is a Realestate based startup which
                                was
                                acquired by a bigger fish Quikr in the first few months of 2016.
                            </p>
                            <p className="home-col-lg-8">I work as a developer writing services and scripts for Quikr Homes.
                            </p>
                            <p className="home-col-lg-8">
                                This is my first Web App. :D
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
/*<p>
 <div className="marketing">
 <div className="left-side">
 <img className="img" src={require("../../public/me.jpg")}></img>
 </div>
 <p className="relative" id="home">
 <p className="col-lg-8">Hi, I’m a 21 year old football(soccer!) enthusiast and full stack web
 engineer.
 </p>
 <p className="col-lg-8">Its in the year of 2015 that I entered the world of coding.
 </p>
 <p className="col-lg-8">I interned at Commonfloor which is a Realestate based startup which was
 acquired by a bigger fish Quikr in the first few months of 2016.
 </p>
 <p className="col-lg-8">I work as a developer writing services and scripts for Quikr Homes.
 </p>
 <p className="col-lg-8">
 This is my first Web App. :D
 </p>
 </p>
 </div>
 </p>*/