import { useContext } from "react";
import { deleteComment } from "../utils/api";
import { UserContext } from "../contexts/user";

const CommentDeleter = ({ comment_id, author }) => {
    
    const { currentUser } = useContext(UserContext);
    const handleClick = () => {
        deleteComment(comment_id).then(() => {
            window.location.reload()
        })

    }

    if(author === currentUser){
        return <button onClick={handleClick} className="CommentDeleter">DELETE</button>
    }
    return <p key="blank-delete-return"></p>
};

export default CommentDeleter;
