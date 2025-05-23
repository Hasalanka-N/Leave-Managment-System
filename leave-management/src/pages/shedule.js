// import React from 'react';
// import '../style/shedule.css';

// function Sheduel() {
//   const schedule = [
//     { day: 'Monday', shift: '9:00 AM - 5:00 PM' },
//     { day: 'Tuesday', shift: '9:00 AM - 5:00 PM' },
//     { day: 'Wednesday', shift: '10:00 AM - 6:00 PM' },
//     { day: 'Thursday', shift: '9:00 AM - 5:00 PM' },
//     { day: 'Friday', shift: '8:00 AM - 4:00 PM' },
//     { day: 'Saturday', shift: 'Off' },
//     { day: 'Sunday', shift: 'Off' },
//   ];

//   return (
    // <div className="schedule-container">
    //   <h1 className="schedule-title">My Weekly Schedule</h1>
    //   <div className="schedule-table">
    //     {schedule.map((item, index) => (
    //       <div key={index} className={`schedule-row ${item.shift === 'Off' ? 'off-day' : ''}`}>
    //         <div className="schedule-day">{item.day}</div>
    //         <div className="schedule-time">{item.shift}</div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
//   );
// }

// export default Sheduel;



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
import '../style/shedule.css';

function Sheduel() {

    const schedule = [
        { day: 'Monday', shift: '9:00 AM - 5:00 PM' },
        { day: 'Tuesday', shift: '9:00 AM - 5:00 PM' },
        { day: 'Wednesday', shift: '10:00 AM - 6:00 PM' },
        { day: 'Thursday', shift: '9:00 AM - 5:00 PM' },
        { day: 'Friday', shift: '8:00 AM - 4:00 PM' },
        { day: 'Saturday', shift: 'Off' },
        { day: 'Sunday', shift: 'Off' },
      ];
        
  const SheduelLink = (
    <ProfileMenu profileIcon={<FontAwesomeIcon icon={faIdCardClip} beat style={{color: "#0602f2",}} />} />
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
const ProfileLink = (
    <Link to="/Profile" className="dashboard-link">
        <FontAwesomeIcon icon={faUser} />
    </Link>
    // <FontAwesomeIcon icon={faUser} beat style={{color: "#0602f2",}} />
);
// const SheduelLink = (
//     <Link to="/Sheduel" className="dashboard-link">
//         <FontAwesomeIcon icon={faIdCardClip} />
//     </Link>
// )

    return(
        <div className="requestViewMain">
            <div className="adminNavBar">
                <VerticalNavbar homeicon={DashboardLink}
                    calandericon = {RequestLink}
                    profileicon = {ProfileLink} 
                    Sheduelicon = {SheduelLink} />
            </div>
            <div className="viewRequestContant">
            <div className="schedule-container">
      <h1 className="schedule-title">My Weekly Schedule</h1>
      <div className="schedule-table">
        {schedule.map((item, index) => (
          <div key={index} className={`schedule-row ${item.shift === 'Off' ? 'off-day' : ''}`}>
            <div className="schedule-day">{item.day}</div>
            <div className="schedule-time">{item.shift}</div>
          </div>
        ))}
      </div>
    </div>
            
    </div>
</div>


    );
}

export default Sheduel;
