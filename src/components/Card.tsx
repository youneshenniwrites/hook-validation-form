import React from 'react';
import { View } from 'react-native';

interface CardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return <View style={{}}>{children}</View>;
};
