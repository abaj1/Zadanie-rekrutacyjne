import React from 'react';
import {List, RadioButton} from 'react-native-paper';

const MealType = ({value, setValue, items, label}) => {
  return (
    <List.Section>
      <List.Accordion title={label}>
        <RadioButton.Group
          onValueChange={newValue => {
            if (newValue !== value) setValue(newValue);
            else setValue('');
          }}
          value={value}>
          {items.map(item => (
            <RadioButton.Item label={item} value={item} />
          ))}
        </RadioButton.Group>
      </List.Accordion>
    </List.Section>
  );
};

export default MealType;
