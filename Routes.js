import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import AddSuggestion from './screens/AddSuggestion';
import NotificationList from './screens/Notification';
import NotificationListWithDel from './screens/NotificationWithDeleteButton';
import SuggestionList from './screens/Suggestion';
import SuggestionListWithDelBtn from './screens/SuggestionWithDeleteButton';
import SaveOffert from './screens/SaveOffert';
import Livraison from './screens/Livraison';
import AddOffert from './screens/AddOffert';
import DetailsOffert from './screens/DetailsOffert';
import AccountDetails from './screens/AccountDetails';
import OffertList from './screens/OffertList';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AddQuartier from './screens/AddQuartier';

// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName='AddQuartier'
      >
        <Drawer.Screen name="AddQuartier" component={AddQuartier} options={{ headerShown: false }} />
        <Drawer.Screen name="AccountDetails" component={AccountDetails} options={{ headerShown: false }} />
        <Drawer.Screen name="OffertList" component={OffertList} options={{ headerShown: false }} />
        <Drawer.Screen name="DetailsOffert" component={DetailsOffert} options={{ headerShown: false }} />
        <Drawer.Screen name="AddOffert" component={AddOffert} options={{ headerShown: false }} />
        <Drawer.Screen name="livraison" component={Livraison} options={{ headerShown: false }} />
        <Drawer.Screen name="saveOffert" component={SaveOffert} options={{ headerShown: false }} />
        <Drawer.Screen name="SuggestionDel" component={SuggestionListWithDelBtn} options={{ headerShown: false }} />
        <Drawer.Screen name="Suggestion" component={SuggestionList} options={{ headerShown: false }} />
        <Drawer.Screen name="NotificationDel" component={NotificationListWithDel} options={{ headerShown: false }} />
        <Drawer.Screen name="Notification" component={NotificationList} options={{ headerShown: false }} />
        <Drawer.Screen name="SendSuggestion" component={AddSuggestion} options={{ headerShown: false }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
