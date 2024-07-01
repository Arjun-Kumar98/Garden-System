package com.example.demo.repository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import java.util.Map;
import java.util.List;
import org.springframework.dao.DataAccessException;


@Repository
public class MyRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public int insertUser(String username, String password, String emailaddress) {
        String sql = "INSERT INTO user_record (username, userpassword, useremail) VALUES (?, ?, ?)";
        return jdbcTemplate.update(sql, username, password, emailaddress);
    }
    @SuppressWarnings("deprecation")
	public Integer loginUser(String username, String password) {
        String sql = "SELECT userId FROM user_record WHERE username = ? AND userpassword = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{username, password}, (rs, rowNum) -> rs.getInt("userId"));
    }
    public Integer insertInventory(Integer userId,String itemName,Integer itemQty) {
    	String sql = "INSERT INTO inventory_record( userId,itemname,itemqty) VALUES(?,?,?)";
   return jdbcTemplate.update(sql,userId,itemName,itemQty);
    }

    public Integer updateInventory(String itemName,Integer itemQty,Integer itemId) {
    	String sql ="UPDATE inventory_record set itemname =? , itemqty =? where itemId =?";
    	return jdbcTemplate.update(sql,itemName,itemQty,itemId);
    	
    }
    public List<Map<String,Object>> getInventorybyUserId(Integer userId){
        String sql = "Select * from inventory_record where userId = ?";
        return jdbcTemplate.queryForList(sql, new Object[]{userId});
    }

//    public List<Map<String,Object>> getInventorybyUserId(Integer userId){
//    	String sql = "Select * from inventory_record where userId = ?";
//    	return jdbcTemplate.queryForList(sql, new Object[]{userId});)
//    }

}