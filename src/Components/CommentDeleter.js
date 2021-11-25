import { useState, useContext } from "react";
import { deleteComment } from "../utils/api";
import { UserContext } from "../contexts/user";

const CommentDeleter = ({ comment_id, author, setCommentsChange }) => {

    const [isError, setIsError] = useState(false)

    const { currentUser } = useContext(UserContext);
    const handleClick = () => {
        deleteComment(comment_id).then(() => {
            setIsError(false)
            setCommentsChange((prevValue) => {
                return prevValue + 1
            })
        })
        .catch((err) => {
            setIsError(err)
        })

    }

    if (author === currentUser) {
        return <div>
            <button onClick={handleClick} className="CommentDeleter">DELETE</button>
            {isError ? <p>Sorry, there has been an error</p> : null}
        </div>
    }
    return <p key="blank-delete-return"></p>
};

export default CommentDeleter;
