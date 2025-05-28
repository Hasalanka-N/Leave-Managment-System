package com.example.user_app.Controller;

import com.example.user_app.Data.User;
import com.example.user_app.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;


import java.io.File;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
public class UserController {

    @Autowired
    private UserService userService;
    private static final String UPLOAD_DIR = "D:/Work space/web/leave-management/public/image/Dp/";

    @GetMapping(path = "/users")
    public List<User> findUsers() {
        return userService.getUsers();
    }

    @GetMapping(path = "/users",params = "workEmail")
    public List<User>findUserByName(@RequestParam String workEmail){
        return userService.findUserByEmail(workEmail);
    }

    @GetMapping(path = "users/{id}")
    public Optional<User>findUserById(@PathVariable int id){
        return userService.findUserById(id);
    }

    @PostMapping(path = "/users")
    public ResponseEntity<String> addUser(
            @RequestParam("title") String title,
            @RequestParam("firstName") String firstName,
            @RequestParam("lastName") String lastName,
            @RequestParam("maidenName") String maidenName,
            @RequestParam("maritalStatus") String maritalStatus,
            @RequestParam("bloodGroup") String bloodGroup,
            @RequestParam("gender") String gender,
            @RequestParam("workEmail") String workEmail,
            @RequestParam("countryCode") String countryCode,
            @RequestParam("workPhoneNumber") String workPhoneNumber,
            @RequestParam("personalEmail") String personalEmail,
            @RequestParam("currentAddress") String currentAddress,
            @RequestParam("personalPhoneNumber") String personalPhoneNumber,
            @RequestParam("nicNumber") String nicNumber,
            @RequestParam("passportExpiryDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate passportExpiryDate,
            @RequestParam("passportNumber") String passportNumber,
            @RequestParam("drivingLicenseNumber") String drivingLicenseNumber,
            @RequestParam("department") String department,
            @RequestParam("responsiblePerson") String responsiblePerson,
            @RequestParam("ETFNumber") String ETFNumber,
            @RequestParam("profilePhoto") MultipartFile profilePhoto,
            @RequestParam("password") String password,
            @RequestParam("position") String position,
            @RequestParam("EPFNumber") String EPFNumber,
            @RequestParam("dob") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dob
    ) {


        try {
            // Ensure the directory exists
            File directory = new File(UPLOAD_DIR);
            if (!directory.exists()) {
                directory.mkdirs(); // Create directories if they don't exist
            }

            // Handle file upload
            String profilePhotoPath = null;
            if (profilePhoto != null && !profilePhoto.isEmpty()) {
                String fileName = profilePhoto.getOriginalFilename();
                File file = new File(UPLOAD_DIR + fileName);

                // Save file to the specified path
                profilePhoto.transferTo(file);
                profilePhotoPath = "/image/Dp/" + fileName;
            }

            User user = new User();
            user.setTitle(title);
            user.setFirstName(firstName);
            user.setLastName(lastName);
            user.setMaidenName(maidenName);
            user.setMaritalStatus(maritalStatus);
            user.setBloodGroup(bloodGroup);
            user.setGender(gender);
            user.setWorkEmail(workEmail);
            user.setCountryCode(countryCode);
            user.setWorkPhoneNumber(workPhoneNumber);
            user.setPersonalEmail(personalEmail);
            user.setCurrentAddress(currentAddress);
            user.setPersonalPhoneNumber(personalPhoneNumber);
            user.setNicNumber(nicNumber);
            user.setPassportExpiryDate(String.valueOf(passportExpiryDate));
            user.setPassportNumber(passportNumber);
            user.setDrivingLicenseNumber(drivingLicenseNumber);
            user.setDepartment(department);
            user.setResponsiblePerson(responsiblePerson);
            user.setETFNumber(ETFNumber);
            user.setProfilePhoto(profilePhotoPath);
            user.setPassword(password);
            user.setPosition(position);
            user.setEPFNumber(EPFNumber);
            user.setDob(dob);

            userService.createUsers(user);

            return ResponseEntity.ok("User added successfully!");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Error saving user data.");
        }
    }

    @PostMapping(path = "/login")
    public ResponseEntity<User> loginUser(@RequestBody User loginUser) {
        User user = userService.loginUser(loginUser.getWorkEmail(), loginUser.getPassword());
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
    }

    @DeleteMapping(path = "/users/{id}")
    public void deleteUser(@PathVariable int id){
        userService.deleteUser(id);
    }


  /*  @PostMapping(path = "/login")
    public ResponseEntity<String> loginUser(@RequestBody User loginUser) {
        List<User> users = userService.findUserByEmail(loginUser.getWorkEmail());

        if (!users.isEmpty()) {
            User user = users.get(0);
            if (user.getPassword().equals(loginUser.getPassword())) {
                return ResponseEntity.ok("Login successful");
            }
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
    }*/


  /*  @PostMapping(path = "/login")
    public ResponseEntity<User> loginUser(@RequestBody User loginUser) {
        List<User> users = userService.findUserByEmail(loginUser.getWorkEmail());

        if (!users.isEmpty()) {
            User user = users.get(0);
            if (user.getPassword().equals(loginUser.getPassword())) {
                return ResponseEntity.ok(user);
            }
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
    }*/
   /* @PutMapping(path = "/users")
    public User updateUser(@RequestBody User user) {
        return userService.updateUser(user);
    }*/
}