import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getSingleArticle } from "../utils/api";
import { addVote } from "../utils/api";

const SingleArticle = () => {

    const [SingleArticle, setSingleArticle] = useState('');

    const [addedVote, setAddedVotes] = useState(0);

    const { articleid } = useParams();

    useEffect(() => {
        getSingleArticle(articleid).then((dataFromApi) => {
            setSingleArticle(dataFromApi)
        })
    }, [articleid])

    const handleClick = () => {
        setAddedVotes((prevVotes) => {
            prevVotes += 1;
            addVote(articleid);
        })
    }



    return <div className="SingleArticle">
        Title: {SingleArticle.title}
        <br/>
        <br/>
        <br/>
        Author: {SingleArticle.author}
        <br/>
        <br/>
        <br/>
        Content: {SingleArticle.body}
        <br/>
        <br/>
        <br/>
        Comment Count: {SingleArticle.comment_count}
        <br/>
        <br/>
        <br/>
        Votes: {SingleArticle.votes}
        <br/>
        <br/>
        <br/>
        <Link to={`/article/${articleid}/comments`} key="comments-link">
        <button>GO TO COMMENTS</button>
        </Link>
        <button key="add-vote-button" onClick={handleClick}>Add to vote!</button>
    </div>

};

export default SingleArticle;