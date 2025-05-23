/*import React, { useState } from "react";
import { Link } from 'react-router-dom'; 
import "../style/vertical-navbar.css";
import logo from "../image/logo.png";
import '../assest/FA 6.4.0 Pro/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'; 


function VerticalNavbar(props){

    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleProfileClick = () => {
        setMenuOpen(prev => !prev);
    };

    const handleCloseMenu = () => {
        setMenuOpen(false);
    };
    

    return(
        <div className="vertical-navbar" >
            <ul>
            <div className="navbarup">
                <div className="logo">
                    <img src={logo} alt="Logo" className="logo-image" />
                </div>
                <hr></hr>
                    <li>
                    <Link to="/Dashboard" className="profile-link">
                        {props.homeicon}
                        </Link>
                    </li>
                <li>
                        {props.calandericon}  
                </li>
                <li>
                <div className="profile-icon" onClick={handleProfileClick}>
                            {props.profileicon}
                        </div>
                        {isMenuOpen && (
                            <div className="dropdown-menu">
                                <Link to="/Profile/view" onClick={handleCloseMenu}>
                                    <button>My Info View</button>
                                </Link>
                                <Link to="/Profile/edit" onClick={handleCloseMenu}>
                                    <button>My Info Request</button>
                                </Link>
                                <Link to="/Profile/MyLeaveRequest" onClick={handleCloseMenu}>
                                    <button>My Leave Request</button>
                                </Link>
                                <Link to="/Profile/view" onClick={handleCloseMenu}>
                                    <button>My Attendens</button>
                                </Link>
                                <Link to="/Profile/view" onClick={handleCloseMenu}>
                                    <button>My Leaves</button>
                                </Link>
                            </div>
                        )}
                </li>
                <li>
                    {props.Sheduelicon}
                </li>
                </div>
                <li className="logout">
                    <Link to="/" className="logout-link">
                        <FontAwesomeIcon icon={faRightFromBracket} />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default VerticalNavbar;*/

import React from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
import "../style/vertical-navbar.css";
import logo from "../image/logo.png";
import '../assest/FA 6.4.0 Pro/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'; 
import ProfileMenu from './profileMenu'; // Import the new component

function VerticalNavbar(props) {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('isLoggedIn');
        navigate('/');
    };

    return (
        <div className="vertical-navbar">
            <ul>
                <div className="navbarup">
                    <div className="logo">
                        <img src={logo} alt="Logo" className="logo-image" />
                    </div>
                    <hr />
                    <li>
                        <Link to="/Dashboard" className="profile-link">
                            {props.homeicon}
                        </Link>
                    </li>
                    <li>
                        {props.calandericon}
                    </li>
                    <li>
                      {/*<ProfileMenu profileIcon={props.profileicon} /> {/* Use ProfileMenu */}
                      {props.profileicon}
                    </li>
                    <li>
                        {props.Sheduelicon}
                    </li>
                </div>
                <li className="logout">
                    <button onClick={handleLogout} className="logout-link">
                        <FontAwesomeIcon icon={faRightFromBracket} size="lg" />
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default VerticalNavbar;
