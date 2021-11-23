import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";

const Nav = () => {

    const [topics, setTopics] = useState([])



    // NEED TO FIX BACKEND TOPIC QUERY BEFORE I CAN SET UP NAV TO ARTICLES BY TOPIC

    //const { topics } = useParams();


    useEffect(() => {
        getTopics().then((dataFromApi) => {
            return dataFromApi
        })
            .then((dataFromApi) => {
                setTopics(dataFromApi)
            })
    }, [])
 
    return <nav>
        <Link to="/account" key="account-link">Account</Link>
        <Link to="/" key="all-link">All</Link>
        {topics.map((item) => {
            return <Link to={item.slug} key={item.slug}>{item.slug}</Link>
        })}
    </nav>;
};

export default Nav;

