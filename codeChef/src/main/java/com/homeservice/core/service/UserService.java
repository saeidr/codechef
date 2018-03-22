package com.homeservice.core.service;

import java.util.List;

import com.homeservice.core.model.User;


public interface UserService {
	
	User findById(int id);
	
	User findBySSO(String sso);
	
	void saveUser(User user);
	
	void updateUser(User user);
	
	void deleteUserBySSO(String sso);

	List<User> findAllUsers(); 
	
	boolean isUserSSOUnique(Integer id, String sso);
	
	void deleteAllUsers();
	
	public boolean isUserExist(User user);

	void deleteUserById(int id);

	String sendSMS(User user);

}