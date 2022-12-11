import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.screen}>
        <View style={{padding: 20}}>
          <TextInput
            placeholder="Enter your email"
            value={email}
            placeholderTextColor="grey"
            onChangeText={setEmail}
            style={styles.input}
          />
          <View style={{height: 20}} />

          <TextInput
            placeholder="Enter your password"
            value={password}
            placeholderTextColor="grey"
            onChangeText={setPassword}
            style={styles.input}
          />
          <View style={{height: 20}} />
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

export default Login;
