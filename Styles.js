import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  verticalContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F4F5F9'
  },
  rowElement: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'flex-start',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#F4F5F9'
  },
  columnElement: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 15
  },
  blueBtnSend: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#005F99',
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 15
  },
  redDelBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FC6061',
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 15
  },
  textTItle: {
      color: '#9E9FA1',
      fontSize: 20,
      fontWeight: 'bold',
  },
  labelCard: {
    color: '#005D98',
    fontWeight: 'bold',
    fontSize: 16,
  },
  valueTextCard: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16
  },
  flexRowElement: {
    display: 'flex',
    flexDirection: 'row'
  },
  btnCard: {
    backgroundColor: '#FFF',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 15,
    padding: 10,
    width: 150
  },
  btnText: {
    color: '#06B0C7',
    fontWeight: 'bold',
    paddingRight: 20
  },
  descriptionText: {
    color: '#9E9FA1',
    fontSize: 15,
    fontWeight: '400',
    paddingVertical: 20,
    width: 250,
  },
  cardProfile: {
    backgroundColor: '#FFF',  // Couleur de fond
    borderRadius: 16,  // Rayon de la bordure
    padding: 16,  // Espacement intérieur
    shadowColor: '#A5B3C8',  // Couleur de l'ombre
    shadowOffset: {
      width: -8,
      height: -8,
    },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 8, 
    paddingHorizontal: 40
  },
  bannerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  bannerText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#005D98',
  },
  bannerText2: {
    width: 100,
    marginHorizontal: 10
  },
})