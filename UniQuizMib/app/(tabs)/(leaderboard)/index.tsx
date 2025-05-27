import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import colors from '../../../constants/colors';

type LeaderboardItemType = {
  rank: number;
  name: string;
  username: string;
  score: number;
  progress: number;
  avatar: string;
  highlight?: boolean;
};

const leaderboardData: LeaderboardItemType[] = [
  {
    rank: 1,
    name: 'Sophia Clark',
    username: '@sophclark',
    score: 950,
    progress: 95,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAo_sSgHcolUYVkHlVOoR3OrrTYacAlzkcxBldmQs93CoAbIRqqaa4KnB055zUYdNjg--CgoqqnSmdaQX82zX3qT8hLXgfWwW3KN5O6cojm-mBs58C9-y35rx6XOawCYTXp3LuWBiMiBfC-As-YzkbCtW2yL9giIY0u8ZIaJ4Z2oKg1ukBXTCs6-PatLC0hwnfA5eE4YmCSSnneR1i8lib8mw07xZvaJWAzyzZ9-ERn3-j_RLPfqxUNIPtjjPlnILgfGkTrXWkVmTUt',
    highlight: true,
  },
  {
    rank: 2,
    name: 'Liam Nguyen',
    username: '@liamng',
    score: 900,
    progress: 90,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    rank: 3,
    name: 'Emma Rossi',
    username: '@emmarossi',
    score: 870,
    progress: 87,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    rank: 4,
    name: 'Noah Kim',
    username: '@noahkim',
    score: 850,
    progress: 85,
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    rank: 5,
    name: 'Olivia Smith',
    username: '@oliviasmith',
    score: 820,
    progress: 82,
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    rank: 6,
    name: 'Lucas Müller',
    username: '@lucasm',
    score: 800,
    progress: 80,
    avatar: 'https://randomuser.me/api/portraits/men/23.jpg',
  },
  {
    rank: 7,
    name: 'Mia Dubois',
    username: '@miadubois',
    score: 780,
    progress: 78,
    avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
  {
    rank: 8,
    name: 'Ethan Lee',
    username: '@ethanlee',
    score: 760,
    progress: 76,
    avatar: 'https://randomuser.me/api/portraits/men/56.jpg',
  },
  {
    rank: 9,
    name: 'Ava García',
    username: '@avagarcia',
    score: 740,
    progress: 74,
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
  },
  {
    rank: 10,
    name: 'William Brown',
    username: '@williamb',
    score: 720,
    progress: 72,
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
  },
];

const LeaderboardItem = ({ item }: { item: LeaderboardItemType }) => {
  const progressFillColor = item.highlight ? colors.primaryRed : colors.slate500;
  const rankTextColor = item.highlight ? colors.primaryRed : colors.textGrayLight;

  return (
    <View style={styles.row}>
      <View style={[styles.rankContainer, item.highlight && { borderColor: colors.primaryRed, borderWidth: 2 }]}>
        <Text style={[styles.rankText, { color: rankTextColor }, item.highlight && { fontWeight: 'bold', fontSize: 20 }]}>
          {item.rank}
        </Text>
        {item.rank === 1 && (
          <Text style={[styles.rankIcon, { color: colors.primaryRed }]}>🏆</Text>
        )}
      </View>

      <View style={styles.userContainer}>
        <Image source={{ uri: item.avatar }} style={[styles.avatar, item.highlight && { borderColor: colors.primaryRed, borderWidth: 2 }]} />
        <View>
          <Text style={[styles.userName, item.highlight && { fontWeight: 'bold' }]}>{item.name}</Text>
          <Text style={styles.userUsername}>{item.username}</Text>
        </View>
      </View>

      <View style={styles.scoreContainer}>
        <Text style={[styles.scoreText, item.highlight && { fontWeight: 'bold' }]}>{item.score}</Text>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, { width: `${item.progress}%`, backgroundColor: progressFillColor }]} />
        </View>
        <Text style={[styles.progressText, item.highlight ? { color: colors.primaryRed } : { color: colors.slate500 }]}>
          {item.progress}%
        </Text>
      </View>
    </View>
  );
};

export default function Leaderboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      <Text style={styles.subtitle}>See who's dominating the course and strive to climb the ranks!</Text>

      <FlatList
        data={leaderboardData}
        keyExtractor={(item) => item.rank.toString()}
        renderItem={({ item }) => <LeaderboardItem item={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
    paddingHorizontal: 20,
    paddingTop: 70,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  rankContainer: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  rankText: {
    fontSize: 18,
    color: colors.textGrayLight,
  },
  rankIcon: {
    fontSize: 20,
    marginLeft: 4,
  },
  userContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: 'transparent',
  },
  userName: {
    color: colors.textPrimary,
    fontSize: 16,
  },
  userUsername: {
    color: colors.textSecondary,
    fontSize: 12,
  },
  scoreContainer: {
    width: 60,
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  scoreText: {
    color: colors.textPrimary,
    fontSize: 16,
  },
  progressContainer: {
    width: 80,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  progressBarBackground: {
    flex: 1,
    height: 6,
    backgroundColor: colors.progressBg,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
  },
});
