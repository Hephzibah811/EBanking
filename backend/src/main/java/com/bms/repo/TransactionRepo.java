package com.bms.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bms.model.Transaction;

public interface TransactionRepo extends JpaRepository<Transaction, Long>{
}
