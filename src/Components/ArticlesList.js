import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticles } from "../utils/api";



const ArticlesList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [articles, setArticles] = useState([])
    const [isError, setIsError] = useState(false)
    const { topic } = useParams();

    const [orderByQuery, setOrderByQuery] = useState('');

    useEffect(() => {
        setIsError(false)
        setIsLoading(true)
        getArticles(topic,orderByQuery).then((dataFromApi) => {
            setArticles(dataFromApi)
            setIsLoading(false)
            if (dataFromApi.length === 0){
                setIsError(true)
            }
        })
            .catch((err) => { console.log(err) })
    }, [topic, orderByQuery])
    
    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>No articles exist for this topic</p>
    return <div className="ArticlesPage">
        <select
          className="sort-by"
          defaultValue={orderByQuery}
          onChange={(e) => {
            setOrderByQuery(e.target.value);
          }}
        >
          <option key="sort_by" value="">
          sort_by
          </option>
          <option key="created_at" value="created_at">created_at</option>
          <option key="votes" value="votes">votes</option>
        </select>

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
                <br />
                <li>Votes: {item.votes}</li>
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