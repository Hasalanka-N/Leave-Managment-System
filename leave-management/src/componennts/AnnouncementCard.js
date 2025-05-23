import React from 'react';
import '../style/AnnouncementCard.css'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaInfoCircle } from 'react-icons/fa';


function AnnouncementCard({ title, message, date }) {
  return (
    <div className="announcement-card">
      <div className="announcement-icon">
        <FaInfoCircle size={24} />
      </div>
      <div className="announcement-content">
        <h4 className="announcement-title">{title}</h4>
        <p className="announcement-message">{message}</p>
        <p className="announcement-date">{date}</p>
      </div>
    </div>
  );
}

export default AnnouncementCard;
