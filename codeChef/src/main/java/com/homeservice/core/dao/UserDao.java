package com.homeservice.core.dao;

import java.util.List;

import com.homeservice.core.model.User;


public interface UserDao {

	User findById(int id);
	
	User findBySSO(String sso);
	
	void save(User user);
	
	void deleteBySSO(String sso);
	
	List<User> findAllUsers();
	
	User findBySSOAndPass(String sso,String pass);

}

