import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RecipesScreen from '../Screens/RecipesScreen/RecipesScreen';
import RecipeDetailScreen from '../Screens/RecipeDetailScreen/RecipeDetailScreen';
import {DETAILS_SCREEN, HOME_SCREEN} from './constants';

export default () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={HOME_SCREEN}
          component={RecipesScreen}
          options={{title: 'Recipes'}}
        />
        <Stack.Screen name={DETAILS_SCREEN} component={RecipeDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
