package com.example.demo.controller;

import com.example.demo.service.MyService;

import org.springframework.http.HttpStatus;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.HashMap;

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
    
}
