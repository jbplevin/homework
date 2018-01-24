package com.example.user.recipeslist;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ArrayList<Recipe> favouriteRecipes = new FavouriteRecipes().getList();
        FavouriteRecipesAdapter recipesAdapter = new FavouriteRecipesAdapter(this, favouriteRecipes);

        ListView listView = findViewById(R.id.list_view);
        listView.setAdapter(recipesAdapter);


    }
}