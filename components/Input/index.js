import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Input = ({ placeholder, value, onChangeText, secureTextEntry, multiline, numberLines, ...restProps }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        numberOfLines={numberLines}
        textAlignVertical="top"
        {...restProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex:1,
    // marginVertical: 10,
    // width: '100%',
    // backgroundColor: '#FFF',
    // padding:0
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1.5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: '#CCCCCC',
    paddingVertical: 15,
    backgroundColor: '#FFF'
  },
});

export default Input;
