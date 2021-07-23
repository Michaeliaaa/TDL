import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { TodoState } from '../redux/todoReducer';
import { Todo } from './Card';

export const TaskList = () => {
  const todos = useSelector<TodoState, TodoState['todos']>(
    state => state.todos,
  );

  return (
    <View style={styles.container}>
      <FlatList 
        contentContainerStyle={{
          flexGrow: 1, justifyContent: 'flex-end',
        }}
        inverted
        keyExtractor={(item) => item.id}
        data={todos} 
        renderItem={ ({item}) => <Todo {...item} />}
      />
    </View>
  );
};

export const FilterCompletedList = () => {
  const todos = useSelector<TodoState, TodoState['todos']>(
    state => state.todos,
  );
  return (
    <View style={styles.container}>
      <FlatList 
        contentContainerStyle={{
          flexGrow: 1, justifyContent: 'flex-end',
        }}
        inverted
        keyExtractor={(item) => item.id}
        data={todos.filter(data => data.isCompleted)} 
        renderItem={ ({item}) => <Todo {...item} />}
      />
    </View>
  );
};

export const FilterIncompleteList = () => {
  const todos = useSelector<TodoState, TodoState['todos']>(
    state => state.todos,
  );
  return (
    <View style={styles.container}>
      <FlatList 
        contentContainerStyle={{
          flexGrow: 1, justifyContent: 'flex-end',
        }}
        inverted
        keyExtractor={(item) => item.id}
        data={todos.filter(data => !data.isCompleted)} 
        renderItem={ ({item}) => <Todo {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
