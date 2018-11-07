import React, { Component } from 'react';
import './App.css';
import PostForm from './PostForm/PostForm';
import AllPost from './AllPost/AllPost';

class App extends Component {
  render() {
    return (
      <div className="App">
       <PostForm/>
       <AllPost/>
      </div>
    );
  }
}

export default App;
