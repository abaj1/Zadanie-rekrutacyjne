import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';

const Spinner = ({style, isLoading}) => {
  return (
    <View style={{...styles.container, ...style}}>
      <ActivityIndicator animating={isLoading} color={Colors.red800} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
});

export default Spinner;
