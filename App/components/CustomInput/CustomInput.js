import { View, Text,StyleSheet,TextInput ,TouchableOpacity} from 'react-native';
import React,{useState}from 'react';
import{Controller} from 'react-hook-form';
import Icon from 'react-native-vector-icons/FontAwesome';







const CustomInput = ({control,name,placeholder,rules= {},secureTextEntry,selectedDocument}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  
 
  
return(
  
  <Controller
  control={control}
  name={name}
  rules={rules}
  render={({field:{value,onChange,onBlur},fieldState:{error}}) =>(
<>
  <View style={[styles.container,{borderColor:error?'#A36CB6':'#e8e8e8'}]}>
    <TextInput 
      value={value}
      onChangeText={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      style={styles.input}
      secureTextEntry={!isPasswordVisible && secureTextEntry}
    />
    {secureTextEntry && (
              <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconContainer}>
                <Icon
                  name={isPasswordVisible ? 'eye' : 'eye-slash'}
                  size={20}
                  color={isPasswordVisible ? '#A36CB6' : 'black'}
                />
              </TouchableOpacity>
            )}

                          
  </View>
   

   {error&&(<Text style={{color:'#A36CB6',alignSelf:'stretch'}}>{error.message ||'Error'}</Text>)}
</>
  )}




  />
  
)
    
  
};

const styles=StyleSheet.create({
  container:{
    backgroundColor:'white',
    width:'100%',
    height: 45,

    flexDirection: 'row',
    borderColor:'#e8e8e8',
    borderWidth:1,
    borderRadius:10,
    marginBottom: 12,
    marginTop:12,
    paddingHorizontal:10,
    marginVertical:8,

  },
  input:{
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 1,
    
  },
  iconContainer: {
    padding: 10,
    
  },
  selectedDocumentContainer: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedDocumentText: {
    color: 'black',
    marginLeft: 10,
  },
})
export default CustomInput