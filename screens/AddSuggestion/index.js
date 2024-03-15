import React from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppBar from '../../components/AppBar';
import { Octicons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Input from '../../components/Input';
import { styles } from '../../Styles';

const AddSuggestion = () => {
  const [motif, setMotif] = React.useState('');
  const [message, setMessage] = React.useState('');

  // Function to update the 'motif' state
const handleMotifChange = (text) => {
  setMotif(text);
}
const handleMessageChange = (text) => {
  setMessage(text);
}

  return (
    <View style={styles.verticalContainer}>
      <StatusBar />
      <AppBar
        leftComponent={<TouchableOpacity><Ionicons name="menu-sharp" size={35} color="#7F7F7F" /></TouchableOpacity>}
        rightComponent={
          <View style={styles.rowContainer}>
            <TouchableOpacity>
              <Image source={require('./../../assets/images/profil_img.png')} style={{width: 70, height: 70, borderRadius: 10}} />            
            </TouchableOpacity>
            <TouchableOpacity>
              <Octicons name="bell-fill" size={25} color="white" backgroundColor="#04b2c4" style={{padding: 15, borderRadius: 30}} />
            </TouchableOpacity>
          </View>
        }
        title="Tokoss App"
      />
      <View style={styles.verticalContainer}>
        <View style={[styles.rowElement, {marginVertical: 20}]}>
          <MaterialCommunityIcons name="pencil" size={35} color="#08B3C3" />
          <Text style={{fontSize: 25, color: '#08B3C3', fontWeight: 'bold', paddingHorizontal: 10}}>Suggestion</Text>
        </View>
        <View style={styles.columnElement}>
          <Input
            placeholder="Motif"
            secureTextEntry={false}
            value={motif}
            onChangeText={handleMotifChange}
            multiline={false}
            numberLines={1}
          />
          <Input
            placeholder="Message"
            secureTextEntry={false}
            value={message}
            onChangeText={handleMessageChange}
            multiline={true}
            numberLines={7}
          />
           
              <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                <TouchableOpacity style={styles.blueBtnSend}>
                  <MaterialCommunityIcons name="send" size={24} color="#FFF" />
                  <Text style={{color: '#FFF', fontSize: 16, marginHorizontal: 10}}>Envoyer</Text>
                </TouchableOpacity>
              </View>
            </View>

      </View>
    </View>
  );
}

export default AddSuggestion;
