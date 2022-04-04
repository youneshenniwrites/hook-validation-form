import React from 'react';
import { KeyboardTypeOptions, Text, TextInput, View } from 'react-native';

interface InputGroupProps {
  label?: string;
  placeholder?: string;
  value: string;
  password?: boolean;
  type?: KeyboardTypeOptions;
  onChangeText: (value: string) => void;
  onBlur?: () => void;
}

const InputGroup: React.FC<InputGroupProps> = ({
  label,
  placeholder,
  value,
  password,
  type = 'default',
  onChangeText,
  onBlur,
}) => {
  return (
    <View style={{}}>
      {!!label && <Text style={{}}>{label}</Text>}
      <TextInput
        style={{}}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        secureTextEntry={password}
        keyboardType={type}
      />
    </View>
  );
};

export default InputGroup;
