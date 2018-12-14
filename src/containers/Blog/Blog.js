import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import NewPost from './NewPost/NewPost'

import './Blog.css';
import Posts from './Posts/Posts'

class Blog extends Component {

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: './new-post',
                                hash: '#submit', //allows to jump to a point
                                search: '?quick-submit=true'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route exact path="/" render={() => <h1>Home</h1>}/>
                <Route exact path="/" render={() => <h1>Home2</h1>}/>*/}
                <Route path="/" exact component={Posts}/>
                <Route path="/new-post" exact component={NewPost}/>
            </div>
        );
    }
}

export default Blog;