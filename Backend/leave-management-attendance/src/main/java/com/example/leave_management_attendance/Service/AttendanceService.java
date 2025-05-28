package com.example.leave_management_attendance.Service;

import com.example.leave_management_attendance.Data.Attendance;
import com.example.leave_management_attendance.Data.AttendanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Optional;

@Service
public class AttendanceService {
    @Autowired
    private AttendanceRepository attendanceRepository;

    public Attendance createAttendance(int employee_id){
        Attendance attendance = new Attendance();
        attendance.setEmployee_id(employee_id);
        attendance.setDate(LocalDate.now());
        attendance.setStart_time(LocalTime.now());
        attendance.setEnd_time(null);
        attendance.setTotal_work_time(null);
        attendance.setTotal_break_time(null);
        return attendanceRepository.save(attendance);
    }

    /*public Attendance clockOut(int employee_id) {
        LocalDate today = LocalDate.now();
        Optional<Attendance> optionalAttendance = attendanceRepository.findByEmployeeIdAndDate(employee_id, today);

        if (optionalAttendance.isPresent()) {
            Attendance attendance = optionalAttendance.get();
            // Update the end_time with the current time
            attendance.setEnd_time(LocalTime.now());
            // Save the updated attendance record
            return attendanceRepository.save(attendance);
        } else {
            throw new RuntimeException("No attendance record found for employee ID: " + employee_id + " on " + today);
        }
    }*/

    public Attendance clockOut(int employee_id) {
        LocalDate today = LocalDate.now();
        Optional<Attendance> optionalAttendance = attendanceRepository.findByEmployeeIdAndDate(employee_id, today);

        if (optionalAttendance.isPresent()) {
            Attendance attendance = optionalAttendance.get();

            // Update the end_time with the current time
            LocalTime endTime = LocalTime.now();
            attendance.setEnd_time(endTime);

            // Calculate total_work_time as the difference between start_time and end_time
            LocalTime startTime = attendance.getStart_time();
            if (startTime != null) {
                Duration workDuration = Duration.between(startTime, endTime);
                // Convert the duration to hours and minutes
                LocalTime totalWorkTime = LocalTime.of((int) workDuration.toHours(), (int) (workDuration.toMinutes() % 60));
                attendance.setTotal_work_time(totalWorkTime);
            }

            // Save the updated attendance record
            return attendanceRepository.save(attendance);
        } else {
            throw new RuntimeException("No attendance record found for employee ID: " + employee_id + " on " + today);
        }
    }

}
