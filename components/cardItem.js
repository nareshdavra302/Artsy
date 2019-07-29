import React, { Component } from 'react';
import { Button, Card } from 'react-native-elements';
import {
  Text,
  StyleSheet,
  Platform,
  View
} from 'react-native';
import styles from '../styles/homeStyle';
const CardItem = ({ item }) => (
  <View>
    {item !== undefined ? (
      <Card
        title={item.title}
        image={{ uri: item.imageUrl }}
        imageStyle={styles.imageView}
        titleStyle={styles.text}>
        <Text style={[styles.text, { marginBottom: 10, fontSize: 15 }]}>
          {`${'Price: '} ${item.sale_message}${'\n'}`}
          {`${'Artist Name: '} ${item.artist.name}`}
        </Text>
      </Card>
    ) : (
      <View />
    )}
  </View>
);
export default CardItem;
