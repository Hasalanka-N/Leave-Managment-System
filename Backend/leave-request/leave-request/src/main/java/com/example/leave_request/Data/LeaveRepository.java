package com.example.leave_request.Data;

import org.hibernate.sql.Delete;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface LeaveRepository
extends JpaRepository<Leave,Integer> {
    @Query("SELECT l FROM Leave l WHERE l.emp_id = ?1")
    List<Leave> findLeave();

    @Query("delete from Leave l where l.emp_id  = ?1")
    Optional<Leave> deleteLeave(int emp_id );

}

