import { View, Text,StyleSheet,Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

const CustomButton = ({onPress,text,type="PRIMARY",bgColor,fgColor,iconName}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container,
    styles[`container_${type}`],
    bgColor ?{backgroundColor:bgColor}:{}
    ]}>
       
       <View style={styles.buttonContents}>
        {iconName && <Icon name={iconName} size={20} color={fgColor} style={styles.icon} />}
        <Text style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? { color: fgColor } : {}
        ]}>
          {text}
        </Text>
      </View>
      
    </Pressable>
  )
}

const styles=StyleSheet.create({
  container:{
    backgroundColor:'#A36CB6',
    

    width:'100%',
    padding:15,
    marginVertical:5,
    alignItems:'center',
    borderRadius:20,
    
  },

  container_SECONDARY :{
    backgroundColor:'white',

    borderColor:'#A36CB6',
    borderWidth:2,
  },
    

  
  container_PRIMARY:{
    backgroundColor:'#A36CB6',
    
  },
  container_TERITARY:{
    backgroundColor:'#FCFCFC',

  },

  text:{
    fontWeight:'bold',
    color:'white',
  

  },
  text_TERITARY:{
    color:'gray'

  },
  text_SECONDARY:{
    color:'#A36CB6',
  },
  buttonContents: {
    flexDirection: 'row', // Display icon and text side by side
    alignItems: 'center', // Center contents vertically
  },
  icon: {
    marginRight: 10, // Add margin to separate icon and text
  }
})

export default CustomButton;