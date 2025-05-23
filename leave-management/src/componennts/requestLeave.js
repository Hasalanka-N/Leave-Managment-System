import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useLocation } from 'react-router-dom'; 
import LeaveDetailsCard from './leavedetilscard';
import '../style/requestLeave.css';
import '../assest/FA 6.4.0 Pro/css/all.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns';
import { useSnackbar } from 'notistack';

const client = axios.create({
    baseURL: "http://localhost:8081/leave-management"
});

function RequestLeave() {
    const location = useLocation();
    const user = location.state || JSON.parse(localStorage.getItem('user'));
    const emp_id = user?.id;
    const { enqueueSnackbar } = useSnackbar();

    const [selectedOption, setSelectedOption] = useState('');
    const [file, setFile] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [reason, setReason] = useState('');
    const [leaveCounts, setLeaveCounts] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

    const casualLeaveData = [3, 2];
    const totalCasualLeave = 10;
    const CasualAllocated = 10;
    const CasualUsed = 5;

    const casualLeaveSettings = {
        width: 80,
        height: 80,
        value: (casualLeaveData[0] / totalCasualLeave) * 100,
    };

    // Fetch leave counts when leave type changes
    useEffect(() => {
        const fetchLeaveCounts = async () => {
            try {
                const response = await client.get('/totaldays', {
                    params: {
                        empId: emp_id,
                        leaveType: selectedOption,
                    },
                });
                setLeaveCounts(response.data.totalLeaveDays);
            } catch (error) {
                console.error('Error fetching leave counts:', error);
            }
        };

        if (selectedOption) {
            fetchLeaveCounts();
        }
    }, [selectedOption, emp_id, enqueueSnackbar]);

    const handleDateChange = (date) => setStartDate(date);
    const handleEndDateChange = (date) => setEndDate(date);
    const handleFileChange = (event) => setFile(event.target.files[0]);
    const handleReasonChange = (event) => setReason(event.target.value);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (leaveCounts >= 5) {
            setErrorMessage(`You have already requested the maximum number of ${selectedOption} leaves for this year.`);
            return;
        } else {
            setErrorMessage('');
        }

        // Create the form data
        const formData = new FormData();
        formData.append('empId', emp_id);
        formData.append('leaveType', selectedOption);
        if (startDate) formData.append('fromDate', format(startDate, 'yyyy-MM-dd'));
        if (endDate) formData.append('toDate', format(endDate, 'yyyy-MM-dd'));
        formData.append('reason', reason);
        if (file) {
            formData.append('document', file);
        }

        // Log formData for debugging
        for (let pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }

        try {
            const response = await client.post('/leaves', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Leave request submitted:', response.data);
            enqueueSnackbar('Leave request submitted successfully!', { variant: 'success' });
            window.location.reload();
        } catch (error) {
            if (error.response) {
                console.error('Error response:', error.response.data);
                enqueueSnackbar(`Error: ${error.response.data.message || 'Failed to submit leave request'}`, { variant: 'error' });
            } else if (error.request) {
                console.error('No response received:', error.request);
                enqueueSnackbar('No response from server. Please try again later.', { variant: 'error' });
            } else {
                console.error('Request setup error:', error.message);
                enqueueSnackbar('Error setting up request. Please try again.', { variant: 'error' });
            }
        }
    };

    return (
        <div className="personal-main-leave">
            <div className="personal-main1">
                <div className="personal-left-leave">
                    <button id='leaveHistory'>
                        <FontAwesomeIcon icon={faClockRotateLeft} /> Leave History
                    </button>
                    <h3 className='leaveh3'>Request Leave</h3>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <form onSubmit={handleSubmit}>
                        <p>Leave Type</p>
                        <select id="leaveType" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} required>
                            <option value="">Select...</option>
                            <option value="Annual">Annual Leave</option>
                            <option value="Casual">Casual Leave</option>
                            <option value="Sick">Sick Leave</option>
                            <option value="Nopay">Nopay Leave</option>
                        </select>

                        <p>From date</p>
                        <DatePicker
                            selected={startDate}
                            onChange={handleDateChange}
                            dateFormat="MMMM d, yyyy"
                            required
                        />

                        <p>To date</p>
                        <DatePicker
                            selected={endDate}
                            onChange={handleEndDateChange}
                            dateFormat="MMMM d, yyyy"
                            required
                        />

                        <p>Reason</p>
                        <textarea
                            id="description"
                            rows="5"
                            value={reason}
                            onChange={handleReasonChange}
                            required
                        />

                        <p>Attach Document</p>
                        <input
                            id="document"
                            type="file"
                            accept="image/*,application/pdf"
                            onChange={handleFileChange}
                        />

                        <input type="submit" id="btnsubmit" value="Submit" />
                    </form>
                </div>
                <div className="personal-right-leave">
                    <LeaveDetailsCard
                        title="Casual Leave"
                        gaugeSettings={casualLeaveSettings}
                        Allocated={CasualAllocated}
                        Used={CasualUsed}
                    />

                    <LeaveDetailsCard
                        title="Annual Leave"
                        gaugeSettings={casualLeaveSettings}
                        Allocated={CasualAllocated}
                        Used={CasualUsed}
                    />
                </div>
            </div>
        </div>
    );
}

export default RequestLeave;
