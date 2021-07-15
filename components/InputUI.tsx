import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import {ADD_TODO} from '../redux/actionTypes';

export const InputUI = () => {

  const dispatch = useDispatch();
  const [task, setTask] = useState<string>();

  const addTask = (description: string) => {
    const newTask = { description, done: false };
    dispatch({ 
        type: ADD_TODO, 
        payload: newTask 
      });
    setTask('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={task}
        onChangeText={newTask => setTask(newTask)}
        onSubmitEditing= {() => addTask(task)}
        placeholder="eg. Learn React"
      />
      <TouchableOpacity onPress={() => addTask(task)}>
        <View style={styles.button}>
          <Text style={styles.addText}>➕</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-around',
  },
  input: {
    padding: 15,
    marginLeft: 10,
    width: 320,
    backgroundColor: '#fff',
    borderRadius: 15,
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  button: {
    width: 40,
    height: 40,
    marginRight: 15,
    backgroundColor: '#f3b6b6',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {},
});
