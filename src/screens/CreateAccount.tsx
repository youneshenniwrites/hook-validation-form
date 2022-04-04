import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import Button from '../components/Button';
import InputGroup from '../components/InputGroup';

interface CreateAccountProps {}

export const CreateAccount: React.FunctionComponent<
  CreateAccountProps
> = ({}) => {
  const signup = () => {
    console.log('Sending data to backend...');
  };

  const [firstName, setFirstName] = React.useState('');

  return (
    <ScrollView style={{}} contentContainerStyle={{}}>
      <Text style={{}}>Sign Up</Text>
      <InputGroup
        label="First name"
        value={firstName}
        placeholder="Your first name"
        onChangeText={setFirstName}
      />
      <InputGroup
        label="Last name"
        value={firstName}
        placeholder="Your last name"
        onChangeText={setFirstName}
      />
      <InputGroup
        label="Email"
        value={firstName}
        placeholder="jane.doe@mail.com"
        onChangeText={setFirstName}
        type="email-address"
      />
      <InputGroup
        label="Password"
        value={firstName}
        onChangeText={setFirstName}
        password
      />
      <InputGroup
        label="Confirm password"
        value={firstName}
        onChangeText={setFirstName}
        password
      />
      <View style={{}} />
      <Button onPress={signup}>Sign Up</Button>
    </ScrollView>
  );
};
