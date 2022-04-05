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
  error?: boolean;
  errorDetails?: string;
}

const InputGroup: React.FC<InputGroupProps> = ({
  label,
  placeholder,
  value,
  password,
  type = 'default',
  onChangeText,
  onBlur,
  error = false,
  errorDetails,
}) => {
  return (
    <View>
      {!!label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.textInput, { borderColor: error ? 'red' : 'white' }]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        secureTextEntry={password}
        keyboardType={type}
      />
      {!!errorDetails && <Text style={styles.error}>{errorDetails}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  label: { marginVertical: 9, fontSize: 16 },
  textInput: {
    borderRadius: 3,
    borderWidth: 1,
    paddingVertical: 9,
    paddingHorizontal: 9,
  },
  error: {
    marginTop: 9,
    color: 'red',
    // fontSize: 16,
  },
});

export default InputGroup;
