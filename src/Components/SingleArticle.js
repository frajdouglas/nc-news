import { UserContext } from "../contexts/user";
import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


const SingleArticle = () => {

    // const { articleid } = useParams();

    // useEffect(() => {
    //     getSingleArticle(articleid).then((dataFromApi) => {
    //         console.log("DETECTED Article CHANGE")
    //         setComments(dataFromApi)
    //     })
    // }, [articleid])

    return <div>
        Single Article

    </div>

};

export default SingleArticle;