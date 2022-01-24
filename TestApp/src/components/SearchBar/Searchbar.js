import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Button,
  Searchbar,
  ToggleButton,
  List,
  RadioButton,
  Text,
} from 'react-native-paper';
import Select from '../Select/Select';

const Search = ({
  onChangeSearch,
  searchQuery,
  mealType,
  setMealType,
  diet,
  setDiet,
  onFilter,
  show,
  setShow,
}) => {
  const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Teatime'];
  const dietValues = [
    'balanced',
    'high-fiber',
    'high-protein',
    'low-carb',
    'low-fat',
    'low-sodium',
  ];
  return (
    <ToggleButton.Group
      onValueChange={value => setShow(!show)}
      value={mealType}>
      <ToggleButton icon="format-align-justify" value="left" />
      {show && (
        <View style={styles.searchContainer}>
          <List.Section>
            <Searchbar
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
            <Select
              value={mealType}
              setValue={setMealType}
              items={mealTypes}
              label="Meal Type"
            />
            <Select
              value={diet}
              setValue={setDiet}
              items={dietValues}
              label="Diets"
            />
            <Button icon="filter" mode="contained" onPress={onFilter}>
              Filter
            </Button>
          </List.Section>
        </View>
      )}
    </ToggleButton.Group>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    paddingHorizontal: 50,
  },
});

export default Search;
