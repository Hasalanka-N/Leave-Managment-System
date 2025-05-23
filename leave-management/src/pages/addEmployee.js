import React from "react";
import { Link } from "react-router-dom";
import '../style/addEmployee.css';
import VerticalNavbar from "../componennts/vertical-navbar";
import HorizontalNavbar from "../componennts/horizontalnavbar";
import '../assest/FA 6.4.0 Pro/css/all.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUserPlus, faIdCardClip, faTasks } from '@fortawesome/free-solid-svg-icons';
import RequestMenu from "../componennts/RequestMenu";
import AddEmpData from "../componennts/addEmpData";


function AddEmployee() {

    const RequestLink = (
        <Link to="/AddEmployees" className="dashboard-link">
            <FontAwesomeIcon icon={faUserPlus} beat style={{color: "#0602f2"}} />
        </Link>
    );
    
    const DashboardLink = (
        <Link to="/AdminDashBoard" className="dashboard-lin">
        <FontAwesomeIcon icon={faHouse} />
    </Link>
    );

    const SheduelLink = (
        <Link to="/Sheduel" className="dashboard-link">
            <FontAwesomeIcon icon={faIdCardClip} />
        </Link>
    );

    const ProfileLink = (
        <RequestMenu profileIcon={<FontAwesomeIcon icon={faTasks} />} />
    );

    return (
        <div className="addEmployeeMain">
            <div className="addEmployeeNavBar">
                <VerticalNavbar 
                    homeicon={DashboardLink}
                    calandericon={RequestLink}
                    profileicon={ProfileLink}
                    Sheduelicon={SheduelLink} 
                />
            </div>
            <div className="addEmployeeContant">
                <div className="addEmployeehorizontalNavBar">
                    <h3>Admin Dashboard</h3>
                </div>
                <div className="empdata">
                    <AddEmpData />
                </div>
            </div>
        </div>
    );
}

export default AddEmployee;
