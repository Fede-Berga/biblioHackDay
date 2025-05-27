import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

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

type IconName = 
  | 'quiz'
  | 'school'
  | 'leaderboard'
  | 'account-circle'
  | 'support-agent';

type Card = {
  key: string;
  icon: IconName;
  title: string;
  description: string;
};

const cards: Card[] = [
  { key: 'quiz', icon: 'quiz', title: 'Take a Quiz', description: 'Challenge yourself with various quizzes.' },
  { key: 'courses', icon: 'school', title: 'Browse Courses', description: 'Explore different subjects and topics.' },
  { key: 'leaderboard', icon: 'leaderboard', title: 'View Leaderboard', description: 'See how you rank among others.' },
  { key: 'profile', icon: 'account-circle', title: 'Manage Profile', description: 'Update your personal information.' },
  { key: 'chat', icon: 'support-agent', title: 'Chat Support', description: 'Get help with any questions.' },
];

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.mainContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Welcome to UniQuizMib!</Text>
        <View style={styles.grid}>
          {cards.map(({ key, icon, title, description }) => (
            <TouchableOpacity key={key} style={styles.card}>
              <View style={styles.cardIcon}>
                <MaterialIcons name={icon} size={40} color={colors.primaryRed} />
              </View>
              <Text style={styles.cardTitle}>{title}</Text>
              <Text style={styles.cardDescription}>{description}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  mainContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.textWhite,
    marginBottom: 20,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
  },
  card: {
    backgroundColor: colors.backgroundMedium,
    borderRadius: 16,
    padding: 20,
    width: '45%',
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },
  cardIcon: {
    backgroundColor: colors.backgroundLight,
    borderRadius: 40,
    padding: 16,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textWhite,
    marginBottom: 6,
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 13,
    color: colors.textGrayMedium,
    textAlign: 'center',
  },
});
