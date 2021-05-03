import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './ItemsStyle';

function Items({item}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageConatainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.wieght}>
          <Text style={styles.price}>{item.price} </Text>
          &euro; / {item.wieght}
        </Text>
        <View style={styles.rowItems}>
          <View style={[styles.button, styles.white]}>
            <Image source={require('../../assets/images/heart.png')} />
          </View>
          <View style={[styles.button, styles.green]}>
            <Image source={require('../../assets/images/shopping-cart.png')} />
          </View>
        </View>
      </View>
    </View>
  );
}
export default Items;
