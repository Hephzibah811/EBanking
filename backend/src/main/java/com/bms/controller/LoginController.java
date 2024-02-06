package com.bms.controller;



import com.bms.model.User;
import com.bms.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @Autowired
    private LoginService loginService;
    
    @GetMapping("/login")
    public String loginUser(@RequestBody User user) {
        User authenticatedUser = loginService.loginUser(user.getUser_id(), user.getPassword());
        if (authenticatedUser != null) {
            return "Login successful";
        } else {
            return "Invalid email or password";
        }
    }
}