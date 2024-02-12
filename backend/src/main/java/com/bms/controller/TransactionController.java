package com.bms.controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.bms.model.Transaction;
import com.bms.service.TransactionService;

@RestController
@CrossOrigin("http://localhost:4200/")
public class TransactionController {

	@Autowired
	TransactionService service;

	@PostMapping("/performTransactionInsert")
	public String performTransactionInsert(@RequestBody Transaction transaction) {
		service.insertTransaction(transaction);
		return "Record inserted";
	}

	@GetMapping("/ViewAllTransactions")
	public List<Transaction> getAll() {
		Iterator<Transaction> it = service.getAll().iterator();
		List<Transaction> list = new ArrayList<Transaction>();
		while (it.hasNext()) {
			list.add(it.next());
		}
		return list;
	}
}
