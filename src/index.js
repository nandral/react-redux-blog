import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import reducers from './reducers';
import ReduxPromise from 'redux-promise';
import PostsIndex from './components/posts-index';
import PostsNew from './components/posts-new'
import PostsShow from './components/posts-show'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/posts/new' component={PostsNew} />
            <Route path='/posts/:id' component={PostsShow} />
            <Route path="/" component={PostsIndex}/>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
    , document.querySelector('.container')
);

