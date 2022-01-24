import React, {PureComponent} from 'react';
import {FlatList} from 'react-native';
import RecipeItem from '../RecipeItem/RecipeItem';

class RecipesList extends PureComponent {
  render() {
    return (
      <FlatList
        data={this.props.recipes}
        initialNumToRender={5}
        renderItem={({item}) => (
          <RecipeItem item={item} navigation={this.props.navigation} />
        )}
      />
    );
  }
}

export default RecipesList;
