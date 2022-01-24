import React from 'react';
import {ScrollView} from 'react-native';
import {Card} from 'react-native-paper';
import RecipeHeader from '../RecipeHeader/RecipeHeader';
import List from '../List/List';

const RecipeItemDetail = ({recipeItem, navigation}) => {
  const {
    recipe: {label, images, healthLabels, ingredientLines, calories},
  } = recipeItem;
  return (
    <ScrollView>
      <Card>
        <Card.Content>
          <RecipeHeader label={label} calories={calories} />
        </Card.Content>
        <Card.Cover source={{uri: images?.SMALL?.url}} />
        <Card.Content>
          <List
            ingredientLines={ingredientLines}
            label="Ingredients"
            mode="outlined"
          />
        </Card.Content>
        <Card.Content>
          <List
            ingredientLines={ingredientLines}
            label="Health Labels"
            mode="outlined"
          />
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default RecipeItemDetail;
