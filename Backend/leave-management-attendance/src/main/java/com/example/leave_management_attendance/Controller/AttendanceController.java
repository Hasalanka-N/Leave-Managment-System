package com.example.leave_management_attendance.Controller;

import com.example.leave_management_attendance.Data.Attendance;
import com.example.leave_management_attendance.Data.AttendanceRepository;
import com.example.leave_management_attendance.Service.AttendanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class AttendanceController {
    @Autowired
    private AttendanceService attendanceService;
    @PostMapping(path = "/attendances")
    public Attendance startWork(@RequestParam int employee_id){
        return attendanceService.createAttendance(employee_id);
    }

    @PutMapping(path = "/clockout")
    public ResponseEntity<Attendance> clockOut(@RequestParam int employee_id) {
        try {
            Attendance updatedAttendance = attendanceService.clockOut(employee_id);
            return ResponseEntity.ok(updatedAttendance);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

}
