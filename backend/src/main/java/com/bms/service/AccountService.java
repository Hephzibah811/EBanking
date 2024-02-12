package com.bms.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bms.model.Account;
import com.bms.repo.AccountRepo;

@Service
public class AccountService {

	@Autowired
	AccountRepo repo;

	public boolean insert(Account account) {
		repo.save(account);
		return true;
	}

	public List<Account> getAllAccount() {
		Iterator<Account> it = repo.findAll().iterator();
		List<Account> list = new ArrayList<>();
		while (it.hasNext()) {
			list.add(it.next());
		}
		return list;
	}

}
