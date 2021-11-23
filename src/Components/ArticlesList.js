import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticles } from "../utils/api";


const ArticlesList = () => {

    const [articles, setArticles] = useState([])
    const { topic } = useParams();

    useEffect(() => {
        getArticles(topic).then((dataFromApi) => {
            setArticles(dataFromApi)
        })
    }, [topic])

    return <main className="ArticlesList">
        {articles.map((item) => {
            return <ul key={item.article_id} className="ArticleItem">
                <li className="ArticleTitle">{item.title}</li>
                <br/>
                <li>Topic: {item.topic}</li>
                <br/>
                <li>Author: {item.author}</li>
                <br/>
                <Link to={`/article/${item.article_id}`} key="single-article-link">
                    <button>GO TO ARTICLE</button>
                    </Link>
            </ul>
        })}
    </main>;




};

export default ArticlesList;
