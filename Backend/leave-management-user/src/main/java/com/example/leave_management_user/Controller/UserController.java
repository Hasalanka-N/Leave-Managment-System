package com.example.leave_management_user.Controller;

import com.example.leave_management_user.Data.User;
import com.example.leave_management_user.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.File;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
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
            // Directory where files will be saved
            String uploadDir = "D:/leave-management/dp/";

            // Ensure the directory exists
            File directory = new File(uploadDir);
            if (!directory.exists()) {
                directory.mkdirs(); // Create directories if they don't exist
            }

            // Handle file upload
            String profilePhotoPath = null;
            if (profilePhoto != null && !profilePhoto.isEmpty()) {
                String fileName = profilePhoto.getOriginalFilename();
                profilePhotoPath = uploadDir + fileName;

                // Save file to the specified path
                File file = new File(profilePhotoPath);
                profilePhoto.transferTo(file);
            }


            // Create a new user entity
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
            user.setPassportExpiryDate(passportExpiryDate);
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

            // Save user to the database
            userService.saveUser(user);

            return ResponseEntity.ok("User added successfully!");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Error saving user data.");
        }
    }

    @GetMapping
    public List<User> findUsers() {
        return userService.getUsers();
    }
}
