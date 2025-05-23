import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import "../style/emloyment-profile.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Employment(){

    const location = useLocation();
    const user = location.state || JSON.parse(localStorage.getItem('user'));

    const userID = user?.id;

    const [startDate, setStartDate] = useState(new Date());

    const handleDateChange = (date) => {
        setStartDate(date);
    };


    return(
        <div>
             <div className="employment-main">
                <h3>Basic</h3>
                <div className="employment-main1">
                    <div className="employment-left">
                    <p>Date of Join</p>
                        <DatePicker
                            selected={startDate}
                            onChange={handleDateChange}
                            dateFormat="MMMM d, yyyy"
                        />
                    </div>
                    <div className="employment-right">
                    <p>Appoiment Date</p>
                        <DatePicker
                            selected={startDate}
                            onChange={handleDateChange}
                            dateFormat="MMMM d, yyyy"
                        />
                    </div>
                </div>
            </div>
            <div className="employment-main">
                <h3>Employee Identification Numbers</h3>
                <div className="employment-main1">
                    <div className="employment-left">
                    <p>Employee Number</p>
                        <input
                            id="employeeNumber"
                            type="text"
                            value={userID}
                            readOnly
                        />

                        <p>EPF Number</p>
                        <input
                            id="epfNumber"
                            type="text"
                            //value={inputs.firstName}
                            readOnly
                        />
                    </div>
                    <div className="employment-right">
                    <p>Attendens Number</p>
                        <input
                            id="attendensNumber"
                            type="text"
                            //value={inputs.firstName}
                            readOnly
                        />

                        <p>ETF Number</p>
                        <input
                            id="etfNumber"
                            type="text"
                            value={user?.EPFNumber}
                            readOnly
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Employment;