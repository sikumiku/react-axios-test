import React, { Component } from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import NewPost from './NewPost/NewPost'
import Posts from './Posts/Posts';

import './Blog.css';

class Blog extends Component {
    state = {
        auth: false
    };
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts/"
                                exact
                                activeClassName="myActive"
                                activeStyle={{color: '#fa923f', textDecoration: 'underline'}}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post', //this.props.match.url + './new-post' this way you can turn it into relative path
                                hash: '#submit', //allows to jump to a point
                                search: '?quick-submit=true'
                            }} exact activeClassName="myActive">New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route exact path="/" render={() => <h1>Home</h1>}/>
                <Route exact path="/" render={() => <h1>Home2</h1>}/>
                switch can be used to only load the first path we find that matches, routes can always be outside switch*/}
                <Switch>
                    {this.state.auth ? <Route path="/new-post" exact component={NewPost}/> : null} {/*using guard*/}
                    <Route path="/posts" component={Posts}/>
                    {/* these both catch all cases that dont match so cant use both at the same time*/}
                    <Route render={() => <h1>Not found</h1>}/>
                    {/*<Redirect from="/" to="/posts"/>*/}
                </Switch>

            </div>
        );
    }
}

export default Blog;