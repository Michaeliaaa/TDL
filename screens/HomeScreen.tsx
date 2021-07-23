import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { Input } from '../components/Input';
import { TaskList } from '../components/List';

export const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.leadingText}>What would you like to complete today? 📌</Text>
      <Input />
      <Text style={styles.header}> Your To Do List 📋 </Text>
      <TaskList />
      <Text style={styles.quoteText}> “Do the hard jobs first. The easy jobs will take care of themselves." </Text>
      <Text style={styles.quoteAuthorText}> - Dale Carnegie, American writer  </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FADADD',
  },
  leadingText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
    fontWeight: '200',
  },
  header: {
    marginTop: 20,
    marginLeft: 30,
    fontSize: 20,
    fontWeight: '500',
  }, 
  quoteText: {
    textAlign: 'center',
    marginLeft: 30,
    marginRight: 30,
    fontSize: 20,
    fontWeight: '300',
    fontStyle: 'italic',
  },
  quoteAuthorText: {
    textAlign: 'right',
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
    fontSize: 15,
    fontWeight: '200',
    fontStyle: 'italic',
  }
});
