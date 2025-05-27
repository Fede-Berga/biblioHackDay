import { Stack } from 'expo-router';
import React from 'react';

export default function DashboardLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1a1a1a',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShown: false,
      }}
    />
  );
}
