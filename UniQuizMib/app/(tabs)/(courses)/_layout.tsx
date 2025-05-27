import { Stack } from 'expo-router';
import React from 'react';

export default function CoursesLayout() {
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
    > 
      <Stack.Screen name="index" options={{ title: 'Courses' }} />
      <Stack.Screen name="quiz/[id]" options={{ title: 'Take Quiz' }} />
    </Stack>
  );
}
