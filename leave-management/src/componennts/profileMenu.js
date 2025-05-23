// ProfileMenu.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../style/vertical-navbar.css';

function ProfileMenu({ profileIcon, userID }) {
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
                    <Link to={`/Profile/view`} onClick={handleCloseMenu}>
                        <button>My Info View</button>
                    </Link>
                    <Link to="/Profile/MyLeaveRequest" onClick={handleCloseMenu}>
                        <button>My Leave Request</button>
                    </Link>
                    <Link to="/Profile/view" onClick={handleCloseMenu}>
                        <button>My Attendens</button>
                    </Link>
                    <Link to="/Profile/leaveRequestHistory" onClick={handleCloseMenu}>
                        <button>My Leaves</button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default ProfileMenu;
