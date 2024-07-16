package com.example.demo.service;

import com.example.demo.repository.MyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.List;

@Service
public class MyService {

    @Autowired
    private MyRepository myRepository;

    public void saveUser(Map<String, String> requestBody) {
        String username = requestBody.get("username");
        String password = requestBody.get("userpassword");
        String emailaddress = requestBody.get("useremail");

        try {
            myRepository.insertUser(username, password, emailaddress);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
   public Integer loginUser(Map<String,String> requestBody) {
	   String username = requestBody.get("username");
	   String password = requestBody.get("userpassword");
	   Integer userId=0;;
	   try {
	   userId = myRepository.loginUser(username,password);
	   if(userId!=null) {
		
	   }else {
		  userId = 0;
	   } 
	  
   }catch(Exception e) {
	   System.out.println("Incorrect password entered by: "+username);
   }
	   return userId;
}
   
   public void insertInventory(Map<String,Object> requestBody) {
		Integer userId = Integer.valueOf((String) requestBody.get("userId"));
		  List<Map<String, Object>> inventoryList = (List<Map<String, Object>>) requestBody.get("inventory_list");
			for(Map<String,Object> item:inventoryList) {
				   String itemName = (String) item.get("itemname");
				   Integer itemQty = (Integer) item.get("itemqty");
					System.out.println("The name here is=="+itemName);
					System.out.println("The quantity here is =="+itemQty);
				   myRepository.insertInventory(userId, itemName, itemQty);
			}
		  List<Map<String,Object>>  inventoryupdateList =(List<Map<String,Object>>) requestBody.get("inventory_update_list");
		for(Map<String,Object> items : inventoryupdateList) {
			String Name = (String) items.get("itemname");
			Integer Qty = (Integer) items.get("itemqty");
			Integer itemid = (Integer) items.get("itemId");
			myRepository.updateInventory( Name, Qty, itemid);
		}
		 List<Map<String,Object>> inventorydeleteList = (List<Map<String,Object>>) requestBody.get("inventory_delete_list");
		    for(Map<String,Object> idetails: inventorydeleteList) {
		    	Integer itemids = (Integer) idetails.get("itemId");
		    	myRepository.deleteInventoryItem(itemids);
		    }
		   
	   
   }
   
   public List<Map<String,Object>> getInventoryDetails(int userId){
	 List<Map<String,Object>> inventoryList;
	   inventoryList = myRepository.getInventorybyUserId(userId);
	   if(inventoryList!=null) {
		   return inventoryList;
	   }else {
		   return null;
	   }
   }
   
}
