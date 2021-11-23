import { UserContext } from "../contexts/user";
import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


const SingleArticleComments = () => {

    // const { articleid } = useParams();

    // useEffect(() => {
    //     getComments(articleid).then((dataFromApi) => {
    //         console.log("DETECTED Article CHANGE")
    //         setComments(dataFromApi)
    //     })
    // }, [articleid])

    return <div>
        {/* COMMENTS for this article: {articleid} */}
comments
    </div>

};

export default SingleArticleComments;
