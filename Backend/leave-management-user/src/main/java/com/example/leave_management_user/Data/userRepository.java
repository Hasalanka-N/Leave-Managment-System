package com.example.leave_management_user.Data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface userRepository
    extends JpaRepository<User, Integer> {
}
