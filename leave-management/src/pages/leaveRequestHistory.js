import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import VerticalNavbar from "../componennts/vertical-navbar";
import '../assest/FA 6.4.0 Pro/css/all.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../style/leaveRequest.css';
import { faHouse, faUserCheck, faUser, faClipboardList, faIdCardClip,faUserPlus,faUsers,faUserTimes,faUserClock,faCalendarWeek } from '@fortawesome/free-solid-svg-icons'; 
import MyProfile from "../componennts/myprofile";
import Dp from "../image/OIP.jpeg";
import ProfileTabs from "../componennts/profileTabs";
import ProfileMenu from "../componennts/profileMenu";
import '../style/viewLeaveRequest.css';

function LeaveRequestHistory(){

    const [leaveRequests, setLeaveRequests] = useState([]);
    const empid = 10;

  useEffect(() => {
    axios.get(`http://localhost:8081/leave-management/allrequests/${empid}`) 
      .then(response => {
        setLeaveRequests(response.data); 
      })
      .catch(error => {
        console.error("There was an error fetching the leave requests!", error);
      });
  }, []);

        
  const ProfileLink = (
    <ProfileMenu profileIcon={<FontAwesomeIcon icon={faUser} beat style={{color: "#0602f2",}} />} />
);

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
/*const ProfileLink = (
    <Link to="/Profile" className="dashboard-link">
        <FontAwesomeIcon icon={faUser} beat style={{color: "#0602f2",}} />
    </Link>
    <FontAwesomeIcon icon={faUser} beat style={{color: "#0602f2",}} />
);*/
const SheduelLink = (
    <Link to="/Sheduel" className="dashboard-link">
        <FontAwesomeIcon icon={faIdCardClip} />
    </Link>
)

    return(
        <div className="requestViewMain">
            <div className="adminNavBar">
                <VerticalNavbar homeicon={DashboardLink}
                    calandericon = {RequestLink}
                    profileicon = {ProfileLink} 
                    Sheduelicon = {SheduelLink} />
            </div>
            <div className="viewRequestContant">
                <div className="adminHorizontalNavBar">
                <div className="adminTitle">
                            <h1>My Leave Requests</h1>
                        </div>
                </div>
                <div className="request-container">
    <div className="admin-request-view">
        <div className="request-header">
            <h3 className="header-title">Leave Requests</h3>
            <div className="requests-grid">
                {leaveRequests.length > 0 ? (
                <div className="grid-header">
                    <div>Leave ID</div>
                    <div>Employee ID</div>
                    <div>Leave Type</div>
                    <div>Start Date</div>
                    <div>End Date</div>
                    <div>Reason</div>
                    <div>Document</div> {/* New Document Column */}
                    <div>Status</div>
                </div>
                ) : (
                <p>No leave requests found.</p>
                )}

                {leaveRequests.map((request, index) => (
                <div key={index} className="request-row">
                    <div>{request.leave_id}</div>
                    <div>{request.emp_id}</div>
                    <div>{request.leave_type}</div>
                    <div>{request.from_date}</div>
                    <div>{request.to_date}</div>
                    <div>{request.reason}</div>
                    
                    {/* New Document Column */}
                    <div>
                        {request.document_path ? (
                            <a 
                            href={request.document_path} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="document-link"
                            >
                            View Document
                            </a>
                        ) : (
                            <span>No Document</span>
                        )}

                    </div>
                    <div>
                    <div className={`status-text ${
                                            request.status === "APPROVED"
                                                ? "approved"
                                                : request.status === "REJECTED"
                                                ? "rejected"
                                                : ""
                                        }`}>
                                            {request.status}
                                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
</div>

            </div>
        </div>
    );
}

export default LeaveRequestHistory;