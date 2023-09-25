import React, { useState } from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import{useForm} from 'react-hook-form';




const InfoConnexion= ()=>{
 const {control,handleSubmit}=useForm();

 const EMAIL_REGEX=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

 const navigation=useNavigation();
 

 

 const onRegisterPressed=(data)=>{
  console.log(data.phone);
  navigation.navigate('ConfirmNum',{ phone: data.phone })
 }
 


 return( 
<ScrollView scrollEnabled={false} showsVerticalScrollIndicator={false} contentContainerStyle={style.scrollContainer} >

 <View style={style.root}>
 
  <Text style={style.title}>Informations de connexion</Text>

  <Text style={style.label}>Email</Text>
   <CustomInput
   name="Email" 
   control={control}
   placeholder="votre adresse mail" 
   rules={{pattern:{value:EMAIL_REGEX,message:'Email est invalide'}}}
   />

  <Text style={style.label}>Téléphone</Text>
   <CustomInput 
   name="phone"
   control={control}
   placeholder="+33 6 45 79 22 45" 
   rules={{required:'numéro de téléphone est requis',
   }}
   
   />
 <Text style={style.label}>Mot de passe</Text>  
   <CustomInput
   name="password"
   placeholder="mot de passe"
   secureTextEntry
   control={control}
   rules={{required:'Password is required',minLength:{value:5,message:"Le mot de passe doit comporter au minimum 5 caractères"}}}
   />

<Text style={style.label}>Confirmer le mot de passe</Text>  
   <CustomInput
   name="Confirmpassword"
   placeholder="confirmer mot de passe"
   secureTextEntry
   control={control}
   rules={{required:'Password is required',minLength:{value:5,message:"Le mot de passe doit comporter au minimum 5 caractères"}}}
   />
  
 </View>
 <View style={style.buttonContainer}>
        <CustomButton
          text="Suivant"
          onPress={handleSubmit(onRegisterPressed)}
        />
 </View>
</ScrollView> 
 );
}

const style=StyleSheet.create({
  root:{
    alignItems:'flex-start',
    padding:20,
    marginTop:10,
   
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
    justifyContent: 'space-between', 
    
  },
  label: {
    fontSize: 15,
    fontWeight:'bold',
    color: 'black',
    marginVertical: 5,
    textAlign: 'left', 
  },
  
  link:{
    color:'#FBD075',
  },
  buttonContainer: {
    alignItems: 'flex-start', 
    marginTop: 2, 
    padding:20
  },
  buttonsContainer: {
    justifyContent: 'center', 
    marginTop: 10, 
    marginVertical:20,
    marginHorizontal:10,
    width: '43%', 
    height: 100, 
    borderRadius: 10, 
   
  },
buttonnContainer:{
  flexDirection:'center',
  justifyContent: 'center', 
  marginTop: 10,
},



})
export default InfoConnexion ;