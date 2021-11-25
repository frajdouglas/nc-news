import { useContext } from "react";
import { UserContext } from "../contexts/user";
import { addVote } from "../utils/api";
import { useParams } from "react-router-dom";
import { useState } from "react";


const ArticleVoteButton = ({ SingleArticle }) => {

    const { currentUser, permittedUsers } = useContext(UserContext);
    const [addedVotes, setAddedVotes] = useState(0);
    const { articleid } = useParams();
    const handleClick = () => {
        setAddedVotes((prevVotes) => {
            return prevVotes + 1
        })
        addVote(articleid)
            .catch((err) => {
                setAddedVotes((currCount) => currCount - 1);
            })
    }

    if (SingleArticle.author === currentUser || !permittedUsers.includes(currentUser)) {
        return <div>
            Votes: {SingleArticle.votes + addedVotes}
            <br />
            <br />
            <br />
        </div>
    } else {

        return <div>
            Votes: {SingleArticle.votes + addedVotes}
            <br />
            <br />
            <br />
            <button key="add-vote-button" onClick={handleClick}>Add to vote!</button>
        </div>
    };
}
export default ArticleVoteButton;
