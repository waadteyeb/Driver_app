import React, { useRef,useState } from 'react';
import { useRoute } from '@react-navigation/native';
import {View,Text,StyleSheet,ScrollView,StatusBar ,TextInput,TouchableOpacity} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import{useForm} from 'react-hook-form';
import VerifIdentity from '../VerifIdentity/VerifIdentity';




const ConfirmNum= ()=>{
 const {control,handleSubmit}=useForm();
 const EMAIL_REGEX=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 const navigation=useNavigation();
 const route = useRoute();
 const { phone } = route.params;
 const firstInput = useRef();
 const secondInput = useRef();
 const thirdInput = useRef();
 const fourthInput = useRef();
 const fithInput = useRef();
 const sixInput = useRef();
 const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: '',5:'',6:''});
 

 

 const onRegisterPressed=()=>{
  navigation.navigate('VerifIdentity')
 }
 


 return( 
<ScrollView scrollEnabled={false} showsVerticalScrollIndicator={false} contentContainerStyle={style.scrollContainer} >

 <View style={style.root}>
 
  <Text style={style.title}>Confirmer votre numéro</Text>

  <Text style={style.text}>Nous vous avons envoyé un numéro de vérification OTP sur votre numéro de téléphone</Text>

  <Text style={style.label}>Code de vérification OTP</Text>
  <Text style={style.text}>Entrez le code de vérification envoyé à <Text style={style.phone}>{phone}</Text></Text>
  <View style={style.otpContainer}>
        <View style={style.otpBox}>
          <TextInput
            style={style.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={firstInput}
            onChangeText={text => {
              setOtp({...otp, 1: text});
              text && secondInput.current.focus();
            }}
          />
        </View>
        <View style={style.otpBox}>
          <TextInput
            style={style.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={secondInput}
            onChangeText={text => {
              setOtp({...otp, 2: text});
              text ? thirdInput.current.focus() : firstInput.current.focus();
            }}
          />
        </View>
        <View style={style.otpBox}>
          <TextInput
            style={style.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={thirdInput}
            onChangeText={text => {
              setOtp({...otp, 3: text});
              text ? fourthInput.current.focus() : secondInput.current.focus();
            }}
          />
        </View>
        <View style={style.otpBox}>
          <TextInput
            style={style.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={fourthInput}
            onChangeText={text => {
              setOtp({...otp, 4: text});
              text ? fithInput.current.focus() : thirdInput.current.focus();
            }}
          />
        </View>
        <View style={style.otpBox}>
          <TextInput
            style={style.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={fithInput}
            onChangeText={text => {
              setOtp({...otp, 5: text});
              text ? sixInput.current.focus() : fourthInput.current.focus();
            }}
          />
        </View>
        <View style={style.otpBox}>
          <TextInput
            style={style.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={sixInput}
            onChangeText={text => {
              setOtp({...otp, 6: text});
              !text && fithInput.current.focus();
            }}
          />   
        </View>
      </View>
      <Text style={style.text}>Vous n'avez pas reçu de code ?</Text> 
      <TouchableOpacity
        onPress={() => console.log(otp)}>
        <Text style={style.phone}>Vous pouvez en renvoyez un dans 55s</Text>
      </TouchableOpacity> 

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
  phone:{
    color:'#A36CB6',
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
otpContainer: {
    marginHorizontal: 3,
    marginBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
   
   
    
  },
  otpBox: {
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 0.5,
    
  },
  otpText: {
    fontSize: 25,
    color: 'black',
    padding: 0,
    textAlign: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  signinButton: {
    backgroundColor: 'black',
    borderRadius: 8,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signinButtonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: 'gray',
   
  },



})
export default ConfirmNum ;