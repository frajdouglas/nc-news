import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";

const Nav = () => {

    const [topics, setTopics] = useState([])

    useEffect(() => {
        getTopics().then((dataFromApi) => {
            return dataFromApi
        })
            .then((dataFromApi) => {
                setTopics(dataFromApi)
            })
    }, [])

    return <nav className="Nav">
        <Link className="Nav-Link" to="/account" key="account-link">Account</Link>
        <Link className="Nav-Link" to="/" key="all-link">All</Link>
        {topics.map((item) => {
            return <Link className="Nav-Link" to={item.slug} key={item.slug}>
                {item.slug}</Link>
        })}
    </nav>;
};

export default Nav;

