package com.example.leave_management_app.Services;

import com.example.leave_management_app.Data.Leave;
import com.example.leave_management_app.Data.LeaveBalance;
import com.example.leave_management_app.Data.LeaveBalanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class LeaveBalanceService {

    @Autowired
    private LeaveBalanceRepository leaveBalanceRepository;

    public LeaveBalance updateLeaveBalance(int empId, String leaveType) {
        LeaveBalance leaveBalance = leaveBalanceRepository.findByEmployeeId(empId)
                .orElseThrow(() -> new IllegalArgumentException("Employee not found"));

        String normalizedLeaveType = leaveType.trim().toLowerCase();
        System.out.println("Normalized leave type: " + normalizedLeaveType);

        switch (normalizedLeaveType) {
            case "casual":
                leaveBalance.setCasual_leave_balance(leaveBalance.getCasual_leave_balance() - 1);
                break;
            case "annual":
                leaveBalance.setAnnual_leave_balance(leaveBalance.getAnnual_leave_balance() - 1);
                break;
            case "sick":
                leaveBalance.setSick_leave_balance(leaveBalance.getSick_leave_balance() - 1);
                break;
            case "no_pay":
                leaveBalance.setNo_pay_leave_balance(leaveBalance.getNo_pay_leave_balance() - 1);
                break;
            case "short":
                leaveBalance.setShort_leave_balance(leaveBalance.getShort_leave_balance() - 1);
                break;
            default:
                throw new IllegalArgumentException("Invalid leave type: " + normalizedLeaveType);
        }

        return leaveBalanceRepository.save(leaveBalance);
    }

    public LeaveBalance createLeaveBalance(int empId) {
        int currentYear = LocalDate.now().getYear();

        Optional<LeaveBalance> existingLeaveBalance = leaveBalanceRepository.findByEmployeeIdAndYear(empId, currentYear);

        if (existingLeaveBalance.isPresent()) {
            throw new IllegalArgumentException("Leave balance already exists for employee with ID: " + empId + " for the year: " + currentYear);
        }

        LeaveBalance newLeaveBalance = new LeaveBalance();
        newLeaveBalance.setEmployeeId(empId);
        newLeaveBalance.setYear(currentYear);
        newLeaveBalance.setCasual_leave_balance(10);
        newLeaveBalance.setAnnual_leave_balance(10);
        newLeaveBalance.setSick_leave_balance(10);
        newLeaveBalance.setNo_pay_leave_balance(10);
        newLeaveBalance.setShort_leave_balance(10);
        return leaveBalanceRepository.save(newLeaveBalance);
    }

}
