import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import RecipesList from '../../components/RecipesList/RecipesList';
import Search from '../../components/SearchBar/Searchbar';
import withLoading from '../../hoc/withLoading/withLoading';
import {getFilteredRecipes, getRecipes} from '../../utils/helpers';

const RecipeScreen = ({navigation, setLoading}) => {
  const [mealType, setMealType] = useState('');
  const [diet, setDiet] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [show, setShow] = useState(false);
  const onChangeSearch = query => setSearchQuery(query);
  const onFilter = async () => {
    try {
      setLoading(true);
      const filteredRecipes = await getFilteredRecipes(
        searchQuery,
        diet,
        mealType,
      );
      setRecipes(filteredRecipes);
      setShow(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const loadData = async () => {
    try {
      setLoading(true);
      const recipes = await getRecipes();
      setRecipes(recipes);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <View style={styles.container}>
      <Search
        mealType={mealType}
        setMealType={setMealType}
        diet={diet}
        setDiet={setDiet}
        searchQuery={searchQuery}
        onChangeSearch={onChangeSearch}
        onFilter={onFilter}
        show={show}
        setShow={setShow}
      />
      <RecipesList recipes={recipes} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default withLoading(RecipeScreen);
