import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = (children) => {//here children is just like the outlet(jo bhi props aare hai.. wo)
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider