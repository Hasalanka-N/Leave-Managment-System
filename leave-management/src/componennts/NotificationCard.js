import React from "react";
import "../style/notificationcard.css";

function NotificationCard({ title, time, description }) {
    return (
        <div className="notification-card">
            <div className="card-header">
                <h4>{title}</h4>
                <span className="timestamp">{time}</span>
            </div>
            <p className="card-description">{description}</p>
        </div>
    );
}

export default NotificationCard;
