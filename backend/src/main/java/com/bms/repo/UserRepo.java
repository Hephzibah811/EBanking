package com.bms.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bms.model.User;

public interface UserRepo extends JpaRepository<User, Long> {
	public User findByEmailId(String emailId);
	public User findByPassword(String password);
}
