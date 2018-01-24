package com.example.user.recipeslist;

/**
 * Created by user on 23/01/2018.
 */

public class Recipe {

    private Integer ranking;
    private String title;
    private String ingredients;
    private String method;
    private Integer servings;

    public Recipe(Integer ranking, String title, String ingredients, String method, Integer servings){

        this.ranking = ranking;
        this.title = title;
        this.ingredients = ingredients;
        this.method = method;
        this.servings = servings;
    }

    public Integer getRanking(){ return this.ranking; }

    public String getTitle(){ return this.title; }

    public String getIngredients(){ return this.ingredients; }

    public String getMethod(){ return this.method; }

    public Integer getServings(){ return this.servings; }



}
