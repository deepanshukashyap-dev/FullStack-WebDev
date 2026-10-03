import React, { useActionState } from "react";
import { useState,useContext } from "react"
import UserContext from "../context/UserContext";

//data send practice
function Login(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {//method
        e.preventDefault()
        setUser({username, password})
    }
    return(
        <div>
            <h1>login page</h1>

            <input type="text"
            value={username} //binded to username state
            onChange={(e)=>setUsername(e.target.value)}// whenever change hoga.. ye method call hoga
            placeholder="username" />

            <input type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="password" />
            <button
                onClick={handleSubmit}
            >
                Submit
            </button>

        </div>
    )
}

export default Login