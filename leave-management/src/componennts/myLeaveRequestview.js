import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom'; 
import '../style/requestLeave.css';
import '../assest/FA 6.4.0 Pro/css/all.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns';
import { useSnackbar } from 'notistack';

const client = axios.create({
    baseURL: "http://localhost:8081/leave-management"
});

function MyRequestLeave() {
    const location = useLocation();
    const user = location.state || JSON.parse(localStorage.getItem('user'));
    const empId = user?.id;
    const { enqueueSnackbar } = useSnackbar();
    const [leaveRequests, setLeaveRequests] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLeaveRequests = async () => {
            setLoading(true);
            try {
                const response = await client.get(`/pendingrequests/${empId}`);
                console.log("API Response:", response.data); 
                if (Array.isArray(response.data)) {
                    setLeaveRequests(response.data);
                } else {
                    throw new Error("Unexpected data structure");
                }
                setError(null);
            } catch (err) {
                setError("The user does not have any pending leave requests.");
                setLeaveRequests([]); 
            } finally {
                setLoading(false);
            }
        };

        fetchLeaveRequests();
    }, [empId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const handleCancel = async (leaveId) => {
        try {
            await client.delete(`/leaves/${leaveId}`);
            enqueueSnackbar(`Leave Request ${leaveId} Canceled!`, { variant: 'success' });
            refreshLeaveRequests(); 
        } catch (error) {
            console.error("Error rejecting leave request", error);
            enqueueSnackbar("Error rejecting leave request", { variant: 'error' });
        }
    };

    const refreshLeaveRequests = async () => {
        try {
            const response = await client.get(`/pendingrequests/${empId}`);
            if (Array.isArray(response.data)) {
                setLeaveRequests(response.data);
            } else {
                throw new Error("Unexpected data structure");
            }
        } catch (error) {
            console.error("Error refreshing leave requests", error);
        }
    };

    return (
        <div className="personal-main-leave">
            <div className="personal-main1">
                <div className="personal-left-leave-view">
                    <h3 className='leaveh3'>My Leave Request</h3>
                    <div className="leave-requests-grid-my">
                        {leaveRequests.length > 0 ? (
                            <div className="leave-requests-grid-header-my">
                                <div>Leave ID</div>
                                <div>Employee ID</div>
                                <div>Leave Type</div>
                                <div>Start Date</div>
                                <div>End Date</div>
                                <div>Reason</div>
                                <div>Document</div>
                                <div>Status</div>
                                <div>Actions</div>
                            </div>
                        ) : (
                            <p>No leave requests found.</p>
                        )}

                        {leaveRequests.map((request, index) => (
                            <div key={index} className="leave-request-row-my">
                                <div>{request.leave_id}</div>
                                <div>{request.emp_id}</div>
                                <div>{request.leave_type}</div>
                                <div>{format(new Date(request.from_date), 'MM/dd/yyyy')}</div>
                                <div>{format(new Date(request.to_date), 'MM/dd/yyyy')}</div>
                                <div>{request.reason}</div>
                                <div>
                                    {request.document_path ? (
                                        <a 
                                            href={request.document_path} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="document-link"
                                        >
                                            View Document
                                        </a>
                                    ) : (
                                        <span>No Document</span>
                                    )}
                                </div>
                                <div>{request.status}</div>
                                <div className="buttons">
                                    <button className="Cancel-btn" onClick={() => handleCancel(request.leave_id)}>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyRequestLeave;


