package com.example.leave_management_app.Controller;

import com.example.leave_management_app.Data.Leave;
import com.example.leave_management_app.Services.LeaveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class LeaveController {

    @Autowired
    private LeaveService leaveService;

    @GetMapping(path = "/leaves")
    public List<Leave> findAllLeaves(){
        return leaveService.findAllLeaves();
    }

    @PostMapping(value = "/leaves", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Leave createLeave(
            @RequestParam("empId") int empId,
            @RequestParam("leaveType") String leaveType,
            @RequestParam("fromDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fromDate,
            @RequestParam("toDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate toDate,
            @RequestParam("reason") String reason,
            @RequestParam(value = "status", defaultValue = "Pending") String status,
            @RequestParam(value = "document", required = false) MultipartFile document) {

        return leaveService.saveLeave(empId,leaveType, fromDate, toDate, reason, status, document);
    }

    @GetMapping("/totaldays")
    public ResponseEntity<Map<String, Integer>> getTotalLeaveDays(
            @RequestParam("empId") int empId,
            @RequestParam("leaveType") String leaveType) {
        int year = LocalDate.now().getYear();
        int totalLeaveDays = leaveService.getTotalLeaveDays(empId, leaveType, year);

        Map<String, Integer> response = new HashMap<>();
        response.put("totalLeaveDays", totalLeaveDays);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/pendingrequests")
    public List<Leave> getPendingLeaveRequests() {
        return leaveService.getPendingLeaveRequests();
    }


    @GetMapping("/pendingrequests/{empId}")
    public ResponseEntity<?> getPendingRequests(@PathVariable int empId) {
        List<Leave> pendingRequests = leaveService.getPendingRequestsByEmployeeId(empId);

        if (pendingRequests.isEmpty()) {
            return ResponseEntity.status(HttpStatus.OK).body("The user does not have any pending leave requests.");
        }
        return ResponseEntity.ok(pendingRequests);
    }


    @GetMapping("/allrequests/{empId}")
    public ResponseEntity<?> getAllRequests(@PathVariable int empId) {
        List<Leave> allRequests = leaveService.getallRequestsByEmployeeId(empId);
        if (allRequests.isEmpty()) {
            return ResponseEntity.status(HttpStatus.OK).body("The user does not have any pending leave requests.");
        }
        return ResponseEntity.ok(allRequests);
    }

    @PutMapping("/approve/{leaveId}")
    public ResponseEntity<String> approveLeave(@PathVariable int leaveId) {
        try {
            leaveService.approveLeave(leaveId);
            return ResponseEntity.ok("Leave Request " + leaveId + " Approved!");
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }

    @PutMapping("/reject/{leaveId}")
    public ResponseEntity<String> rejectLeave(@PathVariable int leaveId) {
        try {
            leaveService.rejectLeave(leaveId);
            return ResponseEntity.ok("Leave Request " + leaveId + " Rejected!");
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }

    @DeleteMapping("leaves/{leaveId}")
    public ResponseEntity<String> cancelLeave(@PathVariable int leaveId) {
        try {
            leaveService.cancelLeave(leaveId);
            return ResponseEntity.ok("Leave Request " + leaveId + " Canceled!");
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error: " + e.getMessage());
        }
    }


}
