import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../utils/api";
import CommentAdder from "./CommentAdder"
import CommentDeleter from "./CommentDeleter"
import { useContext } from "react";
import { UserContext } from "../contexts/user";

const SingleArticleComments = () => {

    const { currentUser, permittedUsers } = useContext(UserContext);

    const [isLoading, setIsLoading] = useState(true);

    const [comments, setComments] = useState(
        [{
            username: 'fra',
            body: 'nasty vitriol'
        }])
    const { articleid } = useParams();

    useEffect(() => {
        setIsLoading(true)
        getComments(articleid).then((dataFromApi) => {
            setComments(dataFromApi)
            setIsLoading(false)
        })
    }, [articleid])

    if (isLoading) return <p>Loading...</p>
    if((permittedUsers.includes(currentUser))){
    return <div className="Comments">
        {comments.map((item) => {
            return <ul key={item.comment_id} className="CommentsItem">
                <li>Comment_id: {item.comment_id}</li>
                <li>Author: {item.author}</li>
                <br />
                <br />
                <br />
                <li>Body: {item.body}</li>
                <br />
                <br />
                <br />
                <li>Votes: {item.votes}</li>
                <br />
                <br />
                <br />
                <CommentDeleter comment_id={item.comment_id} author={item.author} />
            </ul>
        })}
        <CommentAdder setComments={setComments} />
    </div>
    } else {
        return <div className="Comments">
        {comments.map((item) => {
            return <ul key={item.comment_id} className="CommentsItem">
                <li>Comment_id: {item.comment_id}</li>
                <li>Author: {item.author}</li>
                <br />
                <br />
                <br />
                <li>Body: {item.body}</li>
                <br />
                <br />
                <br />
                <li>Votes: {item.votes}</li>
                <br />
                <br />
                <br />
            </ul>
        })}
    </div>
    }


};

export default SingleArticleComments;
