import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom"; 
export default function Github() {//component

//------------------NOTES-------------------

// useLoaderData is a hook provided by React Router.
// It is specifically designed to retrieve data that has been loaded by a route's loader function before the component renders. This hook ensures data is available during the initial render,

//-----------------------------------------------



    const data = useLoaderData() //returns the data from the closest rout loader , route ne method call kiya githubInfoLoader to fir api response return hua or wo Github.jsx component file me aagya to ab hum isko useLoader se Component me le aayge (stored in data) then we can acces the json ex- data.name, data.login

    //const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/itsDeepanshu-k') //github api
    //     .then(response=>response.json())
    //     .then(data=>{
    //          console.log(data)
    //          setData(data)
    //     })
    // }, [])

    return( 
        <div 
        className="text-center text-4xl m-4 bg-gray-500 p-3">
            Github:{data.login} , Followers: {data.followers} 
        </div>
    )
}

//best practice handle all efficient condition so that server cant crash , ex- handle if wrong api
export const githubInfoLoader = async () => { //this is method
    const response = await fetch('https://api.github.com/users/itsDeepanshu-k') //github api
    return response.json()   //returning the json response
}