import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
// doing dynamic import with latest react
// const Posts = React.lazy(() => import('./containers/Blog/Blog'));
// Suspense needs to be imported to use it in Route like this:
/*
    <Route path="/posts" render={() => {
        <Suspense fallback{<div>Loading..</div>}>
            <Posts/>
        </Suspense>
        )}
    />
* */
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
        //possible to specify a different route than domain here with server: <BrowserRouter basename="/my-app">
        <BrowserRouter>
          <div className="App">
            <Blog />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
