import React, { useState }from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../style/dashboard.css"
import VerticalNavbar from "../componennts/vertical-navbar";
import HorizontalNavbar from "../componennts/horizontalnavbar";
import '../assest/FA 6.4.0 Pro/css/all.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUserCheck, faUser,faTasks, faClipboardList, faIdCardClip,faUserPlus,faUsers,faUserTimes,faUserClock } from '@fortawesome/free-solid-svg-icons'; 
import GaugeLeaveCard from "../componennts/gagugeLeaveCard";
import LeaveStatCard from '../componennts/leaveStatCard'; 
import { height, width } from "@fortawesome/free-solid-svg-icons/fa0";
import TimeClockFormProps from '../componennts/clock';
import EmpStatusCard from "../componennts/empStatusCard";
import WorkHoursBarChart from "../componennts/WorkHoursBarChart";
import '../style/adminDashboard.css';
import MyProfile from "../componennts/myprofile";
import RequestMenu from "../componennts/RequestMenu";

const RequestLink = (
    <Link to="/AddEmployees" className="dashboard-link">
        <FontAwesomeIcon icon={faUserPlus}  />
    </Link>
);
const DashboardLink = (
    <Link to="/AdminDashBoard" className="dashboard-lin">
        <FontAwesomeIcon icon={faHouse} beat style={{color: "#0602f2",}}/>
    </Link>
);

/*const ProfileLink = (
    /*  <Link to="/LeaveRequests" className="profile-link">
    <FontAwesomeIcon icon={faClipboardList} />
    </Link>
    <RequestMenu>
        <FontAwesomeIcon icon={faClipboardList} />
    </RequestMenu>
    
);*/
const SheduelLink = (
    <Link to="/Sheduel" className="dashboard-link">
        <FontAwesomeIcon icon={faIdCardClip} />
    </Link>
)


 
function DashBoard() {

    const location = useLocation(); // Use useLocation hook
    const { user } = location.state || {};

    const ProfileLink = (
        <RequestMenu profileIcon={<FontAwesomeIcon icon={faTasks}  />} />
    );
    
    return (

        <div className="adminbody">
            <div className="adminNavBar">
                <VerticalNavbar homeicon={DashboardLink}
                    calandericon = {RequestLink}
                    profileicon = {ProfileLink} 
                    Sheduelicon = {SheduelLink} />
            </div>
            <div className="adminContant">
                <div className="adminHorizontalNavBar">
                <div className="adminTitle">
                            <h3>Admin DashBoard</h3>
                        </div>
                </div>
                <div className="admin-content-container">
                    <div className="adminLeft">
                        
                        <div className="adminContant1">
                        <EmpStatusCard
                                icon={<FontAwesomeIcon icon={faUsers} size="xl" color= "#52b202" />}
                                title={"Employees"}
                                count={40}
                            /> 
                            <EmpStatusCard
                                icon={<FontAwesomeIcon icon={faUserCheck} size="xl" color= "#52b202"/>}
                                title={"Present"}
                                count={35}
                            /> 
                            <EmpStatusCard
                                icon={<FontAwesomeIcon icon={faUserTimes} size="xl" color= "#52b202"/>}
                                titleStyle={{ color: "#ea4343" }}
                                title={"Absent"}
                                count={8}
                            />
                            <EmpStatusCard
                                icon={<FontAwesomeIcon icon={faUserClock} size="xl" color="#52b202" />}
                                title="Late"
                                titleStyle={{ color: "#ea4343" }}
                                count={5}
                            />
                        </div>
                        <div className="content2">
                            <div className="workhours">
                                <h3>work hours</h3>
                                
                            </div>
                            <div className="a">
                            a
                            </div>
                    </div>
                    <div className="content3">
                    a
                    </div>
                    </div>
                    <div className="adminProfile">
                        <MyProfile/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard;