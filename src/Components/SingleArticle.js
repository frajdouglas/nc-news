import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getSingleArticle } from "../utils/api";
import ArticleVoteButton from "./ArticleVoteButton.js"

const SingleArticle = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [SingleArticle, setSingleArticle] = useState('');
    const [isError, setIsError] = useState(false)
    const { articleid } = useParams();

    useEffect(() => {
        setIsError(false)
        setIsLoading(true)
        getSingleArticle(articleid).then((dataFromApi) => {
            setSingleArticle(dataFromApi)
            setIsLoading(false)
        })
            .catch(() => { setIsError(true) })
    }, [articleid])

    if (isError) return <p>No articles exist for this id</p>
    if (isLoading) return <p>Loading...</p>
    
        return <section id="SingleArticle" className="mainDisplay">
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
            <ArticleVoteButton SingleArticle={SingleArticle}/>
            <Link to={`/article/${articleid}/comments`} key="comments-link">
                <button>GO TO COMMENTS</button>
            </Link>
            </section>
}

export default SingleArticle;