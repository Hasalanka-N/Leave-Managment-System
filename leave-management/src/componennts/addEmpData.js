import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import { useSnackbar } from 'notistack';
import 'react-datepicker/dist/react-datepicker.css';

import '../style/addEmployee.css';

const client = axios.create({
  baseURL: "http://localhost:8080/leave-management-user"
});

const PersonalProfile = () => {

    const { enqueueSnackbar } = useSnackbar();

    const [userData, setUserData] = useState({
        title: "",
        firstName: "",
        lastName: "",
        maidenName: "",
        maritalStatus: "",
        bloodGroup: "",
        gender: "",
        workEmail: "",
        countryCode: "+1",
        workPhoneNumber: "",
        personalEmail: "",
        currentAddress: "",
        personalPhoneNumber: "",
        nicNumber: "",
        passportExpiryDate: "",
        passportNumber: "",
        drivingLicenseNumber: "",
        department: "",
        responsiblePerson: "",
        ETFNumber: "",
        profilePhoto: null,
        password: "",
        position: "",
        EPFNumber: "",
        dob: new Date(),
    });

    function handle(e) {
        const { id, value, type, files } = e.target;
        if (type === 'file') {
            setUserData(prevState => ({ ...prevState, [id]: files[0] }));
        } else {
            setUserData(prevState => ({ ...prevState, [id]: value }));
        }
    }

    function submit(e) {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(userData).forEach(key => {
            if (key === 'dob') {
                formData.append(key, userData[key].toISOString().split('T')[0]); // Format as YYYY-MM-DD
            } else {
                formData.append(key, userData[key]);
            }
        });

        client.post('/users', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => {
            console.log(res.data);
            enqueueSnackbar('User added successfully!', { variant: 'success' });

            setUserData({
                title: "",
                firstName: "",
                lastName: "",
                maidenName: "",
                maritalStatus: "",
                bloodGroup: "",
                gender: "",
                workEmail: "",
                countryCode: "+1",
                workPhoneNumber: "",
                personalEmail: "",
                currentAddress: "",
                personalPhoneNumber: "",
                nicNumber: "",
                passportExpiryDate: "",
                passportNumber: "",
                drivingLicenseNumber: "",
                department: "",
                responsiblePerson: "",
                ETFNumber: "",
                profilePhoto: null,
                password: "",
                position: "",
                EPFNumber: "",
                dob: new Date(),
            });


        }).catch(error => {
            console.error('Error:', error);
            enqueueSnackbar('User added unsuccessfully!', { variant: 'error' });
        });
    }

    return (
        <form onSubmit={submit}>
            <div className="addemp-main">
                <h3>Basic Information</h3>
                <div className="addemp-main1">
                    <div className="addemp-left">
                        <p>Title</p>
                        <select id="title" value={userData.title} onChange={handle}>
                            <option value="" disabled>Select...</option>
                            <option value="Mr">Mr</option>
                            <option value="Ms">Ms</option>
                            <option value="Mrs">Mrs</option>
                        </select>

                        <p>First Name</p>
                        <input
                            id="firstName"
                            type="text"
                            value={userData.firstName}
                            onChange={handle}
                        />
                        <p>Last Name</p>
                        <input
                            id="lastName"
                            type="text"
                            value={userData.lastName}
                            onChange={handle}
                        />
                        <p>Maiden Name</p>
                        <input
                            id="maidenName"
                            type="text"
                            value={userData.maidenName}
                            onChange={handle}
                        />
                        <p>Marital Status</p>
                        <input
                            id="maritalStatus"
                            type="text"
                            value={userData.maritalStatus}
                            onChange={handle}
                        />
                    </div>
                    <div className="addemp-right">
                        <p>Blood Group</p>
                        <input
                            id="bloodGroup"
                            type="text"
                            value={userData.bloodGroup}
                            onChange={handle}
                        />
                        <p>Date of Birth</p>
                        <DatePicker
                            selected={userData.dob}
                            onChange={(date) => setUserData(prevState => ({ ...prevState, dob: date }))}
                            dateFormat="MMMM d, yyyy"
                        />
                        <p>Gender</p>
                        <select id="gender" value={userData.gender} onChange={handle}>
                            <option value="" disabled>Select...</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="addemp-main">
                <h3>Contact</h3>
                <div className="addemp-main1">
                    <div className="addemp-left">
                        <p>Work Email</p>
                        <input
                            id="workEmail"
                            type="text"
                            value={userData.workEmail}
                            onChange={handle}
                        />
                        <p>Work Phone</p>
                        <div className="phone-input-group">
                            <select
                                id="countryCode"
                                value={userData.countryCode}
                                onChange={handle}
                            >
                                <option value="+1">+1 (USA)</option>
                                <option value="+44">+44 (UK)</option>
                                <option value="+91">+91 (India)</option>
                                <option value="+94">+94 (LK)</option>
                            </select>
                            <input
                                id="workPhoneNumber"
                                type="text"
                                value={userData.workPhoneNumber}
                                onChange={handle}
                            />
                        </div>
                        <p>Current Address</p>
                        <input
                            id="currentAddress"
                            type="text"
                            value={userData.currentAddress}
                            onChange={handle}
                        />
                    </div>
                    <div className="addemp-right">
                        <p>Personal Email</p>
                        <input
                            id="personalEmail"
                            type="text"
                            value={userData.personalEmail}
                            onChange={handle}
                        />
                        <p>Personal Phone</p>
                        <div className="phone-input-group">
                            <select
                                id="countryCodePersonal"
                                value={userData.countryCodePersonal}
                                onChange={handle}
                            >
                                <option value="+1">+1 (USA)</option>
                                <option value="+44">+44 (UK)</option>
                                <option value="+91">+91 (India)</option>
                                <option value="+94">+94 (LK)</option>
                            </select>
                            <input
                                id="personalPhoneNumber"
                                type="text"
                                value={userData.personalPhoneNumber}
                                onChange={handle}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="addemp-main">
                <h3>Identification Information</h3>
                <div className="addemp-main1">
                    <div className="addemp-left">
                        <p>NIC Number</p>
                        <input
                            id="nicNumber"
                            type="text"
                            value={userData.nicNumber}
                            onChange={handle}
                        />
                        <p>NIC Expiry Date</p>
                        <input
                            id="passportExpiryDate"
                            type="text"
                            value={userData.passportExpiryDate}
                            onChange={handle}
                        />
                        <p>Passport Number</p>
                        <input
                            id="passportNumber"
                            type="text"
                            value={userData.passportNumber}
                            onChange={handle}
                        />
                        <p>Driving License Number</p>
                        <input
                            id="drivingLicenseNumber"
                            type="text"
                            value={userData.drivingLicenseNumber}
                            onChange={handle}
                        />
                    </div>
                    <div className="addemp-right">
                        <p>Department</p>
                        <input
                            id="department"
                            type="text"
                            value={userData.department}
                            onChange={handle}
                        />
                        <p>Responsible Person</p>
                        <input
                            id="responsiblePerson"
                            type="text"
                            value={userData.responsiblePerson}
                            onChange={handle}
                        />
                        <p>ETF Number</p>
                        <input
                            id="ETFNumber"
                            type="text"
                            value={userData.ETFNumber}
                            onChange={handle}
                        />
                        <p>Position</p>
                        <input
                            id="position"
                            type="text"
                            value={userData.position}
                            onChange={handle}
                        />
                        <p>EPF Number</p>
                        <input
                            id="EPFNumber"
                            type="text"
                            value={userData.EPFNumber}
                            onChange={handle}
                        />
                        <p>Password</p>
                        <input
                            id="password"
                            type="password"
                            value={userData.password}
                            onChange={handle}
                        />
                    </div>
                </div>
            </div>
            <div className="addemp-main">
                <h3>Profile Photo</h3>
                <input
                    id="profilePhoto"
                    type="file"
                    accept="image/*"
                    onChange={handle}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default PersonalProfile;

