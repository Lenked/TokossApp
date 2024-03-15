import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AppBar = ({ leftComponent, rightComponent, title }) => {
  return (
    <View style={styles.appBar}>
      <View style={styles.leftContainer}>{leftComponent}</View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightContainer}>{rightComponent}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 100,
    backgroundColor: '#FFFFFF', // Vous pouvez personnaliser la couleur de fond
    paddingHorizontal: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#fff', // Vous pouvez personnaliser la couleur du texte
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AppBar;