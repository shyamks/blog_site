import React from 'react';
import {Route, IndexRoute} from 'react-router';
import About from './components/About';
import HomePage from './components/Home';
import Blog from './components/Blog';
import App from './App';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="about" component={About}/>
        <Route path="blog" component={Blog}/>
    </Route>
);