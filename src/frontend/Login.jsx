import React, { useState } from "react"
import "./style.css"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        // Basic validation
        if (!email || !password) {
            setMessage("Please fill in all fields")
            return
        }
        
        // Here you would typically send the data to your backend
        setMessage("Login successful!")
    }

    return (
        <div className="login-container">
            <h1>To Do Application</h1>
            <img src="./assets/todo.png" alt="" />
            <h2 className="login-header">Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <input
                    className="login-input"
                    type="email"
                    placeholder="Email/Username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="login-input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="login-button" type="submit">Login</button>
                <button className="signup-button" type="submit">Sign Up</button>
                <button className="google-button" type="submit">Login with Google</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    )
}
