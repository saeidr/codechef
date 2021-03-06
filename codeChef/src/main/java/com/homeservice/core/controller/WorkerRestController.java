package com.homeservice.core.controller;
 
import java.util.List;
 




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;
 




import com.homeservice.core.model.Category;
import com.homeservice.core.model.User;
import com.homeservice.core.service.CategoryService;
import com.homeservice.core.service.UserService;
 
@RestController
public class WorkerRestController {
 
    @Autowired
    CategoryService categoryService;  //Service which will do all data retrieval/manipulation work
 
    
     
    //-------------------Retrieve All Users--------------------------------------------------------
     
    @RequestMapping(value = "/workerCategory/", method = RequestMethod.GET)
    public ResponseEntity<List<Category>> listAllUsers() {
       List<Category> categories = categoryService.findAllCategory();
        if(categories.isEmpty()){
            return new ResponseEntity<List<Category>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<Category>>(categories, HttpStatus.OK);
    }
 
    //-------------------Retrieve Single User--------------------------------------------------------
     
    /*@RequestMapping(value = "/user/{id}", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<User> getUser(@PathVariable("id") int id) {
        System.out.println("Fetching User with id " + id);
        User user = userService.findById(id);
        if (user == null) {
            System.out.println("User with id " + id + " not found");
            return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }
 
     
     
    //-------------------Create a User--------------------------------------------------------
     
    @RequestMapping(value = "/user/", method = RequestMethod.POST)
    public ResponseEntity<Void> createUser(@RequestBody User user, UriComponentsBuilder ucBuilder) {
        System.out.println("Creating User " + user);
 
        if (userService.isUserExist(user)) {
            System.out.println("A User with name " + user.getFirstName() + " already exist");
            return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
           
        userService.saveUser(user);
        
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(ucBuilder.path("/user/{id}").buildAndExpand(user.getId()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
    }
 
     
    //------------------- Update a User --------------------------------------------------------
     
    @RequestMapping(value = "/user/{id}", method = RequestMethod.PUT)
    public ResponseEntity<User> updateUser(@PathVariable("id") int id, @RequestBody User user) {
        System.out.println("Updating User " + id);
         
        User currentUser = userService.findById(id);
         
        if (currentUser==null) {
            System.out.println("User with id " + id + " not found");
            return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
        }
 
        currentUser.setFirstName(user.getFirstName());
       
         
        userService.updateUser(currentUser);
        return new ResponseEntity<User>(currentUser, HttpStatus.OK);
    }
 
    //------------------- Delete a User --------------------------------------------------------
     
    @RequestMapping(value = "/user/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<User> deleteUser(@PathVariable("id") int id) {
        System.out.println("Fetching & Deleting User with id " + id);
 
        User user = userService.findById(id);
        if (user == null) {
            System.out.println("Unable to delete. User with id " + id + " not found");
            return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
        }
 
        userService.deleteUserById(id);
        return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
    }
 
     
    //------------------- Delete All Users --------------------------------------------------------
     
    @RequestMapping(value = "/user/", method = RequestMethod.DELETE)
    public ResponseEntity<User> deleteAllUsers() {
        System.out.println("Deleting All Users");
 
        userService.deleteAllUsers();
        return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
    }
 
    
    @RequestMapping(value = "/user/checkUserName/", method = RequestMethod.POST)
    public ResponseEntity<Boolean> chekUsernameExist(@RequestBody User user) {
        System.out.println("check username exist");
        boolean Exist=userService.isUserExist(	user);
        System.out.println(Exist);
        return new ResponseEntity<Boolean>(Exist, HttpStatus.OK);
    }
    
    @RequestMapping(value = "/user/sendSMS/", method = RequestMethod.POST)
    public ResponseEntity<String> sendSMS(@RequestBody User user) {
        System.out.println("send sms");
         String result=userService.sendSMS(user);
        //System.out.println(Exist);
        return new ResponseEntity<String>(result,HttpStatus.OK);
    }
    
    @RequestMapping(value = "/user/checkValidation/", method = RequestMethod.POST)
    public ResponseEntity<Boolean> checkValidation(@RequestBody User user) {
        System.out.println("check username exist");
        boolean Exist=userService.isUserExist(	user);
        System.out.println(Exist);
        return new ResponseEntity<Boolean>(Exist, HttpStatus.OK);
    }*/
}