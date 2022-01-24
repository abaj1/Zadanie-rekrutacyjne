import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import Routes from './src/Navigation/Routes';

const App = () => {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Routes />
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default App;
