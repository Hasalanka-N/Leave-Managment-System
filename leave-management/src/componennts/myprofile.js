import React from "react";
import { useLocation } from "react-router-dom";
import "../style/myprofile.css";
import Dp from "../image/OIP.jpeg";
import '../assest/FA 6.4.0 Pro/css/all.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeCircleCheck,faPhone,faLocationDot,faCalendar,faUserTie} from '@fortawesome/free-solid-svg-icons'; 

function MyProfile(){
    const location = useLocation();
    const user = location.state || JSON.parse(localStorage.getItem('user'));

    return(
        <div className="maindp">
            <div className="dp">
                <img src={user?.profilePhoto} alt="Logo" className="Dp-image" />
            </div>
            <div className="emp-name">
                    <p>{user?.firstName}</p>
                    <p>{user?.lastName}</p>
                    <p className="e-id">Employee Number : {user?.id}</p>
            </div>
            <div className="emp-info-box">
                <div className="icon-info">
                    <div className="iconbox">
                    <FontAwesomeIcon icon={faEnvelopeCircleCheck} />
                    </div>
                </div>
                <div className="emp-info">
                    <p className="emp-title">EMail</p>
                    <p>{user?.workEmail}</p>
                </div>
            </div>
            <div className="emp-info-box">
                <div className="icon-info">
                    <div className="iconbox">
                    <FontAwesomeIcon icon={faPhone} />
                    </div>
                </div>
                <div className="emp-info">
                    <p className="emp-title">Contact No</p>
                    <p>{user?.personalPhoneNumber}</p>
                </div>
            </div>
            <div className="emp-info-box">
                <div className="icon-info">
                    <div className="iconbox">
                    <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                </div>
                <div className="emp-info">
                    <p className="emp-title">Location</p>
                    <p>{user?.currentAddress}</p>
                </div>
            </div>
            <div className="emp-info-box">
                <div className="icon-info">
                    <div className="iconbox">
                    <FontAwesomeIcon icon={faCalendar} />
                    </div>
                </div>
                <div className="emp-info">
                    <p className="emp-title">Shift</p>
                    <p>08:00 - 17:00</p>
                </div>
            </div>
            <div className="emp-info-box">
                <div className="icon-info">
                    <div className="iconbox">
                    <FontAwesomeIcon icon={faUserTie} />
                    </div>
                </div>
                <div className="emp-info">
                    <p className="emp-title">Reporting Person</p>
                    <p>{user?.responsiblePerson}</p>
                </div>
            </div>
        </div>
    );
};
export default MyProfile;