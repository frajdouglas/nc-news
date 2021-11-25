import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/user";
import { addComment } from "../utils/api";

const CommentAdder = () => {
    
    const { currentUser } = useContext(UserContext);

    const { articleid } = useParams();

    const [commentToPost, setCommentToPost] = useState({
        username: currentUser,
        body: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        addComment(articleid,commentToPost)
        .then(() => {
            window.location.reload()
        })
    };


    return <form onSubmit={handleSubmit} className="CommentAdder">
        <fieldset>
            <legend> Add new comment here!
            </legend>
            <label htmlFor='comments'> Add Comment:  
            </label>
            <input
                type='text'
                name='newComment'
                id='newComment'
                value={commentToPost.body}
                onChange={(e) => {
                    let newCommentToPost = {
                        username: currentUser,
                        body: e.target.value
                    }
                    setCommentToPost(newCommentToPost)
                }}
                required />
        </fieldset>
        <button type='submit'>Submit</button>
    </form>
};

export default CommentAdder;
