import React from 'react';
import {FlatList, Image, Text, TextInput, View} from 'react-native';
import {Category, Items} from '../../components';
import styles from './ListStyle';
import {list} from '../../data';

const renderItem = ({item}) => {
  return <Items item={item} />;
};

function ListScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Vegetables</Text>
        <View style={styles.search}>
          <View style={styles.searchIcon}>
            <Image source={require('../../assets/images/loupe.png')} />
          </View>
          <View style={styles.textInput}>
            <TextInput style={styles.input} placeholder="Search" />
          </View>
        </View>
        <View style={styles.rowItems}>
          <Category checked={true} name="Сabbage and lettuce" number="14" />
          <Category checked={false} name="Сucumbers and tomatoes" number="10" />
          <Category checked={false} name="Oinons and garlic" number="8" />
          <Category checked={false} name="Peppers" number="7" />
          <Category checked={false} name="Potatoes and carrots" number="4" />
        </View>
      </View>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.items}
      />
    </View>
  );
}
export default ListScreen;
