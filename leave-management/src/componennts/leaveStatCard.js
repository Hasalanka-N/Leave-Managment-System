import React from 'react';
import LeavePieChart from './leavePieChart';
import "../style/leaveCard.css";

function LeaveStatCard(props) {
    return (
        <div className='leave-card'>
            <h3>{props.leavetype}</h3>
            <LeavePieChart
                data={props.data}
                labels={props.labels}
            />
        </div>
    );
}

export default LeaveStatCard;
