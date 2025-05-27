import { Link } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import colors from '../constants/colors'; // Adjust the path as necessary

const { width, height } = Dimensions.get('window');

const slides = [
  {
    title: 'Welcome to UniQuizMib!',
    subtitle: "Let's walk you through the key features.",
    image: '../assets/bicobase.png',
  },
  {
    title: 'Take Quizzes',
    subtitle: 'Engage with course material through interactive quizzes.',
    image: 'https://your-image-url',
  },
  {
    title: 'View Rankings',
    subtitle: 'See how you stack up against your peers.',
    image: 'https://your-image-url',
  },
  {
    title: "You're All Set!",
    subtitle: "You're ready to dive in. Start exploring quizzes!",
    image: null,
  },
];

export default function OnboardingCarousel() {
  const [index, setIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleNext = () => {
    if (index < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: index + 1 });
    }
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.slide}>
      {item.image && (
        <Image
          source={typeof item.image === 'string' ? { uri: item.image } : item.image}
          style={styles.image}
          resizeMode="contain"
        />
      )}
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={slides}
        keyExtractor={(_, i) => i.toString()}
        renderItem={renderItem}
        onMomentumScrollEnd={(e) => {
          const idx = Math.round(e.nativeEvent.contentOffset.x / width);
          setIndex(idx);
        }}
      />

      {/* Pagination */}
      <View style={styles.pagination}>
        {slides.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              {
                backgroundColor: i === index ? colors.primaryRed : colors.dotInactive,
                width: i === index ? 20 : 10,
              },
            ]}
          />
        ))}
      </View>

      {/* Button */}
      {index === slides.length - 1 ? (
        <Link href="/(tabs)/(dashboard)" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Start Learning</Text>
          </TouchableOpacity>
        </Link>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundLight,
    },
    slide: {
      width,
      height,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: width * 0.7,
      height: height * 0.35,
      marginBottom: 20,
    },
    gradient: {
      ...StyleSheet.absoluteFillObject,
    },
    content: {
      padding: 30,
      alignItems: 'center',
    },
    title: {
      color: colors.textPrimary,
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
    },
    subtitle: {
      color: colors.textSecondary,
      fontSize: 16,
      textAlign: 'center',
    },
    pagination: {
      position: 'absolute',
      bottom: 100,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 8,
    },
    dot: {
      height: 10,
      borderRadius: 5,
    },
    button: {
      backgroundColor: colors.primaryRed,
      marginHorizontal: 40,
      paddingVertical: 14,
      borderRadius: 30,
      alignItems: 'center',
      position: 'absolute',
      bottom: 40,
      width: width - 80,
    },
    buttonText: {
      color: colors.textWhite,
      fontWeight: 'bold',
      fontSize: 16,
    },
  });
