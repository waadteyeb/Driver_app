import { View, Text } from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton/CustomButton';

const SocialSignInButtons = () => {
  const onSignInFacebook=()=>{
    console.warn('facebook');
  
   };
   const onSignInGoogle=()=>{
    console.warn('google');
  
   };
   const onSignInApple=()=>{
    console.warn('apple');
  
   };


  return (
 <>
  

   <CustomButton 
   text="Continuer avec Google" 
   onPress={onSignInGoogle}
    bgColor="#FCFCFC" 
    fgColor="#040105"
    iconName="google"  />
   <CustomButton
    text="Continuer avec Apple"
     onPress={onSignInApple} 
     bgColor="#FCFCFC"
      fgColor="#040105" 
      iconName="apple"  />
    <CustomButton 
   text="Continuer avec Facebook"
    onPress={onSignInFacebook}
     bgColor="#FCFCFC" 
     fgColor="#040105" 
     iconName="facebook" 
     />
 </>
  )
}

export default SocialSignInButtons;