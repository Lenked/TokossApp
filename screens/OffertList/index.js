import React, { useState } from 'react';
import { Button, Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { Octicons, Ionicons, MaterialCommunityIcons, AntDesign, MaterialIcons, FontAwesome6 } from '@expo/vector-icons';
import { styles } from '../../Styles';
import AppBar from '../../components/AppBar';
import Input from "./../../components/Input"
import IconInput from '../../components/IconInput';
import DropdownComp from '../../components/DropdownComp';
import VerticalCard from '../../components/VerticalCard';
import { FontAwesome5 } from "@expo/vector-icons"
import HorizontalBar from '../../components/HorizontalBar';

const OffertList = () => {
  return (
    <View style={styles.verticalContainer}>
      <StatusBar />
      <AppBar
        leftComponent={<TouchableOpacity><AntDesign name="left" size={35} color="#7F7F7F" /></TouchableOpacity>}
        rightComponent={
          <View style={styles.rowContainer}>
            <TouchableOpacity>
              <Image source={require('./../../assets/images/profil_img.png')} style={{ width: 70, height: 70, borderRadius: 10 }} />
            </TouchableOpacity>
            <Text style={[styles.textTItle, { fontSize: 16, marginHorizontal: 10 }]}>{"Andrey wanad"}</Text>
          </View>
        }
        title="Tokoss App"
      />
      <View style={[styles.verticalContainer, { paddingHorizontal: 10 }]}>
      <View style={styles.banner}>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.bannerText}>02</Text>
              <Text style={[styles.bannerText2, styles.textTItle, {fontSize: 15}]}>Mes offres enregistrés</Text>
            </View>
            <TouchableOpacity style={{backgroundColor: '#04b2c4', padding: 15, borderRadius: 10, marginHorizontal: 5, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <MaterialCommunityIcons name="plus" size={24} color="white" style={{ }} />
              <Text style={{color: '#FFF', fontSize: 17, fontWeight: 'bold'}}>Offre</Text>
            </TouchableOpacity>
        </View>
        <View style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10}}>
          <View style={{backgroundColor: '#FFF', padding: 10, width: 150, borderRadius: 10, marginVertical: 10}}>
            <View style={[styles.flexRowElement, {alignItems: 'center', }]}>
              <Text style={[styles.bannerText, {color: '#888888', fontSize: 25}]}>2500</Text>
              <Text style={{fontSize: 20, marginHorizontal: 5, color: '#C4C4C4', fontWeight: 'bold'}}>xaf</Text>
            </View>
            <Text style={{width: 80, fontSize: 15, color: '#C4C4C4', fontWeight: 'bold', marginBottom: 10}}>Mololo vers Etoudi</Text>
            <View style={[styles.flexRowElement, {backgroundColor: '#06B0C7', justifyContent: 'space-between', borderRadius: 10, padding: 5, marginVertical: 2}]}>
              <Text style={{color: '#FFF', fontWeight: 'bold'}}>Accepter</Text>
              <Text style={{color: '#FFF', fontWeight: 'bold'}}>02</Text>
            </View>
            <View style={[styles.flexRowElement, {backgroundColor: '#005F99', justifyContent: 'space-between', borderRadius: 10, padding: 5, marginVertical: 2}]}>
              <Text style={{color: '#FFF', fontWeight: 'bold'}}>Proposition</Text>
              <Text style={{color: '#FFF', fontWeight: 'bold'}}>10</Text>
            </View>
          </View>
          <View style={{backgroundColor: '#FFF', padding: 10, width: 150, borderRadius: 10}}>
            <View style={[styles.flexRowElement, {alignItems: 'center', }]}>
              <Text style={[styles.bannerText, {color: '#888888', fontSize: 25}]}>2500</Text>
              <Text style={{fontSize: 20, marginHorizontal: 5, color: '#C4C4C4', fontWeight: 'bold'}}>xaf</Text>
            </View>
            <Text style={{width: 100, fontSize: 15, color: '#C4C4C4', fontWeight: 'bold', marginBottom: 10}}>Carrefour PK vers Manguier</Text>
            <View style={[styles.flexRowElement, {backgroundColor: '#06B0C7', justifyContent: 'space-between', borderRadius: 10, padding: 5, marginVertical: 2}]}>
              <Text style={{color: '#FFF', fontWeight: 'bold'}}>Accepter</Text>
              <Text style={{color: '#FFF', fontWeight: 'bold'}}>00</Text>
            </View>
            <View style={[styles.flexRowElement, {backgroundColor: '#005F99', justifyContent: 'space-between', borderRadius: 10, padding: 5, marginVertical: 2}]}>
              <Text style={{color: '#FFF', fontWeight: 'bold'}}>Proposition</Text>
              <Text style={{color: '#FFF', fontWeight: 'bold'}}>02</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default OffertList;
