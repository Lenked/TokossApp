import React from 'react';
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { Octicons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from '../../Styles';
import AppBar from '../../components/AppBar';
import SuggestionDescription from '../../components/SuggestionDescription';

const SuggestionListWithDelBtn = () => {
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
          <SuggestionDescription
            title={'Du nouveau a transparency'}
            subDescription={'10-12-2021'}
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived"}
            showBtn={true}
           />
        </View>
      </View>
    </View>
  );
}

export default SuggestionListWithDelBtn;
