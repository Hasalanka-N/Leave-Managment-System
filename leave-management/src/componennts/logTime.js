import React, { useState, useEffect } from "react";
import '../style/logTime.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCircleStop, faCirclePlay, faMugSaucer } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from "react-router-dom";

const client = axios.create({
  baseURL: "http://localhost:8082/leave-management"
});

function LogTime(props) {
  const { isVisible, onClose } = props;
  const navigate = useNavigate(); 
  const location = useLocation();
  const user = location.state || JSON.parse(localStorage.getItem('user'));
  const userID = user?.id;

  const [clockedIn, setClockedIn] = useState(
    location.state?.clockedIn || JSON.parse(localStorage.getItem("clockedIn")) || false
  );
  const [startTime, setStartTime] = useState(
    location.state?.startTime || JSON.parse(localStorage.getItem("startTime")) || null
  );
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    if (clockedIn && startTime) {
      const interval = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [clockedIn, startTime]);


  const handleClockIn = () => {

    client.post(`/attendances?employee_id=${userID}`)
      .then(response => {
        alert("Clocked Out Successfully!");
        const currentTime = Date.now();
        setStartTime(currentTime);
        localStorage.setItem("startTime", JSON.stringify(currentTime));
        setClockedIn(true);
        localStorage.setItem("clockedIn", true);
      })
      .catch(error => {
        console.error("Error clocking out", error.response ? error.response.data : error.message);
      });

  };

  const handleClockOut = () => {
    client.put(`/clockout?employee_id=${userID}`)
      .then(response => {
        alert("Clocked Out Successfully!");
        setClockedIn(false);
        localStorage.removeItem("startTime");
        localStorage.setItem("clockedIn", false);
        setElapsedTime(0);
      })
      .catch(error => {
        console.error("Error clocking out", error.response ? error.response.data : error.message);
      });
};

  
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  
  if (!isVisible) return null;

  return (
    <div className="logTimeComponent">
      <button onClick={onClose} className="closeButton">
        <FontAwesomeIcon icon={faCircleXmark} size="xl" style={{ color: "#d40202" }} />
      </button>
      <div className='logTimeComponent1'>
        <p className='workHoursLog'>{formatTime(elapsedTime)}</p>
        <p className='whLog'>Work Hours</p>


        {!clockedIn ? (
          <button className="clockinbtn" onClick={handleClockIn}>
            <FontAwesomeIcon icon={faCirclePlay} size="3x" style={{ color: "green" }} />
            <br /> Clock In
          </button>
        ) : (
          <button className="clockoutbtn" onClick={handleClockOut}>
            <FontAwesomeIcon icon={faCircleStop} size="3x" style={{ color: "#c70d00" }} />
            <br /> Clock Out
          </button>
        )}
        <br /><br /><br />
        <button className='breakbtn'>
          <FontAwesomeIcon icon={faMugSaucer} size="lg" style={{ color: "#ffffff" }} /> Break
        </button>
      </div>
    </div>
  );
}

export default LogTime;








