import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
    const {userid} = useParams()
    return(
        <div className="text-center text-3xl bg-gray-400">User:{userid}</div>
    )
}