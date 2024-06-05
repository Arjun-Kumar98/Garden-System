package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.MyEntity;

public interface MyRepository extends JpaRepository<MyEntity, Long>  {

}
