package com.bms.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.bms.model.User;
import com.bms.repo.UserRepo;

@Service
public class RegisterService {

	@Autowired
	UserRepo repo;

	public boolean register(User user) {
		repo.save(user);
		return true;
	}

	public boolean update(User user) {
		repo.save(user);
		return true;
	}

	public boolean delete(@PathVariable("userId") long userId) {
		repo.deleteById(userId);
		return true;
	}

	public List<User> getAll() {
		Iterator<User> it = repo.findAll().iterator();
		List<User> list = new ArrayList<>();
		while (it.hasNext()) {
			list.add(it.next());
		}
		return list;

	}
}