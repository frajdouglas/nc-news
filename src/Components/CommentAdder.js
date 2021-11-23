import { useState } from "react";

const CommentAdder = ({ setComments }) => {

    const [currentComment, setCurrentComment] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setComments((existingComments) => {
            const newCommentEntry = {
                article_id: "GET THIS FROM PARAMS",
                author: "NEED TO UPDATE THIS TO SIGNED IN USER",
                body: currentComment,
                comment_id: "NEED A WAY TO CALCULATE THIS FROM EXISTING DATA",
                created_at: "ADD CURRENT TIMESTAMP",
                votes: 0
            }
            return [...existingComments, newCommentEntry]
        });
        setCurrentComment('');
    };


    return <form onSubmit={handleSubmit} className="CommentAdder">
        <fieldset>
            <legend> Add new comment HERE
            </legend>
            <label htmlFor='comments'> Add Comment
            </label>
            <input
                type='text'
                name='newComment'
                id='newComment'
                value={currentComment}
                onChange={(e) => {
                    setCurrentComment(e.target.value)
                }}
                required />
        </fieldset>
        <button type='submit'>Submit</button>
    </form>
};

export default CommentAdder;
