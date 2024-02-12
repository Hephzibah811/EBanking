package com.bms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bms.model.Login;
import com.bms.model.User;
import com.bms.service.LoginService;

@RestController
@CrossOrigin("http://localhost:4200/")
public class LoginController {
	@Autowired
	private LoginService loginService;

	@RequestMapping("/login")
	public ResponseEntity<Login> performLogin(@RequestBody User user) {
		Login res = loginService.login(user);
		return ResponseEntity.ok(res);
	}
}
