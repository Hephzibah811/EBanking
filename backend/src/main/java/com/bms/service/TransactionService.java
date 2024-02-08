package com.bms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import com.bms.model.Transaction;
import com.bms.repo.TransactionRepo;
@Service
public class TransactionService {
	
	@Autowired
	TransactionRepo repo;
	
	public boolean insertTransaction(Transaction transaction) {
       repo.save(transaction);
       return true;
   }	
	public List<Transaction> getAll() {
		Iterator<Transaction> it =  repo.findAll().iterator();
		List<Transaction> list = new ArrayList<Transaction>();
		while(it.hasNext()) {
			list.add(it.next());
		}
		return list;
	}	
}

