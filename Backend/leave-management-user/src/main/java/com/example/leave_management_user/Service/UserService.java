package com.example.leave_management_user.Service;
import com.example.leave_management_user.Data.User;
import com.example.leave_management_user.Data.userRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import java.time.LocalDate;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private userRepository userRepository;

    public void saveUser(User user) {
        userRepository.save(user);
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }
}
