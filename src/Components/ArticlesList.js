import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticles } from "../utils/api";



const ArticlesList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [articles, setArticles] = useState([])
    const { topic } = useParams();

    const [orderByQuery, setOrderByQuery] = useState('');

    const handleClick = () => {
        console.log("Clicked!")
        setOrderByQuery('created_at')
        console.log(orderByQuery)
    }

    useEffect(() => {
        setIsLoading(true)
        getArticles(topic,orderByQuery).then((dataFromApi) => {
            setArticles(dataFromApi)
            setIsLoading(false)
        })
            .catch((err) => { console.log(err) })
    }, [topic, orderByQuery])
    
    if (isLoading) return <p>Loading...</p>
    return <div className="ArticlesPage">
        <button onClick={handleClick}>Sort by: Date created</button>
        <button onClick={handleClick}>Sort by: Comment Count</button>
        <button onClick={handleClick}>Sort by: Votes</button>
        <main className="ArticlesList">
        {articles.map((item) => {
            return <ul key={item.article_id} className="ArticleItem">
                <li className="ArticleTitle">{item.title}</li>
                <br />
                <li>Topic: {item.topic}</li>
                <br />
                <li>Author: {item.author}</li>
                <br />
                <li>Created at: {item.created_at}</li>
                <Link to={`/article/${item.article_id}`} key="single-article-link">
                    <button>GO TO ARTICLE</button>
                </Link>
            </ul>
        })}
    </main>
    </div>
};

export default ArticlesList;



// "queries": [
//     "author",
//     "topic",
//     "sort_by",
//     "order"


// "title": "Seafood substitutions are increasing",
// "topic": "cooking",
// "author": "weegembump",
// "body": "Text from the article..",
// "created_at": 1527695953341

// date created
// comment_count
// votes