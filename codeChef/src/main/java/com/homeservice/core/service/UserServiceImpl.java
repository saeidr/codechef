package com.homeservice.core.service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import org.apache.commons.lang.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.homeservice.core.dao.UserDao;
import com.homeservice.core.model.User;
import com.homeservice.core.service.encription.AES128;
import com.homeservice.core.service.encription.MD5;
import com.homeservice.core.service.sms.SendSms;


@Service("userService")
@Transactional
public class UserServiceImpl implements UserService{

	@Autowired
	private UserDao dao;
	
	@Autowired
	private AES128 AES;
	
	
	
	private static final AtomicLong counter = new AtomicLong();
	
	private static List<User> users;
	
	static{
		users= populateDummyUsers();
	}

	public User findById(int id) {
		return dao.findById(id);
	}

	public User findBySSO(String sso) {
		User user = dao.findBySSO(sso);
		return user;
	}

	public void saveUser(User user) {
		try{
			user.setPassword(MD5.MD5_Creator(AES128.encrypt(user.getPassword())));
			dao.save(user);
		}catch(Exception e){
			e.printStackTrace();
		}
		
	}

	/*
	 * Since the method is running with Transaction, No need to call hibernate update explicitly.
	 * Just fetch the entity from db and update it with proper values within transaction.
	 * It will be updated in db once transaction ends. 
	 */
	public void updateUser(User user) {
		User entity = dao.findById(user.getId());
		if(entity!=null){
			entity.setSsoId(user.getSsoId());
			entity.setPassword(user.getPassword());
			entity.setFirstName(user.getFirstName());
			entity.setLastName(user.getLastName());
			entity.setEmail(user.getEmail());
			entity.setUserProfiles(user.getUserProfiles());
		}
	}

	
	public void deleteUserBySSO(String sso) {
		dao.deleteBySSO(sso);
	}

	public List<User> findAllUsers() {
		return dao.findAllUsers();
	}

	public boolean isUserSSOUnique(Integer id, String sso) {
		User user = findBySSO(sso);
		return ( user == null || ((id != null) && (user.getId() == id)));
	}
	
	public void deleteAllUsers(){
		users.clear();
	}
	public void deleteUserById(int id)
	{
		
	}

	private static List<User> populateDummyUsers(){
		List<User> users = new ArrayList<User>();
		User u1 = new User();
		u1.setId(1);
		u1.setFirstName("tom");
		u1.setSsoId("09126716594");
		
		User u2 = new User();
		u1.setId(2);
		u2.setFirstName("jim");
		u2.setSsoId("09389006594");
		users.add(u1);
		users.add(u2);
		
		return users;
	}

	@Override
	public boolean isUserExist(User user) {
		// TODO Auto-generated method stub
		User result=dao.findBySSO(user.getSsoId());
		if(result!=null)
			return true;
		return false;
	}

	@Override
	public String sendSMS(User user) {
		try{
			String characters = "0123456789";
            String TrackCode = RandomStringUtils.random( 8, characters );
			String msg="کد مورد نظر شما در فن آوا یار"+TrackCode;
			SendSms.sendSingelSms(user.getSsoId(), msg);
			return TrackCode;
		}catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}

	
	
}
