import React from "react";
import VerticalNavbar from "../componennts/vertical-navbar";
import HorizontalNavbar from "../componennts/horizontalnavbar";
import '../assest/FA 6.4.0 Pro/css/all.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCalendarWeek, faUser, faClock, faIdCardClip } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"; 
import '../style/leavecoivering.css';
import ProfileMenu from "../componennts/profileMenu";

function LeaveCoveringRequest(){

    const RequestLink = (
        <Link to="/" className="dashboard-link">
            <FontAwesomeIcon icon={faCalendarWeek}beat style={{color: "#0602f2",}}/>
        </Link>
    );
    const DashboardLink = (
        <FontAwesomeIcon icon={faHouse}  />
    );
    const ProfileLink = (
        <ProfileMenu profileIcon={<FontAwesomeIcon icon={faUser} />} />
    );
    const SheduelLink = (
        <Link to="/Sheduel" className="dashboard-link">
            <FontAwesomeIcon icon={faIdCardClip} />
        </Link>
    )


    return(
        <div className="body">
            <div className="nav-container">
                <VerticalNavbar homeicon={DashboardLink}
                                calandericon = {RequestLink}
                                profileicon = {ProfileLink} 
                                Sheduelicon = {SheduelLink} />
            </div>
            <div className="content-container">
                <HorizontalNavbar/>
                <div className="contentleave">
                    <p className="path">Home /LeaveCoveringRequest</p>
                    <h2 className="dashboardtext"> Leave Covering Request</h2>
                    <div className="panelleave">
                          <div className="leavereqbox">
                            <div className="headleavebox">
                                <div className="headleavebox-left">
                                    <p>Leave Covering Request</p>
                                </div>
                                <div className="headleavebox-right">
                                    <p>Filter 
                                    <select id="filter" >
                                        {//<option value="" disabled>Select...</option>
                                        }
                                        <option value="Mr">All</option>
                                        <option value="Ms"></option>
                                        <option value="Mrs"></option>
                                    </select></p>
                                </div>
                            </div>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeaveCoveringRequest;