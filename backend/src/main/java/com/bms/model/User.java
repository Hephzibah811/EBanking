package com.bms.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "User")
public class User {

	@Id
	@Column(name = "user_id")
	private int user_id;

	@Column(name = "name")
	private String customerName;
	
	@Column(name = "email_id")
	private String email_id;
	
	@Column(name = "password")
	private String password;
	
	@Column(name = "mobile")
	private String mobile;
	
	@Column(name = "aadhar_no")
	private String aadhar_no;
	
	@Column(name = "role")
	private String role;
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public User(int user_id, String customerName, String email_id, String password, String mobile, String aadhar_no,
			String role) {
		super();
		this.user_id = user_id;
		this.customerName = customerName;
		this.email_id = email_id;
		this.password = password;
		this.mobile = mobile;
		this.aadhar_no = aadhar_no;
		this.role = role;
	}



	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getEmail_id() {
		return email_id;
	}

	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getAadhar_no() {
		return aadhar_no;
	}

	public void setAadhar_no(String aadhar_no) {
		this.aadhar_no = aadhar_no;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "User [user_id=" + user_id + ", customerName=" + customerName + ", email_id=" + email_id + ", password="
				+ password + ", mobile=" + mobile + ", aadhar_no=" + aadhar_no + ", role=" + role + "]";
	}
	
}