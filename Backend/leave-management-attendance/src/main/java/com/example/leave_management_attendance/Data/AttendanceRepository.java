package com.example.leave_management_attendance.Data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.Optional;

public interface AttendanceRepository extends JpaRepository<Attendance,Integer> {
    @Query("SELECT a FROM Attendance a WHERE a.employee_id = :employee_id AND a.date = :date")
    Optional<Attendance> findByEmployeeIdAndDate(@Param("employee_id") int employee_id, @Param("date") LocalDate date);
}
