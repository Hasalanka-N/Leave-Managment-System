import React from "react";
import '../style/adminDashboard.css'

function EmpStatusCard({ icon, title, titleStyle, count }) {
    return (
        <div className="stauscardbody">
            <div className="icon">
                <div className="iconboder">
                    {icon}
                </div>               
            </div>
            <div className="count">
                {count}
            </div>
            <div className="title" style={titleStyle}>
                {title}
            </div>
        </div>
    );
}

export default EmpStatusCard;
