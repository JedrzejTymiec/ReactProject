import React from 'react';
import axios from 'axios';

class Comment extends React.Component {

    deleteComment = () => {
        axios.delete('/comments/' + this.props.obj._id)
        .then(res => {
            console.log('Comment deleted!')
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        return(
            <div className="comment">
                <div>
                    <p>By: {this.props.obj.author}</p>
                    <h6>{this.props.obj.comment}</h6>
                </div>
                <div className="comment-icons">
                    <i onClick={() => this.props.edit(this.props.obj._id)} className="fa fa-pencil-square-o"></i>
                    <i onClick={this.deleteComment} className="fa fa-trash-o ml-2"></i>
                </div>
            </div>
        )
    }
}

export default Comment;