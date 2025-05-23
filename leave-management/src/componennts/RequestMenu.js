// ProfileMenu.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../style/vertical-navbar.css';

function RequestMenu({ profileIcon }) {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleProfileClick = () => {
        setMenuOpen(prev => !prev);
    };

    const handleCloseMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="profile-menu-container">
            <div className="profile-icon" onClick={handleProfileClick}>
                {profileIcon}
            </div>
            {isMenuOpen && (
                <div className="dropdown-menu">
                    <Link to="/LeaveRequests" onClick={handleCloseMenu}>
                        <button>Leave Requests</button>
                    </Link>
                    <Link to="/Profile/edit" onClick={handleCloseMenu}>
                        <button>Leave Covering Requests</button>
                    </Link>
                    
                </div>
            )}
        </div>
    );
}

export default RequestMenu;
