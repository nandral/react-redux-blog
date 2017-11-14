import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchPost,deletePost} from '../actions'

class PostsShow extends Component{
  componentDidMount(){
    const {id} = this.props.match.params;
    this.props.fetchPost(id);
  }
  onDeleteClick(){
    const {id} = this.props.match.params;
    this.props.deletePost(id,()=>{
      this.props.history.push('/');
    });
  }
  render(){
    const {post} = this.props
    if(!post)
      return (<div><br/>Loading ...</div>)

    return (
      <div>
          <br/>
          <Link to="/">Back to Home Page</Link>
          <button className="btn btn-danger pull-xs-right"
            onClick={this.onDeleteClick.bind(this)}>
            Delete Post
          </button>
          <br/>
          <br/>
          <h3>{post.title}</h3>
          <h6>{post.categories}</h6>
          <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({posts},ownProps){
  return {
    post:posts[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps,{fetchPost,deletePost})(PostsShow);
