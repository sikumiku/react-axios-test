import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';
import NewPost from './NewPost/NewPost'
import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost';

import './Blog.css';

class Blog extends Component {

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/"
                                exact
                                activeClassName="myActive"
                                activeStyle={{color: '#fa923f', textDecoration: 'underline'}}>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post', //this.props.match.url + './new-post' this way you can turn it into relative path
                                hash: '#submit', //allows to jump to a point
                                search: '?quick-submit=true'
                            }} exact activeClassName="myActive">New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route exact path="/" render={() => <h1>Home</h1>}/>
                <Route exact path="/" render={() => <h1>Home2</h1>}/>*/}
                <Route path="/" exact component={Posts}/>
                <Route path="/:id" component={FullPost}/>
                <Route path="/new-post" exact component={NewPost}/>
            </div>
        );
    }
}

export default Blog;