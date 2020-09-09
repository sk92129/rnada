import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import IconButton from './IconButton';

const {width} = Dimensions.get('window');
const cardPadding = 20;

const Card = ({item, viewAction, bookmarkAction, shareAction}) => {
  return (
    <View style={styles.card}>
      <Image source={item.pic} style={styles.thumbnail} />
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.icons}>
        <IconButton icon="search" onPress={viewAction} data={item} />
        <IconButton icon="bookmark" onPress={bookmarkAction} data={item} />
        <IconButton icon="share" onPress={shareAction} data={item} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width / 2 - cardPadding,
    height: 150,
    backgroundColor: '#e0e0e0',
  },
  name: {
    fontSize: 16,
    color: '#3a3f46',
    fontWeight: 'bold',
  },
  thumbnail: {
    width: 75,
    height: 75,
  },
  icons: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Card;
