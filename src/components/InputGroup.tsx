import React from 'react';
import {
  KeyboardTypeOptions,
  Text,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';

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
    <View>
      {!!label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.textInput}
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

const styles = StyleSheet.create({
  label: { marginVertical: 9, fontSize: 16 },
  textInput: {
    borderRadius: 3,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    paddingVertical: 9,
    paddingHorizontal: 9,
  },
});

export default InputGroup;
