package com.example.demo.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class MyRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public int insertUser(String username, String password, String emailaddress) {
        String sql = "INSERT INTO user_record (username, userpassword, useremail) VALUES (?, ?, ?)";
        return jdbcTemplate.update(sql, username, password, emailaddress);
    }
}
