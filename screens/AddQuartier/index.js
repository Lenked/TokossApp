import React from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppBar from '../../components/AppBar';
import { Octicons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Input from '../../components/Input';
import { styles } from '../../Styles';
import DropdownComp from '../../components/DropdownComp';
const AddQuartier = () => {
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
        leftComponent={<TouchableOpacity><Ionicons name="menu-sharp" size={35} color="#7F7F7F" /></TouchableOpacity>}
        rightComponent={
          <View style={styles.rowContainer}>
            <TouchableOpacity>
              <Image source={require('./../../assets/images/profil_img.png')} style={{ width: 70, height: 70, borderRadius: 10 }} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Octicons name="bell-fill" size={25} color="white" backgroundColor="#04b2c4" style={{ padding: 15, borderRadius: 30 }} />
            </TouchableOpacity>
          </View>
        }
        title="Tokoss App"
      />
      <View style={[styles.verticalContainer, { paddingHorizontal: 10 }]}>
        <Text style={[styles.textTItle, { fontSize: 12, marginVertical: 20 }]}>Choix de quartier</Text>
        <DropdownComp placeholder="Choisir un quartier" items={data} color={'#2A8797'} />
        <DropdownComp placeholder="Choisir un quartier" items={data} color={'#2A8797'} />
        <DropdownComp placeholder="Choisir un quartier" items={data} color={'#2A8797'} />
      </View>
    </View>
  );
}

export default AddQuartier;
