import { useDispatch } from 'react-redux';
import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';
import { DELETE_TODO, EDIT_TODO, TOGGLE_DONE } from '../redux/actionTypes';

export type TaskProps = {
  id: number;
  desc: string;
  isCompleted: boolean;
};

export const Task = ({id, desc: description, isCompleted: done}: TaskProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [editText, setEditText] = useState('Edit');

  const dispatch = useDispatch();

  const deleteTask = () => {
    dispatch({type: DELETE_TODO, payload: {id}});
  };

  const toggleTask = () => {
    dispatch({type: TOGGLE_DONE, payload: {id}});
  };

  const editTask = () => {
    dispatch({type: EDIT_TODO, payload: {id, description: taskDescription}});
  };

  const [taskDescription, setTaskDescription] = useState<string>(description);

  const textInputRef = useRef<TextInput>(null);

  const textDecoration = done ? 'line-through' : 'none';

  const completedTask = {
    backgroundColor: done ? '#dcdcdc' : '#fff',
    opacity: done ? 0.5 : 1.0,
  };

  return (
    <View style={[styles.container, completedTask]}>
      <View style={styles.leftItems}>
        <TouchableOpacity style={styles.checkbox} onPress={toggleTask}>
          {done && <Text style={styles.check}>✓</Text>}
        </TouchableOpacity>
        <TextInput
          ref={textInputRef}
          style={[styles.itemText, {textDecorationLine: textDecoration}]}
          maxLength={100}
          value={taskDescription}
          onChangeText={setTaskDescription}
          onFocus={() => {
            setIsFocused(true);
            setEditText('Confirm');
          }}
          onBlur={() => {
            setIsFocused(false);
            setEditText('Edit');
          }}
          onSubmitEditing={() => {
            if (textInputRef.current) {
              textInputRef.current.blur();
            }
            editTask();
          }}
        />
      </View>
      <View style={styles.rightItems}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => {
            if (textInputRef.current?.isFocused()) {
              textInputRef.current.blur();
              editTask();
            } else {
              textInputRef.current?.focus();
            }
          }}>
          <Text>{editText}</Text>
        </TouchableOpacity>
        {!isFocused && (
          <TouchableOpacity style={styles.deleteButton} onPress={deleteTask}>
            <Text>Delete</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    opacity: 0.5,
  },
  leftItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  rightItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    right: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 5,
    marginRight: 15,
    padding: 5,
    backgroundColor: '#d3d3d3',
  },
  check: {
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'center',
  },
  itemText: {
    maxWidth: '60%',
    minWidth: '60%',
  },
  editButton: {
    borderColor: '#32a852',
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
    marginRight: 15,
  },
  deleteButton: {
    borderColor: '#a83238',
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
    marginRight: 15,
  },
});
