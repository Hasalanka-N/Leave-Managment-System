package com.example.leave_management_app.Data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface LeaveRepository extends JpaRepository<Leave,Integer> {
    @Query("SELECT SUM(DATEDIFF(l.to_date, l.from_date)) FROM Leave l WHERE l.emp_id = :empId AND l.leave_type = :leaveType AND YEAR(l.from_date) = :year")
    int sumLeaveDaysByEmpIdAndLeaveTypeAndYear(
            @Param("empId") int empId,
            @Param("leaveType") String leaveType,
            @Param("year") int year
    );

    @Query("SELECT l FROM Leave l WHERE l.status = ?1")
    List<Leave> findByStatus(String status);

    @Query("SELECT l FROM Leave l WHERE l.emp_id = :empId AND l.status = :status")
    List<Leave> findPendingRequestsByEmployeeId(
            @Param("empId") int empId,
            @Param("status") String status
    );

    @Query("SELECT l FROM Leave l WHERE l.emp_id = :empId")
    List<Leave> findallRequestsByEmployeeId(
            @Param("empId") int empId
    );
}
