import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Chats from '../screens/chat/Chats';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Chats"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Chats" component={Chats} />
      </Stack.Navigator>
    </>
  );
};

export default HomeStack;
