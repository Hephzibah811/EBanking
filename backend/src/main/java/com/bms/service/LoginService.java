package com.bms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bms.model.Login;
import com.bms.model.User;
import com.bms.repo.UserRepo;

@Service
public class LoginService {
	@Autowired
	UserRepo userRepo;
	User user;

	public Login login(User user) {
		User email = userRepo.findByEmailId(user.getEmailId());
		User password = userRepo.findByPassword(user.getPassword());
		
		if (email!= null && password != null) {
			String value = email.getPassword();
			String confirmPass = password.getPassword();
			if (value.equals(confirmPass)) {
				String uType = email.getRole();
				if (uType.equals("admin")) {
					return new Login("Admin Successfully");
				} else {
					return new Login("User Successfully");
				}
			} else {
				return new Login("Login Fail");
			}
		} else {
			return new Login("LoginSuccessfully");
		}

	}
}
