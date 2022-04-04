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
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginTop: 6,
    backgroundColor: 'purple',
    borderRadius: 3,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Button;
