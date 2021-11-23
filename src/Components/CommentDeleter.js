import { useState } from "react";
import { deleteComment } from "../utils/api";

const CommentDeleter = ({ comment_id }) => {

    const [commentToDelete, setDeleteComment] = useState('')

    const handleClick = () => {
        deleteComment(comment_id).then(() => {
            console.log("DELETE SUCCESSFUL")
            setDeleteComment('')
        })

    }

    return <button onClick={handleClick} className="CommentDeleter">DELETE</button>

};

export default CommentDeleter;
