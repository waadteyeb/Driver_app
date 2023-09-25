import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../Screens/SignUpScreen';
import InfoPersonnal from '../Screens/InfoPersonnal';
import ProgressBar from '../components/ProgressBar/ProgressBar'
import InfoConnexion from '../Screens/InfoConnexion';
import ConfirmNum from '../Screens/ConfirmNum';
import VerifIdentity from '../Screens/VerifIdentity';





const Stack = createStackNavigator();


const navigation = () => {
  const totalSteps = 5; 
  const currentStep1 = 1; 
  const currentStep2 = 2;
  const currentStep3 = 3;
  const currentStep4 = 4;

  return (
  <NavigationContainer>
    <Stack.Navigator >
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown:false}} />
            <Stack.Screen name="InfoPersonnal" component={InfoPersonnal} 
                  options={{
                  headerShown: true,
                  header: () => (
                    <ProgressBar currentStep={currentStep1} totalSteps={totalSteps} />
                  ),
              }} />
          
                
          
      <Stack.Screen name="InfoConnexion" component={InfoConnexion} 
         options={{
                  headerShown: true,
                  header: () => (
                    <ProgressBar currentStep={currentStep2} totalSteps={totalSteps} />
                  ),
              }}
      />
      <Stack.Screen name="ConfirmNum" component={ConfirmNum} 
        options={{
                  headerShown: true,
                  header: () => (
                    <ProgressBar currentStep={currentStep3} totalSteps={totalSteps} />
                  ),
              }}
      />
      <Stack.Screen name="VerifIdentity" component={VerifIdentity} options={{
                  headerShown: true,
                  header: () => (
                    <ProgressBar currentStep={currentStep4} totalSteps={totalSteps} />
                  ),
              }} />
      {/*<Stack.Screen name="VerifVTC" component={VerifVTC} />
      <Stack.Screen name="VerifVehicule" component={VerifVehicule} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Trafication" component={Trafication} />
      <Stack.Screen name="Vehicule" component={Vehicule} />*/}
      
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default navigation;