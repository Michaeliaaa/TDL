import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

export const CompletedScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.text}> Completed ✅ </Text>
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
