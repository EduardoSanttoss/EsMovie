package com.spring.esmovie.entities;

public class Score {

	private ScorePk id = new ScorePk();
	private Double value;
	
	//Construtor
	public Score() {
		
	}
	
	//Informa o filme e associa com o score
	public void setMovie(Movie movie) {
		id.setMovie(movie); 
	}
	
	public void setUser(User user) {
		id.setUser(user);
	}
	
	//Get e Setters
	public ScorePk getId() {
		return id;
	}

	public void setId(ScorePk id) {
		this.id = id;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}
}

