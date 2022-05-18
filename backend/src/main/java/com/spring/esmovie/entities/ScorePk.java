package com.spring.esmovie.entities;

public class ScorePk {

	private Movie movie;
	private User user;
	
	//Construtor
	public ScorePk() {
		
	}

	public Movie getMovie() {
		return movie;
	}

	public void setMovie(Movie movie) {
		this.movie = movie;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	//Get e Setters
	
}
