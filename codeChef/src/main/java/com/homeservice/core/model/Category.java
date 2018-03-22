package com.homeservice.core.model;
import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="TBLCATEGORY", schema="HOMESERVICE")
public class Category implements Serializable{

	@Id 
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;

	/*@NotEmpty*/
	@Column(name="NAME", nullable=false)
	private String name;
	
	/*@NotEmpty*/
	@Column(name="PARENT_ID")
	private String parentID;
	

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	

	public String getName() {
		return name;
	}

	public void setName(String name) {
		name = name;
	}

	public String getParentID() {
		return parentID;
	}

	public void setParentID(String parentID) {
		this.parentID = parentID;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (!(obj instanceof Category))
			return false;
		Category other = (Category) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if ( name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", Name=" + name + ", parentID=" + parentID + "]";
			
	}

	public Category()
	{
		
	}

	public Category(int id ,String name)
	{
		this.id = id;
		this.name = name;
	}
	
}