package com.homeservice.core.dao;

import java.util.List;

import com.homeservice.core.model.Category;
import com.homeservice.core.model.User;


public interface CategoryDao {

	Category findById(int id);
	
	void save(Category category);
	
	void deleteByID(int ID);
	
	List<Category> findAllCategory();
	
}

