import React, { useState } from 'react';
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { Octicons, Ionicons, MaterialCommunityIcons, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { styles } from '../../Styles';
import AppBar from '../../components/AppBar';
import Input from"./../../components/Input"
import IconInput from '../../components/IconInput';
import DropdownComp from '../../components/DropdownComp';

const AddOffert = () => {
  const [price, setPrice] = useState('')
  const [urgency, setUrgency] = useState('')
  const [offertDetails, setOffertDetails] = useState('')
  const handlePriceChange = (text) => {
    setPrice(parseFloat(text));
  }
  const handleUrgencyChange = () => {
    setUrgency(urgency)
  }
  const handleOffertDetailsChange = () => {
    setOffertDetails(offertDetails)
  }
  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
  ];
  return (
    <View style={styles.verticalContainer}>
      <StatusBar />
      <AppBar
        leftComponent={<TouchableOpacity><AntDesign name="left" size={35} color="#7F7F7F" /></TouchableOpacity>}
        rightComponent={
          <View style={styles.rowContainer}>
            <TouchableOpacity>
              <Image source={require('./../../assets/images/profil_img.png')} style={{width: 70, height: 70, borderRadius: 10}} />            
            </TouchableOpacity>
            <Text style={[styles.textTItle, {fontSize: 16, marginHorizontal: 10}]}>{"Andrey wanad"}</Text>
          </View>
        }
        title="Tokoss App"
      />
      <View style={[styles.verticalContainer, {paddingHorizontal: 20}]}>
        <Text style={[styles.textTItle, {marginVertical: 30, fontSize: 19}]}>Nouvel offre</Text>
        <Input
              placeholder="Prix"
              secureTextEntry={false}
              value={price.toString()}
              onChangeText={handlePriceChange}
              multiline={false}
              numberLines={1}
              textAlignVertical="center"
              keyboardType='number-pad'
        />
        <DropdownComp placeholder="Point de départ" items={data} color={'#06B0C7'} />
        <DropdownComp placeholder="Point d'arrivé" items={data} color={'#06B0C7'} />
        <Input
              placeholder="Urgence"
              secureTextEntry={false}
              value={offertDetails}
              onChangeText={handleOffertDetailsChange}
              multiline={true}
              numberLines={10}
              textAlignVertical="top"
        />
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingRight: 20, marginVertical: 25, width: '100%' }}>
            <TouchableOpacity style={[styles.blueBtnSend, {height: 50, paddingHorizontal: 5}]}>
              <AntDesign name="close" size={24} color="#FFF" style={{marginLeft: 5}} />
              <Text style={{ color: '#FFF', fontSize: 16, marginHorizontal: 10, fontWeight:'bold' }}>Annuler</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.blueBtnSend, { backgroundColor: '#06B0C7', height: 50, paddingHorizontal: 5, marginLeft: 10 }]}>
              <MaterialIcons name="save" size={24} color="#FFF" />
              <Text style={{ color: '#FFF', fontSize: 16, marginHorizontal: 10, fontWeight:'bold', paddingLeft: 15 }}>Enregistrer l'offre</Text>
            </TouchableOpacity>
          </View>
      </View>
    </View>
  );
}

export default AddOffert;
