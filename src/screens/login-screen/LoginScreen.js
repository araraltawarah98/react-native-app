import React from 'react';
import {Image, View} from 'react-native';
import {Login} from '../../components';
import styles from './LoginScreenStyle';

function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.cover}>
        <Image source={require('../../assets/images/delivery-box.png')} />
      </View>
      <Login navigation={navigation} />
    </View>
  );
}

export default LoginScreen;
