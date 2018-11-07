import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import './Post.css';

class Post extends Component {
    handleDelete= (e) =>{
        this.props.dispatch({
            type: 'DELETE_POST',
            id: this.props.post.id
        })
    }

    handleEdit= (e) =>{
        console.log("hola");
        this.props.dispatch({
            type: 'EDIT_POST',
            id: this.props.post.id
        })
        console.log("chau");

    }

    render() {
        var {post}= this.props;
        return (
            <div className="card">
                <div className="Presentation">
                    <span>Lastname:</span><h3>{post.LastName}</h3>
                    
                    <h1>{post.firstName}</h1>
                    <span>Country:</span>
                    <h3> {post.CountrySelect}</h3>  
                <button className="button1" onClick={() =>this.handleEdit()}>Edit</button>
                <button className="button2" onClick={()=> this.handleDelete()}>Delete</button>
                </div>  
            </div>
        );
    }
}

Post.propTypes = {
    post: PropTypes.any
};

export default connect()(Post);