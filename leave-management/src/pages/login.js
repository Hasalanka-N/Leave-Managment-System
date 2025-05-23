import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../style/login.css";
import logo from "../image/logo.png";

function LoginPage() {
    const [workEmail, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        
        const response = await fetch('http://localhost:8080/leave-management-user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ workEmail, password })
        });
        
        if (response.ok) {
            const data = await response.json();
            const { id, title, firstName, profilePhoto, lastName, workEmail, personalPhoneNumber, responsiblePerson, currentAddress, role,position,EPFNumber } = data;


            localStorage.setItem('user', JSON.stringify({ id, title, firstName, profilePhoto, lastName, workEmail, personalPhoneNumber, responsiblePerson, currentAddress, role,position,EPFNumber }));
            localStorage.setItem('isLoggedIn', 'true');
            
            if (position === 'admin') {
                navigate('/AdminDashboard', { state: { id, title, firstName, profilePhoto } });
            } else {
                navigate('/DashBoard', { state: { id, title, firstName, profilePhoto } });
            }
        } else {
            setError("Invalid email or password");
        }
    };

    return (
        <div className="login-container">
            <div className="triangle triangle-left"></div>
            <div className="triangle triangle-leftdown"></div>
            <div className="triangle triangle-right"></div>
            <div className="triangle triangle-rightup"></div>
            <div className="login-box">
                <div className="logo">
                    <img src={logo} alt="Logo" className="logo-image" />
                </div>
                <h2>Login</h2>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <input
                            type="workEmail"
                            placeholder="Work Email"
                            value={workEmail}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
                <a href="/" className="forgot-password">Forgot Password?</a>
            </div>
        </div>
    );
}

export default LoginPage;
