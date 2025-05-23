import React from "react";
import { Link } from 'react-router-dom'; 
import '../style/profile.css';
import VerticalNavbar from "../componennts/vertical-navbar";
import '../assest/FA 6.4.0 Pro/css/all.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCalendarWeek, faUser,faIdCardClip } from '@fortawesome/free-solid-svg-icons'; 
import MyProfile from "../componennts/myprofile";
import Dp from "../image/OIP.jpeg";
import LeaveRequestTabs from "../componennts/leaveRequestTabs";
import ProfileMenu from "../componennts/profileMenu";

function MyLeaveRequest(){

  /*  const ProfileLink = (
        <ProfileMenu profileIcon={<FontAwesomeIcon icon={faUser} />} />
    );*/

    const DashboardLink = (
        <Link to="/Dashboard" className="dashboard-lin">
            <FontAwesomeIcon icon={faHouse} />
        </Link>
    );
    const RequestLink = (
        <Link to="/LeaveCoveringRequest" className="dashboard-link">
            <FontAwesomeIcon icon={faCalendarWeek}/>
        </Link>
    );
    const ProfileLink = (
        <ProfileMenu profileIcon={<FontAwesomeIcon icon={faUser} beat style={{color: "#0602f2",}} />} />
    );

    const SheduelLink = (
        <Link to="/Sheduel" className="dashboard-link">
            <FontAwesomeIcon icon={faIdCardClip} />
        </Link>
    )

    return (
        <div className="body">
            <div className="nav-container">
                <VerticalNavbar 
                    homeicon={DashboardLink}
                    calandericon={RequestLink }
                    profileicon={ProfileLink}
                    Sheduelicon={SheduelLink}
                />
            </div>
            <div className="content-container">
                <div className="top-container">
                    <p className="path">Home / Profile / Leave Request </p>
                    <h2 className="topic">Leave Request</h2>
                </div>
                <div className="down-container">
                    <div className="profile-container">
                        <MyProfile/>
                    </div>
                    <div className="main-container">
                       <LeaveRequestTabs></LeaveRequestTabs>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyLeaveRequest;