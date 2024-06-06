package com.example.demo.service;

import com.example.demo.repository.MyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class MyService {

    @Autowired
    private MyRepository myRepository;

    public void saveUser(Map<String, String> requestBody) {
        String username = requestBody.get("username");
        String password = requestBody.get("password");
        String emailaddress = requestBody.get("emailaddress");

        try {
            myRepository.insertUser(username, password, emailaddress);
        } catch (Exception e) {
            e.printStackTrace();
            // Handle exception as needed
        }
    }
}
