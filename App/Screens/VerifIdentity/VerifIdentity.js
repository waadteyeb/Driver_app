import React, { useState } from 'react';
import {View,Text,StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import{useForm} from 'react-hook-form';
import * as DocumentPicker from 'expo-document-picker';








const VerifIdentity= ()=>{
 const {control,handleSubmit}=useForm();
 const [selectedDocument, setSelectedDocument] = useState(null);


 const navigation=useNavigation();
 const onDocumentPick = async () => {
  try {
    const result = await DocumentPicker.getDocumentAsync();
    console.log('Document Picker Result:', result);
    if (result.type === 'success') {
      console.log('Selected Document:', result);
      setSelectedDocument(result);
    }
  } catch (error) {
    console.error('Error picking a document:', error);
  }
};
 
 

 const onRegisterPressed=()=>{
   
      console.log(selectedDocument);
    
 }
 


 return( 
<ScrollView scrollEnabled={false} showsVerticalScrollIndicator={false} contentContainerStyle={style.scrollContainer} >

 <View style={style.root}>
 
  <Text style={style.title}>Vérification de votre identité</Text>
  <Text style={style.text}>La vérification de vos documents peut prendre de 24 à 72h</Text>
  <Text style={style.label}>Document identité(carte d'identité,passeport...)</Text>
  
  <TouchableOpacity onPress={onDocumentPick} >
          <Text style={style.label}>Sélectionner un document</Text>
        </TouchableOpacity>

        {selectedDocument && (
          <View>
            <Text style={style.text}>Document Name: {selectedDocument.name}</Text>
            <Text style={style.text}>URI: {selectedDocument.uri}</Text>
            <Text style={style.text}>Type: {selectedDocument.type}</Text>
            <Text style={style.text}>Size: {selectedDocument.size} bytes</Text>
        </View> 
        )}

  
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
},
iconContainer: {
    marginRight: 10,
  },
  selectedDocumentText: {
    marginTop: 10,
    color: 'green',
  },


})
export default VerifIdentity ;