import React from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppBar from '../../components/AppBar';
import { Octicons, Ionicons, MaterialCommunityIcons, AntDesign, MaterialIcons } from '@expo/vector-icons';
import Input from '../../components/Input';
import { styles } from '../../Styles';

const AccountDetails = () => {
  return (
    <View style={styles.verticalContainer}>
      <View style={[styles.rowElement, {marginVertical: 40}]}>
        <AntDesign name="user" size={35} color="#08B3C3" />
        <Text style={{fontSize: 25, color: '#08B3C3', fontWeight: 'bold', paddingHorizontal: 10}}>Mon compte</Text>
      </View>
      <View style={{display: 'flex', justifyContent: 'center', width: '100%', flexDirection: 'row'}}>
        <View style={[styles.flexRowElement, styles.cardProfile]}>
          <TouchableOpacity>
            <Image source={require('./../../assets/images/profil_img.png')} style={{width: 70, height: 70, borderRadius: 10}} />            
          </TouchableOpacity>
          <View >
            <View style={[styles.flexRowElement, {alignItems: 'center'}]}>
              <Text style={[styles.textTItle, {fontSize: 16, marginTop: 20, fontSize: 20}]}>Andrey wanad</Text>
              <MaterialCommunityIcons name="pencil" size={20} color="#06B0C7" style={{paddingTop: 18, paddingLeft: 10}} />
            </View>
            <Text style={[styles.textTItle, {fontSize:13, fontWeight: '700'}]}>Andreynad@gmail.com</Text>
          </View>
        </View>
      </View>
      <View style={[styles.rowElement, {marginVertical: 40}]}>
        <MaterialCommunityIcons name="pencil" size={35} color="#06B0C7" />
        <Text style={{fontSize: 25, color: '#08B3C3', fontWeight: 'bold', paddingHorizontal: 10}}>Gestion</Text>
      </View>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10}}>
        <TouchableOpacity style={{backgroundColor: '#FFF', alignItems: 'center', padding: 25, display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
         <MaterialCommunityIcons name="email-outline" size={50} color="#06B0C7" />
         <Text style={{marginTop: 30, color: '#B2B3B3', fontWeight: 'bold'}}>Mot de passe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: '#FFF', alignItems: 'center', padding: 25, display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
         <Ionicons name="camera-sharp" size={50} color="#06B0C7" />
         <Text style={{marginTop: 30, color: '#B2B3B3', fontWeight: 'bold', paddingHorizontal: 25}}>Photo</Text>
        </TouchableOpacity>
      </View>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginVertical: 10, marginHorizontal: 22}}>
        <TouchableOpacity style={{backgroundColor: '#FFF', alignItems: 'center', padding: 25, display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
         <MaterialIcons name="lock" size={50} color="#06B0C7" />
         <Text style={{marginTop: 30, color: '#B2B3B3', fontWeight: 'bold'}}>Mot de passe</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AccountDetails;
