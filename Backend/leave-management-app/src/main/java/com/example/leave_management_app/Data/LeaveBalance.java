package com.example.leave_management_app.Data;

import jakarta.persistence.*;

@Entity
@Table(name = "leave_balance")
public class LeaveBalance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "balance_id")
    private int balance_id;
    @Column(name = "employee_id")
    private int employeeId;
    @Column(name = "casual_leave_balance")
    private int casual_leave_balance;
    @Column(name = "annual_leave_balance")
    private int annual_leave_balance;
    @Column(name = "sick_leave_balance")
    private int sick_leave_balance;
    @Column(name = "no_pay_leave_balance")
    private int no_pay_leave_balance;
    @Column(name = "short_leave_balance")
    private int short_leave_balance;
    @Column(name = "year")
    private int year;

    public int getBalance_id() {
        return balance_id;
    }

    public void setBalance_id(int balance_id) {
        this.balance_id = balance_id;
    }


    public int getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(int employeeId) {
        this.employeeId = employeeId;
    }

    public int getCasual_leave_balance() {
        return casual_leave_balance;
    }

    public void setCasual_leave_balance(int casual_leave_balance) {
        this.casual_leave_balance = casual_leave_balance;
    }

    public int getAnnual_leave_balance() {
        return annual_leave_balance;
    }

    public void setAnnual_leave_balance(int annual_leave_balance) {
        this.annual_leave_balance = annual_leave_balance;
    }

    public int getSick_leave_balance() {
        return sick_leave_balance;
    }

    public void setSick_leave_balance(int sick_leave_balance) {
        this.sick_leave_balance = sick_leave_balance;
    }

    public int getNo_pay_leave_balance() {
        return no_pay_leave_balance;
    }

    public void setNo_pay_leave_balance(int no_pay_leave_balance) {
        this.no_pay_leave_balance = no_pay_leave_balance;
    }

    public int getShort_leave_balance() {
        return short_leave_balance;
    }

    public void setShort_leave_balance(int short_leave_balance) {
        this.short_leave_balance = short_leave_balance;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }
}
