package com.example.leave_management_app.Data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface LeaveBalanceRepository extends JpaRepository<LeaveBalance,Integer> {
    Optional<LeaveBalance> findByEmployeeId(int employeeId);

    Optional<LeaveBalance> findByEmployeeIdAndYear(int empId, int year);

}
