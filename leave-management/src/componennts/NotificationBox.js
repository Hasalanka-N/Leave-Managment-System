// import React from "react";
// import "../style/notificationbox.css"; 
// function NotificationBox() {
//     return (
//         <div className="notification-box">
//             <p><strong>Notifications</strong></p>
            
//         </div>
//     );
// }

// export default NotificationBox;

import React from "react";
import "../style/notificationbox.css";
import NotificationCard from "./NotificationCard";

function NotificationBox() {
    const notifications = [
        {
            title: "Meeting Reminder",
            time: "2 mins ago",
            description: "You have a meeting scheduled at 2 PM."
        },
        {
            title: "New Task Assigned",
            time: "10 mins ago",
            description: "You’ve been assigned a new task: ‘Update user dashboard’."
        },
        {
            title: "Deployment",
            time: "1 hour ago",
            description: "Server update completed successfully."
        }
    ];
    

    return (
        <div className="notification-box">
            <h3 className="notification-title">Notifications</h3>
            {notifications.map((n, index) => (
                <NotificationCard
                    key={index}
                    title={n.title}
                    time={n.time}
                    description={n.description}
                />
            ))}
        </div>
    );
}

export default NotificationBox;

