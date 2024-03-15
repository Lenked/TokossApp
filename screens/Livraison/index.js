import React, { useState } from 'react';
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { Octicons, Ionicons, MaterialCommunityIcons, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { styles } from '../../Styles';
import AppBar from '../../components/AppBar';
import Input from"./../../components/Input"
import IconInput from '../../components/IconInput';
import DropdownComp from '../../components/DropdownComp';

const Livraison = () => {
  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
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
        <View>
          <View style={[styles.rowElement, {padding: 0}]}>
            <MaterialIcons name="my-location" size={34} color="#05AFC7" />
            <Text style={[styles.textTItle, {color: '#05AFC7', paddingHorizontal: 10, fontSize: 25}]}>Départ</Text>
          </View>
          <DropdownComp placeholder="Ville" items={data} color={'#06B0C7'} />
          <DropdownComp placeholder="Quartier" items={data} color={'#06B0C7'} />
        </View>
        <View style={{marginTop: 25}}>
          <View style={[styles.rowElement, {padding: 0}]}>
            <MaterialIcons name="my-location" size={34} color="#036099" />
            <Text style={[styles.textTItle, {color: '#036099', paddingHorizontal: 10, fontSize: 25}]}>Arrivé</Text>
          </View>
          <DropdownComp placeholder="Ville" items={data} color={'#036099'} />
          <DropdownComp placeholder="Quartier" items={data} color={'#036099'} />
        </View>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
            <TouchableOpacity style={[styles.blueBtnSend, {backgroundColor: '#06B0C7'}]}>
              <Text style={{color: '#FFF', fontSize: 16, marginHorizontal: 10, fontWeight: 'bold'}}>Suivant</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Livraison;
