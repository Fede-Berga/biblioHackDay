import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const question = {
  course: 'Computer Science 101',
  current: 1,
  total: 5,
  progress: 0.2,
  text: 'What is the primary function of a compiler in computer science?',
  options: [
    'Translate high-level code to machine code',
    'Manage memory allocation',
    'Debug code errors',
    'Optimize code performance',
  ],
};

export default function QuizScreen() {
  const [selected, setSelected] = useState<number | null>(0);

  return (
    <SafeAreaView className="flex-1 bg-[#111714] px-6 py-8">
      {/* Progress header */}
      <View className="mb-6">
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-gray-400 text-sm">
            Question <Text className="text-white font-semibold">{question.current}</Text> of{' '}
            <Text className="text-white font-semibold">{question.total}</Text>
          </Text>
          <Text className="text-[#38e07b] text-xs font-semibold">{question.course}</Text>
        </View>
        <View className="h-2.5 bg-[#29382f] rounded-full overflow-hidden">
          <View
            style={{ width: `${question.progress * 100}%` }}
            className="h-full bg-[#38e07b] rounded-full"
          />
        </View>
      </View>

      {/* Question */}
      <Text className="text-white text-xl font-semibold mb-6">{question.text}</Text>

      {/* Options */}
      <FlatList
        data={question.options}
        keyExtractor={(item, i) => i.toString()}
        renderItem={({ item, index }) => {
          const isSelected = selected === index;
          return (
            <TouchableOpacity
              onPress={() => setSelected(index)}
              className={`flex-row items-center p-4 mb-4 rounded-lg border-2 ${
                isSelected ? 'border-[#38e07b] bg-[#38e07b]/10' : 'border-[#29382f]'
              }`}
            >
              <View
                className={`h-5 w-5 rounded-full border-2 mr-4 ${
                  isSelected ? 'border-[#38e07b] bg-[#38e07b]' : 'border-[#29382f] bg-transparent'
                }`}
              />
              <Text className="text-white text-base flex-1">{item}</Text>
              {isSelected && (
                <MaterialIcons name="check-circle" size={24} color="#38e07b" />
              )}
            </TouchableOpacity>
          );
        }}
      />

      {/* Submit Button */}
      <View className="flex-row justify-end mt-6">
        <TouchableOpacity
          disabled={selected === null}
          className="flex-row items-center justify-center gap-2 min-w-[120px] max-w-[480px] rounded-full h-12 px-6 bg-[#38e07b]"
          onPress={() => alert(`Selected: ${question.options[selected ?? 0]}`)}
          style={{ opacity: selected === null ? 0.5 : 1 }}
        >
          <Text className="text-[#111714] text-base font-bold tracking-[0.015em]">Submit Answer</Text>
          <MaterialIcons name="arrow-forward" size={24} color="#111714" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
