import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './screens/HomeScreen';
import { CompletedScreen } from './screens/CompletedScreen';
import { IncompleteScreen } from './screens/IncompleteScreen';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Ionicons from 'react-native-vector-icons/Ionicons';

Ionicons.loadFont().then();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      < Stack.Screen 
        name="Home" 
        component={ HomeScreen }
        options={{ title: 'To-do List ✔️' }}
      />
    </Stack.Navigator>
  );
};

const IncompleteStack = () => {
  return (
    <Stack.Navigator>
      < Stack.Screen 
        name="Incomplete Tasks" 
        component={ IncompleteScreen }
        options={{ title: 'To-do List ✔️' }}
      />
    </Stack.Navigator>
  );
};

const CompletedStack = () => {
  return (
    <Stack.Navigator>
      < Stack.Screen 
        name="Completed Tasks" 
        component={ CompletedScreen }
        options={{ title: 'To-do List ✔️' }}
      />
    </Stack.Navigator>
  );
};

const AppTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Completed') {
            iconName = 'checkmark-circle-outline';
          } else if (route.name === 'Incomplete') {
            iconName = 'bookmark-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#FF0000',
        inactiveTintColor: '#979797',
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen name="Home" component={ HomeStack } />
      <Tab.Screen name="Incomplete" component={ IncompleteStack } />
      <Tab.Screen name="Completed" component={ CompletedStack } />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppTab />
      </NavigationContainer>
    </Provider>
  );
};

export default App;