import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { Input } from '../components/Input';
import { TaskList } from '../components/List';

export const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text1}>What would you like to complete today? 📌</Text>
      <Input />
      <Text style={styles.text2}> Your To Do List 📋 </Text>
      <TaskList />
      <Text style={styles.text3}> “Do the hard jobs first. The easy jobs will take care of themselves." </Text>
      <Text style={styles.text4}> - Dale Carnegie, American writer  </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FADADD',
  },
  text1: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
    fontWeight: '200',
  },
  text2: {
    marginTop: 20,
    marginLeft: 30,
    fontSize: 20,
    fontWeight: '500',
  }, 
  text3: {
    textAlign: 'center',
    marginLeft: 30,
    marginRight: 30,
    fontSize: 20,
    fontWeight: '300',
    fontStyle: 'italic',
  },
  text4: {
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
