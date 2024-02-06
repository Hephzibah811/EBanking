package com.bms.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bms.model.User;
import com.bms.repo.UserRepo;
@Service
public class LoginService {
	
	@Autowired
    private UserRepo userRepo;

    public User loginUser(int user_id, String password) {
        // Find the user by email
        User user = userRepo.findByUserId(user_id);
        // If user exists and password matches, return the user
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null; // User not found or password incorrect
    }
}

