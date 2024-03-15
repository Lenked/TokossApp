import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VerticalCard = ({ text1, text2, text3, backgroundColor, secondaryColor }) => {
  return (
    <View style={[styles.card, { backgroundColor: backgroundColor }]}>
      <Text style={[styles.text, { color: "#888888", fontSize: 15, fontWeight: "bold" }]}>{text1}</Text>
      <Text style={[styles.text, { color: secondaryColor, fontSize: 20, fontWeight: 'bold' }]}>{text2}</Text>
      <Text style={[styles.text, { color: "#888888", fontSize:12, fontWeight: 'bold' }]}>{text3}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    width: '45%',
  },
  text: {
    fontSize: 16,
  },
});

export default VerticalCard;
