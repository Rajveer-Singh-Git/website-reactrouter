import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

export default function Github() {
    const data = useLoaderData()
    //const [data, setData] = useState(0)
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/Rajveer-Singh-Git`)
    //     .then(res => res.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // }, [])
    return (
       <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">GitHub ID : {data.login}
       <div className="text-2xl p-4 mt-3">Repos : {data.public_repos}</div>
       </div>
    )
}

export const githubInfoLoader = async () => {
    const res = await fetch(`https://api.github.com/users/Rajveer-Singh-Git`)
    return res.json()
}
