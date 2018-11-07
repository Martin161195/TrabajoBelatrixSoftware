import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Post from '../Post/Post';
import EditComponent from '../EditComponent/EditComponent';

class AllPost extends Component {
    render() {

        var {posts} = this.props;

        return (
            <div>
                <h1 className="post_heading">Users</h1>
                    {this.props.posts.map((post) => (
                        <div key={post.id}>
                        {post.editing ? <EditComponent post={post} key={post.id} /> : <Post post={post}
                         key={post.id} />}
                </div>
                ))}
            </div> 
        );
    }
}

AllPost.propTypes = {
    posts: PropTypes.any
};

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

export default connect(mapStateToProps)(AllPost);