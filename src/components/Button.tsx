import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

interface ButtonProps {
  children: string;
  type?: 'primary' | 'secondary';
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{}}>
        <Text style={{}}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});

export default Button;
