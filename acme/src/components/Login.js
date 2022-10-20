import { useState } from "react"

export const Login = ({setToken}) => {

    const [data, setData] = useState({username: undefined, password: undefined})

    const handleLogin = () => {

        fetch("http://localhost:3001/login", {method: "POST", headers:{"Content-Type": "application/json"},
         body: JSON.stringify({username: data.username, password: data.password})})
         .then((response) => response.json())
         .then((content) => setToken(content.token))
    }


    const handlePassword = (event) => {

        setData({...data, password: event.target.value})

    }

    const handleUsername = (event) => {

        setData({...data, username: event.target.value})


    }



    return ( 
        <>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Jan123" onChange={handleUsername}></input>

        <label htmlFor="password">Password</label>
        <input type="password" onChange={handlePassword}></input>

        <button onClick={handleLogin}>Log in</button>

        </>
     );
}
 

