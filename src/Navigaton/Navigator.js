import React from 'react';
import {Platform, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Components/Home';
import Comments from '../Components/Comments';
import BookMarkedArticles from '../Components/BookMarkedArticles';

import Button from '../Components/Molecules/Button';
import {Icon} from '../Components/Molecules/Button';

export const UnderConstruction = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontWeight: 'bold', fontSize: 30}}>Under Construction</Text>
    </View>
  );
};

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();
const MainTabScreen = () => (
  <Tab.Navigator
    tabBarOptions={{
      showIcon: true,
      // showLabel: false,
    }}>
    <Tab.Screen
      options={{
        tabBarIcon: () => <Icon name="ios-home" />,
      }}
      name="Home"
      component={HomeScreen}
    />
    <Tab.Screen
      options={{
        tabBarIcon: () => <Icon name="ios-search" />,
      }}
      name="Search"
      component={UnderConstruction}
    />
    <Tab.Screen
      options={{
        tabBarIcon: () => <Icon name="ios-heart-empty" />,
      }}
      name="BookMarks"
      component={BookMarkedArticles}
    />
  </Tab.Navigator>
);

const Navigator = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreenId"
          component={MainTabScreen}
          options={{
            headerLeftContainerStyle: {
              paddingLeft: 10,
            },
            headerRightContainerStyle: {
              paddingRight: 10,
            },
            headerLeft: () => <Button iconName="md-camera" />,
            headerRight: () => <Button iconName="ios-send" />,
            title: 'Instagram',
          }}
          // options={{headerShown: false}}
        />
        <Stack.Screen
          name="CommentScreenId"
          component={Comments}
          options={{
            headerRight: () => <Button iconName="ios-send" />,
            title: 'Comments',
          }}
          // options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
