package com.bms.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Transaction")
public class Transaction {
	@Id
	@GeneratedValue
	@Column(name = "transaction_id")
	private int transaction_id;
	
	@Column(name = "user_id")
	private int user_id;
	
	@Column(name = "account_type")
	private String account_type ;
	
	@Column(name = "balance")
	private int balance ;

	public Transaction() {
		super();
		
		// TODO Auto-generated constructor stub
	}

	public Transaction(int user_id, String account_type, int balance) {
		super();
		this.user_id = user_id;
		this.account_type = account_type;
		this.balance = balance;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public String getAccount_type() {
		return account_type;
	}

	public void setAccount_type(String account_type) {
		this.account_type = account_type;
	}

	public int getBalance() {
		return balance;
	}

	public void setBalance(int balance) {
		this.balance = balance;
	}

	@Override
	public String toString() {
		return "Transaction [user_id=" + user_id + ", account_type=" + account_type + ", balance=" + balance + "]";
	}
	
}
