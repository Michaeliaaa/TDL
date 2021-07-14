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

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#fff' },
        headerTitle: 'To-do List ✔️',
        headerTintColor: 'black',
      }}>
      < HomeStack.Screen name="Home" component={ HomeScreen }/>
      < HomeStack.Screen name="Completed" component={ CompletedScreen } />
      < HomeStack.Screen name="Incomplete" component={ IncompleteScreen } />
    </HomeStack.Navigator>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
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
          }}
        >
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Completed" component={CompletedScreen} />
          <Tab.Screen name="Incomplete" component={IncompleteScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;