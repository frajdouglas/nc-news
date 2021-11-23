import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticles } from "../utils/api";


const ArticlesList = () => {

    const [articles, setArticles] = useState([])
    const { topic } = useParams();
    console.log(topic,"TOPIC FROM PARAMS")

    useEffect(() => {
        getArticles(topic).then((dataFromApi) => {
            console.log("DETECTED TOPIC CHANGE")
            setArticles(dataFromApi)
        })
    }, [topic])

    return <main>
        {articles.map((item) => {
            return <ul key={item.article_id}>
                <li>{item.title}</li>
                <li>{item.topic}</li>
                <li>{item.author}</li>
                <li>{item.body}</li>
                
            </ul>
            
        })}
    </main>;




};

export default ArticlesList;
