import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

interface ButtonProps {
  children: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 4,
    paddingVertical: 4,
    marginTop: 2,
    backgroundColor: 'purple',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});

export default Button;
