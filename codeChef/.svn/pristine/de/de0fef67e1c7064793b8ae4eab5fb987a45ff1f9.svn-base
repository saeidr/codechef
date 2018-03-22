package com.homeservice.core.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.homeservice.core.dao.CategoryDao;
import com.homeservice.core.model.Category;

@Service("categoryService")
@Transactional
public class CategoryServiceImpl implements CategoryService{
	@Autowired
	private CategoryDao dao;
	

	public Category findById(int id) {
		return dao.findById(id);
	}

	public void save(Category category) {
			dao.save(category);
	}

	/*
	 * Since the method is running with Transaction, No need to call hibernate update explicitly.
	 * Just fetch the entity from db and update it with proper values within transaction.
	 * It will be updated in db once transaction ends. 
	 */
	
	public void deleteByID(int id) {
		dao.deleteByID(id);
	}

	public List<Category> findAllCategory() {
		return dao.findAllCategory();
	}

	
}
