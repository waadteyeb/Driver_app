import React, { useState } from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import{useForm} from 'react-hook-form';


const InfoPersonnal= ()=>{
 const {control,handleSubmit}=useForm();
 const [isVTCSelected, setVTCSelected] = useState(false);

 const navigation=useNavigation();
 

 

 const onRegisterPressed=()=>{
  navigation.navigate('InfoConnexion');
 }
 


 return( 
<ScrollView scrollEnabled={false} showsVerticalScrollIndicator={false} contentContainerStyle={style.scrollContainer} >

 <View style={style.root}>
 
  <Text style={style.title}>Informations personnels</Text>

  <Text style={style.label}>Nom</Text>
   <CustomInput
   name="username" 
   control={control}
   placeholder="votre nom" 
   rules={{required:'nom est requis',
   minLength:{value:3,message:"le nom d'utilisateur doit comporter au moins 3 caractères"},
   maxLength:{value:24,message:"le nom d'utilisateur doit contenir au maximum 24 caractères"}
   }}
   />

  <Text style={style.label}>Prénom</Text>
   <CustomInput 
   name="prenom"
   control={control}
   placeholder="Votre prénom" 
   rules={{required:'prénom est requis',
   minLength:{value:3,message:"le nom d'utilisateur doit comporter au moins 3 caractères"},
   maxLength:{value:24,message:"le nom d'utilisateur doit contenir au maximum 24 caractères"}
   }}
   />

<Text style={style.label}>Date de naissance</Text>
   <CustomInput 
   name="naissance"
   control={control}
   placeholder="JJ/MM/AAAA" 
   rules={{required:'date de naissance est requise',
   minLength: {
      value: 10, 
      message: 'La date de naissance doit être au format JJ/MM/AAAA', 
    },
   }}  
   />

  
    <Text style={style.label}>Adresse</Text>
    <CustomInput 
    name="adresse"
    control={control}
    placeholder="Votre adresse" 
    rules={{required:'adresse est requise'}}
    />
<CustomButton 
    text="VTC" 
        onPress={() => {
                    setVTCSelected(true);
                }}
                type={isVTCSelected ? 'SECONDARY' : 'PRIMARY'}
                bgColor={isVTCSelected ? 'white' : undefined}
                fgColor={isVTCSelected ? '#A36CB6' : undefined}  />
  
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
    borderRadius: 10, // Adjust the border radius as needed
   
  },
buttonnContainer:{
  flexDirection:'center',
  justifyContent: 'center', 
  marginTop: 10,
}


})
export default InfoPersonnal ;