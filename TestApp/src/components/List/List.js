import React from 'react';
import {ScrollView} from 'react-native';
import {Card, Chip} from 'react-native-paper';
const List = ({ingredientLines, label, mode}) => {
  return (
    <>
      <Card.Title subtitle={label} />
      <ScrollView horizontal>
        {ingredientLines.map((ingr, index) => (
          <Chip mode={mode} style={{marginHorizontal: 2}} key={index}>
            {ingr}
          </Chip>
        ))}
      </ScrollView>
    </>
  );
};

export default List;
