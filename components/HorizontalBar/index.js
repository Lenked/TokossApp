import React from 'react';
import { View, StyleSheet } from 'react-native';

const HorizontalBar = ({ backgroundColor }) => {
  return (
    <View style={[styles.bar, { backgroundColor }]} />
  );
};

const styles = StyleSheet.create({
  bar: {
    height: 5,
    width: '40%',
    marginTop: 10,
  },
});

export default HorizontalBar;