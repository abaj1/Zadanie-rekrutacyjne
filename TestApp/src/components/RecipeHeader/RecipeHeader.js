import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Headline, Paragraph, Title} from 'react-native-paper';
import {calculateKcal} from '../../utils/helpers';

const RecipeHeader = ({label, calories}) => {
  return (
    <View style={styles.container}>
      <Title>{label}</Title>
      <View style={styles.header}>
        <Headline>{calculateKcal(calories)} </Headline>
        <Paragraph>kcal</Paragraph>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default RecipeHeader;
