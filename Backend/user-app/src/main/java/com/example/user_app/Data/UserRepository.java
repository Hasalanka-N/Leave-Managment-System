package com.example.user_app.Data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepository
        extends JpaRepository<User,Integer> {

    @Query("SELECT u FROM User u WHERE u.workEmail = ?1")
    List<User> findUserByEmail(String workEmail);

    @Query("SELECT u FROM User u WHERE u.id = ?1 ")
    Optional<User> findUserById(int id);
}