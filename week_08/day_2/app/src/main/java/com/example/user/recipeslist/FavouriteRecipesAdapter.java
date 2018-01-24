package com.example.user.recipeslist;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.TextView;

import java.util.ArrayList;

/**
 * Created by user on 23/01/2018.
 */

public class FavouriteRecipesAdapter extends ArrayAdapter<Recipe> {

    public FavouriteRecipesAdapter(Context context, ArrayList<Recipe> recipes){
        super(context, 0, recipes);
    }

    @Override
    public View getView(int position, View listItemView, ViewGroup parent) {
        if (listItemView == null) {
            listItemView = LayoutInflater.from(getContext()).inflate(R.layout.recipe_item, parent,
                    false);
        }
        Recipe currentRecipe = getItem(position);

        TextView ranking = listItemView.findViewById(R.id.ranking);
        ranking.setText(currentRecipe.getRanking().toString());

        TextView title = listItemView.findViewById(R.id.title);
        title.setText(currentRecipe.getTitle().toString());

        TextView servings = listItemView.findViewById(R.id.servings);
        servings.setText(currentRecipe.getServings().toString());

        TextView ingredients = listItemView.findViewById(R.id.ingredients);
        ingredients.setText(currentRecipe.getIngredients().toString());

        TextView method = listItemView.findViewById(R.id.method);
        method.setText(currentRecipe.getMethod().toString());




        return listItemView;
    }
}
