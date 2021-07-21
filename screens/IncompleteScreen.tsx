import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { FilterIncompleteList } from '../components/List';

export const IncompleteScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}> To Be Done ☑️ </Text>
      <FilterIncompleteList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FADADD',
  }, 
  text: {
    marginTop: 20,
    marginLeft: 30,
    fontSize: 20,
    fontWeight: '500',
  }, 
});
