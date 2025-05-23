import React from "react";
import '../style/leaveDataCard.css';
import GaugeLeave from './gaugeLeave';

function LeaveDetailsCard({title, gaugeSettings,Allocated,Used,Pending,Balance}){

    return(
        <div className="leavecard">
            <div className="leavecardLeft">
            <p className="title">{title}</p>
                <GaugeLeave settings={gaugeSettings}/>
            </div>
            <div className="leavecardRight">
                <div className="lcitem">
                    <p>Allocated</p>
                    <p>{Allocated}</p>
                </div>
                <div className="lcitem">
                    <p>Used</p>
                    <p>{Used}</p>
                </div>
                <div className="lcitem">
                    <p>Pending</p>
                    <p>15</p>
                </div>
                <div className="lcitem">
                    <p>Balance</p>
                    <p>15</p>
                </div>
            </div>  
        </div>
    );
};

export default LeaveDetailsCard;