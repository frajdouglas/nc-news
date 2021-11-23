import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getComments } from "../utils/api";
import CommentAdder from "./CommentAdder"
import CommentDeleter from "./CommentDeleter"

const SingleArticleComments = () => {
    
    const [comments, setComments] = useState(
        [{
        article_id: 999,
        author: "fra",
        body: "",
        comment_id: 0,
        created_at: "",
        votes: 0
    }])
const { articleid } = useParams();

useEffect(() => {
    getComments(articleid).then((dataFromApi) => {
        setComments(dataFromApi)
    })
}, [articleid])

return <div className="Comments">
    {comments.map((item) => {
        return <ul key={item.comment_id} className="CommentsItem">
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
            <CommentDeleter comment_id={item.comment_id}/>
        </ul>
    })}
    <CommentAdder setComments={setComments} />
    
</div>

};

export default SingleArticleComments;
