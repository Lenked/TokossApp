import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons"
import {styles as styler} from '../../Styles'


const NotificationDescription = ({ title, subDescription, description, showBtn }) => {
  return (
    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-around'}}>
      <Image source={require('../../assets/images/icon_user_profil.jpeg')} style={styles.iconNotif} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subDescription}>{subDescription}</Text>
        <Text style={styles.description}>{description}</Text>
        {
          showBtn ? (
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                <TouchableOpacity style={styler.redDelBtn}>
                  <FontAwesome5 name="trash" size={24} color="#FFF" />
                  <Text style={{color: '#FFF', fontSize: 16, marginHorizontal: 10}}>Supprimer</Text>
                </TouchableOpacity>
            </View>
          ) : null
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconNotif: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  title: {
    color: '#9E9FA1',
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    color: '#9E9FA1',
    fontSize: 15,
    fontWeight: '400',
    paddingVertical: 20,
    width: 250,
  },
  subDescription: {
    color: '#9E9FA1',
    fontSize: 13,
    fontWeight: '300',
  }
})

export default NotificationDescription;
