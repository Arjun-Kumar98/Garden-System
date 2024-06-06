package com.example.demo.controller;

import com.example.demo.service.MyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class MyController {

    @Autowired
    private MyService myService;

    @PostMapping("/signup")
    public String signUp(@RequestBody Map<String, String> requestBody) {
        try {
            myService.saveUser(requestBody);
            return "User registered successfully";
        } catch (Exception e) {
            e.printStackTrace();
            return "Error registering user: " + e.getMessage();
        }
    }
}
