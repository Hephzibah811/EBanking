package com.bms.controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
		
		service.register(user);
		return "inserted";
	}
	
	@PutMapping("/Update")
	public String performUpdate(@RequestBody User user) {
		
		service.update(user);
		return "updated";
	}
	
	@DeleteMapping("/Delete/{userId}")
	public String performDelete(@PathVariable int userId) {
		
		service.delete(userId);
		return "deleted";
	}
	
	@GetMapping("/ViewAllRegistrations")
	public List<User> getAll() {
		Iterator<User> it =  service.getAll().iterator();
		List<User> list = new ArrayList<>();
		while(it.hasNext()) {
			list.add(it.next());
		}
		return list;
}
}
