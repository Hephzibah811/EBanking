package com.bms.controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.bms.model.User;
import com.bms.service.RegisterService;


@RestController
@CrossOrigin("http://localhost:4200/")
public class RegisterController {
	
	@Autowired
	RegisterService service;
	
	@PostMapping("/Register")
	public String performRegister(@RequestBody User user) {
		
		service.Register(user);
		return "inserted";
	}
	
	@GetMapping("/ViewAllRegistrations")
	public List<User> getAll() {
		Iterator<User> it =  service.getAll().iterator();
		List<User> list = new ArrayList<User>();
		while(it.hasNext()) {
			list.add(it.next());
		}
		return list;
}
}
