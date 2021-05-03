import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './InputFieldStyle';

function Input({defaultValue, label, secureTextEntry}) {
  return (
    <View style={styles.inputField}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        defaultValue={defaultValue}
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
    </View>
  );
}

export default Input;
