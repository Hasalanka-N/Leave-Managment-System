package com.example.leave_request.Controller;

import com.example.leave_request.Data.Leave;
import com.example.leave_request.Services.LeaveServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class LeaveController {

    // Service package - LeaveServices method is injec to LeaveController
    @Autowired
    private LeaveServices leaveServices;

    @PostMapping ("/leaves")
    public Leave saveleave(@RequestBody Leave leave){
        return leaveServices.saveleave(leave);
    }

    @PostMapping ("/post")
    public String postUser() {
        return "post user !";
    }

    @GetMapping("/leaves")
    public List<Leave> getleave(){
        return leaveServices.getleave();
    }

    // filter emp no
    @GetMapping(path = "/leaves",params = "emp_id")
    public List<Leave>findLeave(@RequestParam int emp_id){
        return leaveServices.findLeave(emp_id);
    }

    //delete controller
    @DeleteMapping("/leaves/{id}")
    public void deleteLeave(@PathVariable(value = "id")int emp_id){
        LeaveServices.deleteLeave(emp_id);
    }
}

