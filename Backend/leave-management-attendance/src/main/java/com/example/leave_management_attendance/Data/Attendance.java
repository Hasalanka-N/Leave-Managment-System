package com.example.leave_management_attendance.Data;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "attendance")
public class Attendance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "attendance_id")
    private int attendance_id;
    @Column(name = "employee_id")
    private int employee_id;
    @Column(name = "date")
    private LocalDate date;
    @Column(name = "start_time")
    private LocalTime start_time;
    @Column(name = "end_time")
    private LocalTime end_time;
    @Column(name = "total_work_time")
    private LocalTime total_work_time;
    @Column(name = "total_break_time")
    private LocalTime total_break_time;

    public int getAttendance_id() {
        return attendance_id;
    }

    public void setAttendance_id(int attendance_id) {
        this.attendance_id = attendance_id;
    }

    public int getEmployee_id() {
        return employee_id;
    }

    public void setEmployee_id(int employee_id) {
        this.employee_id = employee_id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getStart_time() {
        return start_time;
    }

    public void setStart_time(LocalTime start_time) {
        this.start_time = start_time;
    }

    public LocalTime getEnd_time() {
        return end_time;
    }

    public void setEnd_time(LocalTime end_time) {
        this.end_time = end_time;
    }

    public LocalTime getTotal_work_time() {
        return total_work_time;
    }

    public void setTotal_work_time(LocalTime total_work_time) {
        this.total_work_time = total_work_time;
    }

    public LocalTime getTotal_break_time() {
        return total_break_time;
    }

    public void setTotal_break_time(LocalTime total_break_time) {
        this.total_break_time = total_break_time;
    }
}
