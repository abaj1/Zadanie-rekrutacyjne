import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import RecipeItemDetail from '../../components/RecipeItemDetails/RecipeItemDetails';

export default ({navigation, route}) => {
  const {recipeItem} = route.params;
  return <RecipeItemDetail recipeItem={recipeItem} />;
};
