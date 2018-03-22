package com.homeservice.core.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.homeservice.core.model.Category;


@Repository("categoryDao")
public class CategoryDaoImpl extends AbstractDao<Integer, Category> implements CategoryDao {

	public Category findById(int id) {
		Category user = getByKey(id);
		return user;
	}
	
	@SuppressWarnings("unchecked")
	public List<Category> findAllCategory() {
		List<Category> categorys = getEntityManager()
				.createQuery("SELECT u FROM Category u ")
				.getResultList();
		return categorys;
	}

	public void save(Category category) {
		persist(category);
	}

	public void deleteByID(int ID) {
		Category category = (Category) getEntityManager()
				.createQuery("SELECT u FROM Category u WHERE u.id = :id")
				.setParameter("id", ID)
				.getSingleResult();
		delete(category);
	}
	

}
