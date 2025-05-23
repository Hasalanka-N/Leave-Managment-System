import React, { useState } from 'react';
import '../style/coveringreq.css'
import '../style/requestLeave.css';


function LeaveCoveringRequestForm() {
    const [coveringEmpId, setCoveringEmpId] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    // Dummy employee list
    const availableEmployees = [
        { id: 'E101', name: 'John Doe' },
        { id: 'E102', name: 'Jane Smith' },
        { id: 'E103', name: 'Alex Johnson' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess('');
        setError('');

        if (!coveringEmpId || !message.trim()) {
            setError('Please fill out all fields.');
            return;
        }

        // Simulate storing the request
        const newRequest = {
            coveringEmpId,
            message,
            timestamp: new Date().toISOString(),
        };

        console.log('Request submitted:', newRequest);
        setSuccess('Leave covering request submitted successfully!');
        setCoveringEmpId('');
        setMessage('');
    };

    return (
        <div className="leave-covering-form">
            <h2>Leave Covering Request</h2>
            {success && <p className="success-msg">{success}</p>}
            {error && <p className="error-msg">{error}</p>}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <p >Select Covering Employee</p>
                    <select
                        value={coveringEmpId}
                        onChange={(e) => setCoveringEmpId(e.target.value)}
                        required
                    >
                        <option value="">-- Select --</option>
                        {availableEmployees.map((emp) => (
                            <option key={emp.id} value={emp.id}>
                                {emp.name}
                            </option>
                        ))}
                    </select>
                </div>
                <br/>
                <br/>

                <div className="form-group">
                    <label>Message / Instructions</label>
                    <br/>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows="4"
                        placeholder="Enter instructions here..."
                        required
                    />
                </div>

                <button type="submit" id='btnsubmit'>submit</button>
            </form>
        </div>
    );
}

export default LeaveCoveringRequestForm;
