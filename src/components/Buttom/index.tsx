import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    ActivityIndicator    
} from 'react-native';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
  isLoading:boolean;
}

export function Buttom({isLoading, ...rest}:Props) {
  return (
    <TouchableOpacity 
      style={styles.container}
      {...rest}
      >
      {
        isLoading
          ?
        <ActivityIndicator />
        :
        <Text>
          Enviar Feedback
        </Text>
      }
    </TouchableOpacity>
  );
}