import { UserContext } from "../contexts/user";
import { useContext } from "react";

const Account = () => {

    const { setCurrentUser } = useContext(UserContext);
    const AvailableUsers = ['tickle122','grumpy19','happyamy2016','cooljmessy','weegembump','jessjelly','INVALID USER - FOR TESTING'];


    return <div className="Account">
        {AvailableUsers.map((item)=> {
            return <button
            onClick={() => {
                setCurrentUser(item);
            }}
            className="SignInButton">
                Sign in as {item}</button>
        })}

    </div>

};

export default Account;
