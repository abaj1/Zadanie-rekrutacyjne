import React, {PureComponent} from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Title} from 'react-native-paper';
import {DETAILS_SCREEN} from '../../Navigation/constants';

class RecipeItem extends PureComponent {
  render() {
    const {
      recipe: {label, images},
    } = this.props.item;
    const navigateToDetailScreen = item => {
      this.props.navigation.navigate(DETAILS_SCREEN, {recipeItem: item});
    };
    return (
      <Card onPress={() => navigateToDetailScreen(this.props.item)}>
        <Card.Content>
          <View style={styles.titleArea}>
            <Title>{label}</Title>
          </View>
        </Card.Content>
        <Card.Cover source={{uri: images?.SMALL?.url}} />
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  titleArea: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    marginVertical: 5,
  },
});

export default RecipeItem;
