import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import VerticalNavbar from "../componennts/vertical-navbar";
import '../assest/FA 6.4.0 Pro/css/all.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../style/leaveRequest.css';
import { faHouse, faUserCheck, faUser, faClipboardList, faIdCardClip,faUserPlus,faUsers,faUserTimes,faUserClock } from '@fortawesome/free-solid-svg-icons'; 

function LeaveRequestView(){

    const [leaveRequests, setLeaveRequests] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/leave-management/pendingrequests') 
      .then(response => {
        setLeaveRequests(response.data); 
      })
      .catch(error => {
        console.error("There was an error fetching the leave requests!", error);
      });
  }, []);

  const handleApprove = (leaveId, empId, leaveType) => {
    axios.put(`http://localhost:8081/leave-management/approve/${leaveId}`) 
      .then(response => {
        alert(`Leave Request ${leaveId} Approved!`);
        refreshLeaveRequests(); 

        axios.put(`http://localhost:8081/leave-management/leavebalance`, null, {
          params: {
            empId: empId,
            leave_type: leaveType
          }
        })
          .then(response => {
            alert(`Leave balance updated for Employee ${empId}`);
            refreshLeaveRequests();
          })
          .catch(error => {
            console.error("Error updating leave balance", error);
          });
          
      })
      .catch(error => {
        console.error("Error approving leave request", error);
      });
  };
  
  const handleReject = (leaveId) => {
    axios.put(`http://localhost:8081/leave-management/reject/${leaveId}`)
      .then(response => {
        alert(`Leave Request ${leaveId} Rejected!`);
        refreshLeaveRequests(); 
      })
      .catch(error => {
        console.error("Error rejecting leave request", error);
      });
  };

  const refreshLeaveRequests = () => {
    axios.get('http://localhost:8081/leave-management/pendingrequests')
      .then(response => {
        setLeaveRequests(response.data);
      })
      .catch(error => {
        console.error("Error refreshing leave requests", error);
      });
  };

    const RequestLink = (
        <Link to="/AddEmployee" className="dashboard-link">
            <FontAwesomeIcon icon={faUserPlus} />
        </Link>
    );
    const DashboardLink = (
        <FontAwesomeIcon icon={faHouse} beat style={{color: "#0602f2",}} />
    );
    const ProfileLink = (
        /*<Link  className="profile-link">
        <FontAwesomeIcon icon={faUser} />
        </Link>*/
        <FontAwesomeIcon icon={faClipboardList} />
    );
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
                            <h1>Admin DashBoard</h1>
                        </div>
                </div>
                <div className="view-request-content-container">
                        <div className="request-view-admin-content2">
                        <div className="request-view-admin">
                            <h3 className="leaveh3">Leave Requests</h3>
                            <div className="leave-requests-grid">
                                {leaveRequests.length > 0 ? (
                                <div className="leave-requests-grid-header">
                                    <div>Leave ID</div>
                                    <div>Employee ID</div>
                                    <div>Leave Type</div>
                                    <div>Start Date</div>
                                    <div>End Date</div>
                                    <div>Reason</div>
                                    <div>Document</div> {/* New Document Column */}
                                    <div>Actions</div>
                                </div>
                                ) : (
                                <p>No leave requests found.</p>
                                )}

                                {leaveRequests.map((request, index) => (
                                <div key={index} className="leave-request-row">
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

                                    <div className="buttons">
                                    <button className="approve-btn" onClick={() => handleApprove(request.leave_id, request.emp_id, request.leave_type)}>
                                        Approve
                                    </button>
                                    <button className="reject-btn" onClick={() => handleReject(request.leave_id)}>
                                        Reject
                                    </button>
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

export default LeaveRequestView;