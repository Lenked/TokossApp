import React, { useState } from 'react';
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { Octicons, Ionicons, MaterialCommunityIcons, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { styles } from '../../Styles';
import AppBar from '../../components/AppBar';
import Input from"./../../components/Input"
import IconInput from '../../components/IconInput';
import DropdownComp from '../../components/DropdownComp';
import VerticalCard from '../../components/VerticalCard';
import { FontAwesome5 } from "@expo/vector-icons"
import HorizontalBar from '../../components/HorizontalBar';

const DetailsOffert = () => {
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
      <View style={[styles.verticalContainer, {paddingHorizontal: 10}]}>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 20}}>
          <VerticalCard
            text1={"De"} 
            text2={"Ville1"}
            text3={"Quartier1"}
            backgroundColor={"#FFF"}
            secondaryColor={"#71CE63"}
          />
          <AntDesign name="right" size={30} color="#888888" />
          <VerticalCard
            text1={"A"} 
            text2={"Ville2"}
            text3={"Quartier2"}
            backgroundColor={"#71CE63"}
            secondaryColor={"#FFF"}
          />
        </View>
        <View style={{backgroundColor: '#06B0C7', borderRadius: 20, padding: 10}}>
          <Text style={styles.labelCard}>Prix</Text>
          <View style={[styles.flexRowElement, {alignItems: 'flex-end'}]}>
            <Text style={[styles.valueTextCard, {fontSize: 30}]}>2500</Text>
            <Text style={[styles.valueTextCard, {paddingBottom: 5, marginStart: 5}]}>xaf</Text>
          </View>
          <View style={styles.flexRowElement}>
            <Text style={styles.labelCard}>Urgence de l'offre : </Text>
            <Text style={styles.valueTextCard}>maintenant</Text>
          </View>
          <View style={[styles.flexRowElement, {justifyContent:'space-between', marginTop: 20}]}>
            <TouchableOpacity style={styles.btnCard}>
              <MaterialCommunityIcons name="pencil" size={24} color="#06B0C7" />
              <Text style={styles.btnText}>Modifier</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCard}>
              <FontAwesome5 name="trash" size={20} color="#06B0C7" />
              <Text style={styles.btnText}>Supprimer</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={[styles.textTItle, {fontSize: 16, marginTop: 20}]}>{"Description de l'offre"}</Text>
          <HorizontalBar backgroundColor={"#FFF"} />
          <Text style={[styles.descriptionText, {width: '100%'}]}>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived"}</Text>
        </View>
      </View>
    </View>
  );
}

export default DetailsOffert;
