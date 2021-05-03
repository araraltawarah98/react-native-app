import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './LoginStyle';
import InputField from '../shared/input-field/InputField';

function Login({navigation}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Local Graden</Text>
        <Text style={styles.desctiption}>Because you deserve to eat fresh</Text>
        <InputField defaultValue="" label="Email" secureTextEntry={false} />
        <InputField defaultValue="" label="Password" secureTextEntry={true} />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text style={styles.loginText}>login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Login;
