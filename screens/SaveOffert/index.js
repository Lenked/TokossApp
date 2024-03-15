import React, { useState } from 'react';
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { Octicons, Ionicons, MaterialCommunityIcons, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { styles } from '../../Styles';
import AppBar from '../../components/AppBar';
import Input from"./../../components/Input"
import IconInput from '../../components/IconInput';

const SaveOffert = () => {
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')
  const [urgency, setUrgency] = useState('')

  const handleDescriptionChange = (text) => {
    setDescription(text)
  }

  const handleUrgencyChange = (text) => {
    setUrgency(text)
  }

  const handlePriceChange = (text) => {
    setPrice(parseFloat(text));

    const newPrice = parseFloat(text);
    if (!isNaN(newPrice) && newPrice >= 0) {
      setPrice(newPrice);
    } else if(isNaN(newPrice) || newPrice <= 0) {
      // Si la nouvelle valeur n'est pas valide, affecter la valeur 0
      setPrice(0);
    } else {
      setPrice(0);
    }

  }

  const handleIncreasePrice = () => {
    setPrice((prevPrice) => prevPrice + 1);
  }

  const handleDecreasePrice = () => {
    setPrice((prevPrice) => prevPrice - 1);
  }

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
        <View style={[styles.rowElement, {margin: 0, padding: 0}]}>
          <MaterialCommunityIcons name="map-marker-check" size={35} color="#78CE30" />
          <Text style={{fontSize: 25, color: '#78CE30', fontWeight: 'bold', paddingHorizontal: 10}}>Finalisation</Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-around'}}>
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
            <TouchableOpacity onPress={handleIncreasePrice}>
              <MaterialCommunityIcons name="plus" size={24} color="white" backgroundColor="#04b2c4" style={{padding: 15, borderRadius: 10, marginHorizontal: 5}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDecreasePrice}>
              <AntDesign name="minus" size={24} color="white" backgroundColor="#04b2c4" style={{padding: 15, borderRadius: 10}} />
            </TouchableOpacity>
        </View>
        <IconInput 
          placeholder="Urgence"
          secureTextEntry={false}
          value={urgency}
          onChangeText={handleUrgencyChange}
          icon={<AntDesign name="right" size={24} color="#7F7F7F" />}
          multiline={false}
          numberLines={1}
          textAlignVertical="center"
          width={"100%"}
        />
        <Input
            placeholder="Description de l'offre"
            secureTextEntry={false}
            value={description}
            onChangeText={handleDescriptionChange}
            multiline={true}
            numberLines={7}
          />
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingRight: 20 }}>
            <TouchableOpacity style={[styles.blueBtnSend, {height: 50, paddingHorizontal: 5}]}>
              <AntDesign name="close" size={24} color="#FFF" style={{marginLeft: 5}} />
              <Text style={{ color: '#FFF', fontSize: 16, marginHorizontal: 10, fontWeight:'bold' }}>Annuler</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.blueBtnSend, { backgroundColor: '#06B0C7', height: 50, paddingHorizontal: 5 }]}>
              <MaterialIcons name="save" size={24} color="#FFF" />
              <Text style={{ color: '#FFF', fontSize: 16, marginHorizontal: 10, fontWeight:'bold' }}>Enregistrer l'offre</Text>
            </TouchableOpacity>
          </View>
      </View>
    </View>
  );
}

export default SaveOffert;
