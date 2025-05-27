import { Tabs } from "expo-router";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#ff4d4d",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "#1a1a1a" },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case "(dashboard)":
              iconName = focused ? "home" : "home-outline";
              break;
            case "(courses)":
              iconName = focused ? "book" : "book-outline";
              break;
            case "(leaderboard)":
              iconName = focused ? "trophy" : "trophy-outline";
              break;
            case "(profile)":
              iconName = focused ? "person" : "person-outline";
              break;
            default:
              iconName = "ellipse";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="(dashboard)" options={{ title: "Dashboard", headerShown: false }} />
      <Tabs.Screen name="(courses)" options={{ title: "Courses", headerShown: false }} />
      <Tabs.Screen name="(leaderboard)" options={{ title: "Leaderboard", headerShown: false }} />
      <Tabs.Screen name="(profile)" options={{ title: "Profile", headerShown: false }} />
    </Tabs>
  );
}
