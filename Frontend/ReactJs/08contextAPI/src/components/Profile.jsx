import React, {useContext} from "react";
import UserContext from "../context/UserContext";
//data receive practice
function Profile(){
    const {user} = UseContext(UserContext)
    return(
        <div>
            <h1>Profile page</h1>
        </div>
    )
}

export default Profile