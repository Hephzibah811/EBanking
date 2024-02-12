package com.bms.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Account")
public class Account {
	@Id
	
	@Column(name = "user_id")
	private int userId;
	
	@Column(name = "account_type")
	private String accountType;
	
	@Column(name = "balance")
	private int balance;

	public Account() {
		super();
	}

	public Account(int userId, String accountType, int balance) {
		super();
		this.userId = userId;
		this.accountType = accountType;
		this.balance = balance;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getAccountType() {
		return accountType;
	}

	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}

	public int getBalance() {
		return balance;
	}

	public void setBalance(int balance) {
		this.balance = balance;
	}

	@Override
	public String toString() {
		return "Account [userId=" + userId + ", accountType=" + accountType + ", balance=" + balance + "]";
	}
	
}
