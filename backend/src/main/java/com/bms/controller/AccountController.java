package com.bms.controller;

import java.util.List;
import java.util.ArrayList;
import java.util.Iterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bms.model.Account;
import com.bms.model.User;
import com.bms.service.AccountService;


@RestController
@CrossOrigin("http://localhost:4200/")
public class AccountController {
	
	@Autowired
	AccountService service;
	
	@PostMapping("/performAccountInsert")
public String performRegister(@RequestBody Account account) {
		
		service.insert(account);
		return "inserted";
	}
	
//	@PutMapping("/performEventUpdate")
//	public String performUpdate(@ModelAttribute Account account) {
//		service.updateAccount(account);
//		return "Record update";
//	}
//	
//	@DeleteMapping("/performEventDelete/{id}")
//	public String performDelete(@PathVariable("id") long id) {
//		service.deleteAccount(id);
//		return "Record deleted";
//	}
//	
	@GetMapping("/ViewAllAccounts")
	public List<Account> getAllAccount() {
		Iterator<Account> it =  service.getAllAccount().iterator();
		List<Account> list = new ArrayList<Account>();
		while(it.hasNext()) {
			list.add(it.next());
		}
		return list;
}
	
}
