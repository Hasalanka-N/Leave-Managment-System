package com.example.leave_management_app.Controller;

import com.example.leave_management_app.Data.LeaveBalance;
import com.example.leave_management_app.Services.LeaveBalanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class LeaveBalanceController {

    @Autowired
    private LeaveBalanceService leaveBalanceService;

    @PutMapping(path = "/leavebalance")
    public ResponseEntity<?> updateLeaveBalance(@RequestParam int empId, @RequestParam String leave_type) {
        try {
            LeaveBalance updatedBalance = leaveBalanceService.updateLeaveBalance(empId, leave_type);
            return ResponseEntity.ok(updatedBalance);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating leave balance: " + e.getMessage());
        }
    }

    @PostMapping(path = "/leavebalances")
    public LeaveBalance createLeaveBalance(@RequestParam int empId) {
        return leaveBalanceService.createLeaveBalance(empId);
    }

}
