package com.bms.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bms.model.Account;

public interface AccountRepo extends JpaRepository<Account, Long>{
	
}
