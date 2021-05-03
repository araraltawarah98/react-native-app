import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './CategoryStyle';

function Category({checked, name, number}) {
  return (
    <View style={[styles.category, checked ? styles.active : null]}>
      {checked ? (
        <Image
          source={require('../../assets/images/check.png')}
          style={styles.checkImage}
        />
      ) : (
        <></>
      )}
      <Text
        style={[
          checked ? styles.activeText : styles.inactiveText,
          styles.categoryText,
        ]}>
        {name} ({number})
      </Text>
    </View>
  );
}
export default Category;
