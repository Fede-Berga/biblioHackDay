import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const colors = {
  // Reds
  primaryRed: "#AB1D34",          // Main brand red (base)
  primaryRedLight: "#E85A6E",     // Lighter, vibrant red/pinkish (highlights/hover)
  primaryRedDark: "#7A1221",      // Darker, rich red (borders, shadows)

  // Backgrounds
  backgroundDark: "#3D1F25",      // Very dark red/burgundy (main background)
  backgroundMedium: "#5A2C33",    // Dark red/brownish (cards)
  backgroundLight: "#7F3D46",     // Medium red shade (icon backgrounds, hover)

  // Text
  textWhite: "#F9E6E9",           // Off-white with pinkish tint (primary text)
  textGrayLight: "#D7A9AE",       // Muted warm pink/gray (secondary text)
  textGrayMedium: "#B66B74",      // Medium warm grayish red (subtle text)

  // Accent
  softPink: "#FFD9DD",            // Soft pink (for highlights or backgrounds)
};

const courses = [
  {
    id: "prog101",
    title: "Introduction to Programming",
    description: "Learn the fundamentals of programming with Python.",
  },
  {
    id: "webdev101",
    title: "Web Development Basics",
    description: "Understand HTML, CSS, and JavaScript.",
  },
];

export default function CoursesScreen() {

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Available Courses</Text>
      <View style={styles.cardGrid}>
        {courses.map((course) => (
          <View key={course.id} style={styles.card}>
            <Text style={styles.cardTitle}>{course.title}</Text>
            <Text style={styles.cardDescription}>{course.description}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundDark, // deep dark red/black background
  },
  content: {
    paddingTop: 70,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: colors.textWhite,
    marginBottom: 20,
  },
  cardGrid: {
    gap: 16,
  },
  card: {
    backgroundColor: colors.backgroundMedium, // dark card background (red/gray)
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.primaryRedDark, // deep red border
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.textWhite,
    marginBottom: 6,
  },
  cardDescription: {
    color: colors.textGrayLight,
    marginBottom: 12,
  },
  link: {
    color: colors.primaryRedLight, // lighter red for link
    fontWeight: "600",
  },
});
