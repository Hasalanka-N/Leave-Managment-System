
import React, { useState } from "react";
import '../style/logTime.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faMugSaucer } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useLocation, useNavigate } from "react-router-dom";

const client = axios.create({
  baseURL: "http://localhost:8082/leave-management"
});

function TimeCount(props) {
  const location = useLocation();
  const user = location.state || JSON.parse(localStorage.getItem('user'));
  const userID = user?.id;
  const { isVisibleCount, onCloseCount, employeeId } = props;
  const navigate = useNavigate();

  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  const handleClockOut = () => {
    client.post(`/attendances?employee_id=${userID}`)
      .then(response => {
        alert("Clocked Out Successfully!");
        const currentTime = Date.now();
        setStartTime(currentTime);
        localStorage.setItem("startTime", JSON.stringify(currentTime));

        onCloseCount();
        navigate('/log-time', { state: { startTime: currentTime } }); 
      })
      .catch(error => {
        console.error("Error clocking out", error.response ? error.response.data : error.message);
      });
  };

  const handleBreak = () => {
    client.post(`/attendances/break?employee_id=${employeeId}`)
      .then(response => {
        alert("Break Started!");
      })
      .catch(error => {
        console.error("Error starting break", error.response ? error.response.data : error.message);
      });
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isVisibleCount) return null;

  return (
    <div className="timecount">
      <p className='workHours'>{formatTime(elapsedTime)}</p>
      <p className='wh'>Work Hours</p>
      <button className="clockinbtn" onClick={handleClockOut}>
        <FontAwesomeIcon icon={faCirclePlay} size="3x" style={{ color: "green" }} /><br /> Clock Out
      </button>
      <br /><br /><br />
      <button className='breakbtn' onClick={handleBreak}>
        <FontAwesomeIcon icon={faMugSaucer} size="lg" style={{ color: "#ffffff" }} /> Break
      </button>
    </div>
  );
}

export default TimeCount;



