package com.example.demo.controller;

import com.example.demo.service.MyService;

import org.springframework.http.HttpStatus;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class MyController {

    @Autowired
    private MyService myService;

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/signup")
    public Map<String,Object> signUp(@RequestBody Map<String, String> requestBody) {
    	Map<String,Object> response = new HashMap<>();
        try {
            myService.saveUser(requestBody);
            response.put("status",HttpStatus.OK.value());
            response.put("message", "Congratulations. You are now a Gardener!!");
        } catch (Exception e) {
            response.put("status", "500");
            response.put("message","Sorry for the inconvenience");
           }
         return response;  
    }
    
    @PostMapping("/login")
    public Map<String,Object> Login(@RequestBody Map<String,String> requestBody){
    	Map<String,Object> response = new HashMap<>();
    	try {
    	Integer userId = myService.loginUser(requestBody);
    	if(userId>0) {
    		response.put("status",HttpStatus.OK.value());
    		response.put("userId", userId);	
    		response.put("message", "Got to keep gardening!!");
    	}else {
    		response.put("status", HttpStatus.OK.value());
    		response.put("userId", userId);
    		response.put("message", "Incorrect username or password");
    	}
    	}catch(Exception e){
    		response.put("status", "500");
    		response.put("message","Sorry for the inconvenience");
    	}
    	return response;
    }
    
    
    
    @PostMapping("/insertInventory")
    public Map<String,Object> insertInventory(@RequestBody Map<String,Object> requestBody){
    	Map<String,Object> response = new HashMap<>();
    	//try {)
       try {
    	myService.insertInventory(requestBody);
        response.put("status",HttpStatus.OK.value());
        response.put("message","Inventory inserted successfully");
    	}catch(Exception e) {
    		response.put("status",HttpStatus.INTERNAL_SERVER_ERROR.value());
    		response.put("message","Failed to insert inventory");
    	}
return response;
    }
    
    @GetMapping("/getInventoryDetails/{userId}")
    public Map<String,Object> getInventoryDetails(@PathVariable Integer userId){
    	List<Map<String,Object>> inventoryList;
    	Map<String,Object> response = new HashMap<>();
    	try {
    	inventoryList = myService.getInventoryDetails(userId);
    	if(inventoryList.size()>1) {
    		response.put("status",HttpStatus.OK.value());
    		response.put("included", 1);
    		response.put("inventorydetails",inventoryList);
    		response.put("message","Data Fetch successfull");
    	}else {
    		response.put("status", HttpStatus.OK.value());
    		response.put("included",0);
    		
    	}
    	
    	}catch(Exception e) {
    		response.put("status",HttpStatus.INTERNAL_SERVER_ERROR.value());
    		response.put("message", "Data fetch has failed");
    	}
    	return response;
    }
    
}
