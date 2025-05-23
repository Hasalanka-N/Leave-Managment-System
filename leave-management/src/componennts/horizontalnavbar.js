import React, { useState } from "react";
import "../style/horizontalnavbar.css";
import NotificationBox from "./NotificationBox";

function HorizontalNavbar({firstName,lastName, profilePhoto}) {

  const [showNotifications, setShowNotifications] = useState(false);

    const toggleNotifications = () => {
        setShowNotifications(prev => !prev);
    };

    return(
        <div className="main">
            <div className="navleft">
            <div className="search-container">
                <input type="text" placeholder="Search..." className="search-input" />
                <button className="search-btn">
                    <i className="fas fa-search"></i>
                </button>
                </div>
            </div>

            <div className="navright">
            <button 
              onClick={toggleNotifications}
              style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer' ,marginBottom:'70px',marginRight:'20px'}}>
              <i className="fas fa-bell fa-2x" style={{margin: '0', padding:'0'}}></i>
              <span style={{
                position: 'absolute',
                top: '-2px',
                right: '-10px',
                background: 'red',
                color: 'white',
                borderRadius: '50%',
                padding: '2px 4px',
                fontSize: '10px'
              }}>
          3
        </span>
      </button>
      <button style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer', marginRight: '-50' ,marginBottom:'70px',marginRight:'30px' }}>
        <i className="fas fa-envelope fa-2x"></i>
        {/* <span style={{
          position: 'absolute',
          top: '-2px',
          right: '-10px',
          background: 'red',
          color: 'white',
          borderRadius: '50%',
          padding: '2px 4px',
          fontSize: '10px'
        }}>
          5
        </span> */}
      </button>

      {showNotifications && <NotificationBox />}
                <div>
                    <img 
                        src={profilePhoto} 
                        alt="Profile" 
                        style={{ width: '42px', height: '42px', borderRadius:'50%', marginBottom:'70px',marginRight:'20px', border:"3px solid blue" }} // Adjust the size as needed
                    />
                </div>
                <div className="emp-dt">
                    <p className="ename">{firstName} {lastName}</p>
                    <p className="jobroll">Product Manager</p>
                </div>
                
            </div>
        </div>
    );
}

export default HorizontalNavbar;