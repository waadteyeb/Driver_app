import React from 'react';
import {View,Text,Image,StyleSheet,useWindowDimensions,ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import{useForm} from 'react-hook-form';




const SignUpScreen= ()=>{
 
 
 const navigation=useNavigation();

 const {control,handleSubmit,formState:{errors}}=useForm();
 const EMAIL_REGEX=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

 

 const onSignUpPressed=()=>{
  navigation.navigate('InfoPersonnal');
  
  
 }
 

 const onSignInPressed=()=>{
  navigation.navigate('SignIn');

 };

 return( 
<ScrollView scrollEnabled={false} showsVerticalScrollIndicator={false} contentContainerStyle={style.scrollContainer}>

 <View style={style.root}>
 
  <Text style={style.title}>Créer un compte</Text>
  <Text style={style.text} >Commençons la création de votre compte</Text>
  <Text style={style.label}>Email</Text>
 
   <CustomInput 
   name="Email"
   placeholder="Votre adresse mail"
    control={control}
    rules={{pattern:{value:EMAIL_REGEX,message:'Email est invalide'}}} />

   
    

   <CustomButton 
   text="Suivant"
    onPress={handleSubmit(onSignUpPressed)}  />



<View style={{flexDirection: 'row', alignItems: 'center'}}>
  <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
  <View>
    <Text style={{width: 50, textAlign: 'center'}}>Ou</Text>
  </View>
  <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
</View>

   <SocialSignInButtons/>
   <Text style={style.text}>En créant un compte,vous acceptez nos conditions générales d'utilisation et notre politique de confidentialité</Text>
   </View>
   <CustomButton 
   text="Vous avez déja un compte? Se connecter" 
   onPress={onSignInPressed} 
   type="TERITARY" />
 
</ScrollView> 
 );
}

const style=StyleSheet.create({
  root:{
    alignItems:'flex-start',
    padding:20,
    marginTop:50,
    
  },
  title:{
    fontSize:30,
    fontWeight:'bold',
    color:'black',
    
    textAlign: 'left',
    marginBottom:1,
    
  },
  text:{
    color:'gray',
    marginVertical:20,
    textAlign: 'left',
    marginTop:0.1,
    
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between', // Align content vertically at the ends
  },
  label: {
    fontSize: 15,
    fontWeight:'bold',
    color: 'black',
    marginVertical: 5,
    textAlign: 'left', 
  },
})
export default SignUpScreen ;