package com.spring.esmovie.entities;

public class User {

	private Long id;
	private String email;
	
	//Construtores
	public User() {
		
	}

	public User(Long id, String email) {
		this.id = id;
		this.email = email;
	}

	//Get e Setters
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	
}
