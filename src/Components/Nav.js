import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from "react";
import { getTopics } from "../utils/api";
import { UserContext } from "../contexts/user";

const Nav = () => {
    
    const { currentUser } = useContext(UserContext);

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
        <br/>
        <br/>
        <br/>
        <p key="CurrentUsername" className='CurrentUsername'>Logged in as: {currentUser}</p>
    </nav>;
};

export default Nav;

