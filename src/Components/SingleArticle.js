import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getSingleArticle } from "../utils/api";
import { addVote } from "../utils/api";
import { useContext } from "react";
import { UserContext } from "../contexts/user";

const SingleArticle = () => {

    const { currentUser } = useContext(UserContext);

    const [isLoading, setIsLoading] = useState(true);

    const [SingleArticle, setSingleArticle] = useState('');

    const [addedVotes, setAddedVotes] = useState(0);

    const { articleid } = useParams();

    useEffect(() => {
        setIsLoading(true)
        getSingleArticle(articleid).then((dataFromApi) => {
            setSingleArticle(dataFromApi)
            setIsLoading(false)
        })
            .catch((err) => { console.log(err) })
    }, [articleid])

    const handleClick = () => {
        setAddedVotes((prevVotes) => {
            return prevVotes + 1
        })
        addVote(articleid)
            .catch((err) => {
                setAddedVotes((currCount) => currCount - 1);
                console.log(err);
            })
    }

    if (isLoading) return <p>Loading...</p>
    if (SingleArticle.author !== currentUser) {
        return <div className="SingleArticle">
            Title: {SingleArticle.title}
            <br />
            <br />
            <br />
            Author: {SingleArticle.author}
            <br />
            <br />
            <br />
            Content: {SingleArticle.body}
            <br />
            <br />
            <br />
            Comment Count: {SingleArticle.comment_count}
            <br />
            <br />
            <br />
            Votes: {SingleArticle.votes + addedVotes}
            <br />
            <br />
            <br />
            <Link to={`/article/${articleid}/comments`} key="comments-link">
                <button>GO TO COMMENTS</button>
            </Link>
            <button key="add-vote-button" onClick={handleClick}>Add to vote!</button>
        </div>
    } else {
        return <div className="SingleArticle">
            Title: {SingleArticle.title}
            <br />
            <br />
            <br />
            Author: {SingleArticle.author}
            <br />
            <br />
            <br />
            Content: {SingleArticle.body}
            <br />
            <br />
            <br />
            Comment Count: {SingleArticle.comment_count}
            <br />
            <br />
            <br />
            Votes: {SingleArticle.votes + addedVotes}
            <br />
            <br />
            <br />
            <Link to={`/article/${articleid}/comments`} key="comments-link">
                <button>GO TO COMMENTS</button>
            </Link>
        </div>

    }   


};

export default SingleArticle;