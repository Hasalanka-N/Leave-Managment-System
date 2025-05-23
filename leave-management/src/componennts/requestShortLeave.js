import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import 'react-datepicker/dist/react-datepicker.css';
import LeaveDetailsCard from './leavedetilscard';
import '../style/requestLeave.css';
import '../assest/FA 6.4.0 Pro/css/all.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'; 
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker as MuiTimePicker } from '@mui/x-date-pickers/TimePicker';
import BasicTimePicker from './basicTimePicker';

function RequestShortLeave(){
    const [selectedOption, setSelectedOption] = useState('');

    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
      };

    const ShortLeaveData = [3, 2];
    const totalShortLeave = 10; 

    const ShortAllocated = 10;
    const ShortUsed = 5;

    const ShortLeaveSettings = {
        width: 80,
        height: 80,
        value: (ShortLeaveData[0] / totalShortLeave)*100, 
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
          selectedOption,
          //startDate,
          //endDate,
          //textValue,
          file,
        });
      };

    return(
        <>
        <div className="personal-main-leave">
                
                <div className="personal-main1">
                    <div className="personal-left-leave">
                        <button id='leaveHistory'><FontAwesomeIcon icon={faClockRotateLeft} /> Leave History</button>
                        <h3 className='leaveh3'>Short Leave</h3>
                        <form onSubmit={handleSubmit}>
                        <p>Leave Type</p>
                        <select id="leaveType" //</div>value={selectedOption} onChange={handleChange}
                        >
                            <option value="" disabled>Select...</option>
                            <option value="Mr">Annual Leave</option>
                            <option value="Ms">Sick Leave</option>
                            <option value="Mrs">abc</option>
                        </select>

                        <p>date</p>
                        <DatePicker
                            //selected={startDate}
                            //onChange={handleDateChange}
                            dateFormat="MMMM d, yyyy"
                        />

                        <p>Time Period</p>
                        <BasicTimePicker/>
                        <p>Reason</p>
                        <textarea
                            id="description"
                            //value={textValue}
                            //onChange={handleChange}
                            rows="5"
                        />
                        <p>Attach Document</p>
                        <input type="file" onChange={handleFileChange} />
                        <input type="submit" id="btnsubmit"></input>
                    </form>  
                    </div>
                    <div className="personal-right-leave">
                        <LeaveDetailsCard
                            title={`Short Leave`}
                            gaugeSettings={ShortLeaveSettings}
                            Allocated={ShortAllocated}
                            Used={ShortUsed}
                        />

                        <LeaveDetailsCard
                            title={`Annual Leave`}
                            gaugeSettings={ShortLeaveSettings}
                            Allocated={ShortAllocated}
                            Used={ShortUsed}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default RequestShortLeave;