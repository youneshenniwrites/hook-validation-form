import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from '../components/Button';
import InputGroup from '../components/InputGroup';

interface CreateAccountProps {}

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const CreateAccount: React.FunctionComponent<
  CreateAccountProps
> = ({}) => {
  // * Create a Yup validation schema for error handeling
  const validateSchema = Yup.object({
    firstName: Yup.string().required('Enter your first name'),
    lastName: Yup.string().required('Enter your last name'),
    email: Yup.string()
      .email('Enter a valid email address')
      .required('Enter an email address'),
    password: Yup.string()
      .min(6, 'Enter at least six characters')
      .required('Enter your password'),
    confirmPassword: Yup.string()
      .required('Confirm your password')
      .oneOf([Yup.ref('password')], "Passwords don't match"),
  }).required();

  const {
    control,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onBlur',
    resolver: yupResolver(validateSchema),
  });

  const signup = () => {
    clearErrors();
    console.log('Sending data to backend...');
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingHorizontal: 14 }}
    >
      <Text style={styles.title}>Sign Up</Text>
      <Controller
        control={control}
        name="firstName"
        render={({
          field: { onChange, value, onBlur },
          fieldState: { error },
        }) => (
          <InputGroup
            label="First name"
            value={value}
            placeholder="Your first name"
            error={!!error}
            errorDetails={error?.message}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        render={({
          field: { onChange, value, onBlur },
          fieldState: { error },
        }) => (
          <InputGroup
            label="Last name"
            value={value}
            placeholder="Your last name"
            error={!!error}
            errorDetails={error?.message}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        render={({
          field: { onChange, value, onBlur },
          fieldState: { error },
        }) => (
          <InputGroup
            label="Email"
            value={value}
            placeholder="jane.doe@mail.com"
            error={!!error}
            errorDetails={error?.message}
            onChangeText={onChange}
            onBlur={onBlur}
            type="email-address"
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({
          field: { onChange, value, onBlur },
          fieldState: { error },
        }) => (
          <InputGroup
            label="Password"
            value={value}
            error={!!error}
            errorDetails={error?.message}
            onChangeText={onChange}
            onBlur={onBlur}
            password
          />
        )}
      />

      <Controller
        control={control}
        name="confirmPassword"
        render={({
          field: { onChange, value, onBlur },
          fieldState: { error },
        }) => (
          <InputGroup
            label="Confirm password"
            value={value}
            error={!!error}
            errorDetails={error?.message}
            onChangeText={onChange}
            password
          />
        )}
      />

      <View style={styles.separator} />

      {errors && Object.keys(errors).length > 0 && (
        <Text style={styles.error}>Fill in all required fields</Text>
      )}

      <View style={styles.separator} />
      <Button onPress={handleSubmit(signup)}>Sign Up</Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 6,
    textAlign: 'center',
  },
  separator: {
    marginVertical: 6,
  },
  error: {
    color: 'red',
  },
});
