package com.example.user_app.Service;
import com.example.user_app.Data.*;

import com.example.user_app.Data.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User createUsers(User user){
        return userRepository.save(user);
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public List<User> findUserByEmail(String workEmail) {
        return userRepository.findUserByEmail(workEmail);
    }

    public User loginUser(String email, String password) {
        List<User> users = userRepository.findUserByEmail(email);
        if (!users.isEmpty()) {
            User user = users.get(0);
            if (user.getPassword().equals(password)) {
                return user;
            }
        }
        return null;
    }

    public Optional<User> findUserById(int id){
        return userRepository.findUserById(id);
    }

    public void deleteUser(int id){
        if (userRepository.existsById(id)){
            userRepository.deleteById(id);
        }
        else{
            throw new RuntimeException("User not found with  "+id);
        }
    }
}
