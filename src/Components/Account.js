import { UserContext } from "../contexts/user";
import { useContext, useEffect, useState } from "react";

const Account = () => {

    const { currentUser, setCurrentUser } = useContext(UserContext);

    return <div>
        <h1 key="CurrentUsername">Current Account User: {currentUser}</h1>;
        <button
            onClick={() => {
                setCurrentUser('Barry');
            }}>
                Sign in as Barry</button>
                <button
            onClick={() => {
                setCurrentUser('Lily');
            }}>
                Sign in as Lily</button>

    </div>

};

export default Account;
