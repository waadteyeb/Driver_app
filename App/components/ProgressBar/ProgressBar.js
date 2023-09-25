import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const stepWidth = 100 / totalSteps;

  return (
    <View style={styles.progressBar}>
      {[...Array(totalSteps)].map((_, index) => (
        <View
          key={index}
          style={[
            styles.step,
            {
              width: stepWidth + '%',
              backgroundColor: index < currentStep ? '#A36CB6' : '#BEBEBE',
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    flexDirection: 'row',
    height: 10,
    marginTop:45,
  
    
   
  },
  step: {
    flex: 1,
    height: '100%',
    flexGrow: 1,
    justifyContent: 'center', 
    marginLeft: 1, 
    marginRight: 1, 
  },
});

export default ProgressBar;

