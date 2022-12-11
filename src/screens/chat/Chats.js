import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Chats = props => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.screen}>
        <View style={{padding: 20}}>
          <Text>Chats</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    color: 'black',
  },
});

export default Chats;
