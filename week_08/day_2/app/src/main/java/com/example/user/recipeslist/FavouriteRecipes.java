package com.example.user.recipeslist;

import java.util.ArrayList;

/**
 * Created by user on 23/01/2018.
 */

public class FavouriteRecipes {

    private ArrayList<Recipe> list;

    public FavouriteRecipes() {
        list = new ArrayList<>();
        list.add(new Recipe(1, "Doner Tacos with Pineapple and Salsa", "4 guajillo chillies, " +
                "60ml pineapple juice, 3 cloves garlic, 60ml cider vinegar, 25g achiote paste, 1/2 onion, 1tsp dried oregano," +
                " 1/4 tsp cumin, 1 tsp salt, 900g pork shoulder steaks, 1 fresh pineapple, 16 tortillas, " +
                "red pepper salsa, 100g corriander", "Cook it",5));
        list.add(new Recipe(2, "Scrambled eggs with chorizo", "100g chorizo, 1 tbsp butter," +
                " 20g onion, 20g jalapenos, 100g potatoes, 8 eggs, 30g cotija cheese, 100g corriander, 1 avocado, salsa",
                "Scramble it",4));
        list.add(new Recipe(3, "Chopped Salad", "1 iceberg lettuce, 1/2 romaine lettuce," +
                " 120g salami, 200g mozzarella, 400g tin chickpeas, 3 tomatoes, 15cm cucumber, 50g basil leaves," +
                " 60ml olive oil, 15ml red wine vinegar, 1/2 tsp mustard powder, 1/2 tsp salt, 1/2 tsp sugar," +
                " 2 tsp black pepper", "Toss it",6));
        list.add(new Recipe(4, "Chargrilled Aubergine and Feta Rolls", "2 aubergines, 4 tbsp olive oil, 175g feta cheese," +
                " 175g ricotta cheese, 50g parsley, 1tsp nutmeg, 2tsp black pepper, 2 tbsp capers, 30g rocket," +
                " 30g spinach, 30g watercress, 1/2 lemon, 1/2 pomegranite", "Bake it",4));
    }

    public ArrayList<Recipe> getList() { return new ArrayList<Recipe>(list); }
}
