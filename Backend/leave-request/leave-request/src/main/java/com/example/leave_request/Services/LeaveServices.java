package com.example.leave_request.Services;

import com.example.leave_request.Data.Leave;
import com.example.leave_request.Data.LeaveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LeaveServices {

    @Autowired
    private static LeaveRepository leaveRepository;

//delete service method
       public static void deleteLeave(int emp_id) {
        Optional<Leave>deleteLeaveSer=leaveRepository.findById(emp_id);

        if (deleteLeaveSer.isPresent()){
            leaveRepository.delete(deleteLeaveSer.get());
        }else {
            System.out.println("Record not exists with this id "+emp_id);
        }
    }

    public Leave saveleave(Leave leave) {
        return leaveRepository.save(leave);
    }

    public List<Leave> getleave(){
    return leaveRepository.findAll();
    }
    // filter emp no
    public List<Leave> findLeave(int emp_id){
        return leaveRepository.findLeave();
    }
}


