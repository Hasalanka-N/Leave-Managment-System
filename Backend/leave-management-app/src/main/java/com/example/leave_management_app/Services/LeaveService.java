package com.example.leave_management_app.Services;

import com.example.leave_management_app.Data.Leave;
import com.example.leave_management_app.Data.LeaveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class LeaveService {
    @Autowired
    private LeaveRepository leaveRepository;

    private static final String UPLOAD_DIR = "D:/Work space/web/leave-management/public/image/Dp/";

    public List<Leave> findAllLeaves(){
        return leaveRepository.findAll();
    }

    public Leave saveLeave(int empId, String leaveType, LocalDate fromDate, LocalDate toDate, String reason, String status, MultipartFile document) {
        Leave leave = new Leave();
        leave.setEmp_id(empId);
        leave.setLeave_type(leaveType);
        leave.setFrom_date(fromDate);
        leave.setTo_date(toDate);
        leave.setReason(reason);
        leave.setStatus(status);

        if (document != null && !document.isEmpty()) {
            try {
                File directory = new File(UPLOAD_DIR);
                if (!directory.exists()) {
                    directory.mkdirs();
                }

                // Handle file upload
                String fileName = document.getOriginalFilename();
                File file = new File(UPLOAD_DIR + fileName);

                // Save file to the specified path
                document.transferTo(file);
                leave.setDocument_path("/image/Dp/" + fileName);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        return leaveRepository.save(leave);
    }

    public int getTotalLeaveDays(int empId, String leaveType, int year) {
        Integer totalLeaveDays = leaveRepository.sumLeaveDaysByEmpIdAndLeaveTypeAndYear(empId, leaveType, year);
        if (totalLeaveDays == null) {
            return 0; // or another appropriate default value
        }
        return totalLeaveDays;
    }

    public List<Leave> getPendingLeaveRequests() {
        return leaveRepository.findByStatus("Pending");
    }

    public List<Leave> getPendingRequestsByEmployeeId(int empId) {
        return leaveRepository.findPendingRequestsByEmployeeId(empId,"Pending");
    }

    public List<Leave> getallRequestsByEmployeeId(int empId) {
        return leaveRepository.findallRequestsByEmployeeId(empId);
    }

    public Leave approveLeave(int leaveId) {
        Optional<Leave> optionalLeave = leaveRepository.findById(leaveId);

        if (optionalLeave.isPresent()) {
            Leave leave = optionalLeave.get();
            leave.setStatus("APPROVED");
            return leaveRepository.save(leave);
        } else {
            throw new RuntimeException("Leave request not found for ID: " + leaveId);
        }
    }

    public Leave rejectLeave(int leaveId) {
        Optional<Leave> optionalLeave = leaveRepository.findById(leaveId);

        if (optionalLeave.isPresent()) {
            Leave leave = optionalLeave.get();
            leave.setStatus("REJECTED");
            return leaveRepository.save(leave);
        } else {
            throw new RuntimeException("Leave request not found for ID: " + leaveId);
        }
    }

    public void cancelLeave(int leaveId) {
        Leave leave = leaveRepository.findById(leaveId)
                .orElseThrow(() -> new RuntimeException("Leave Request not found"));
        leaveRepository.delete(leave);
    }
}
