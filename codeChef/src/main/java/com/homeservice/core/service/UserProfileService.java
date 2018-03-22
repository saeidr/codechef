package com.homeservice.core.service;

import java.util.List;

import com.homeservice.core.model.UserProfile;


public interface UserProfileService {

	UserProfile findById(int id);

	UserProfile findByType(String type);
	
	List<UserProfile> findAll();
	
}
