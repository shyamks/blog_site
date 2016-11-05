import React from 'react';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import HomePage from './components/HomePage';
import BlogList from './components/BlogList';
import Blog from './components/Blog';
import App from './App';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage}/>
            <Route path="blogs" component={BlogList}/>
            <Route path="/blog/:blogId" component={Blog}/>
        </Route>
    </Router>
);
/*<Route path="about" component={About}/>
 <Route path="blog" component={BlogList}/>*/