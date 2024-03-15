import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const IconInput = ({ placeholder, value, onChangeText, icon, secureTextEntry, multiline, numberLines, ...restProps }) => {
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
      <TouchableOpacity style={{position: 'absolute', right: 15}}>
        {icon}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '100%',
    backgroundColor: '#FFF',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1.5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: '#CCCCCC',
    paddingVertical: 15,
  },
});

export default IconInput;
