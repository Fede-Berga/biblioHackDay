import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import colors from "../../../constants/colors";

export default function EditProfileScreen() {
  const [name, setName] = useState("Sophia Clark");
  const [email, setEmail] = useState("sophia.clark@email.com");

  const handleSave = () => {
    // Here you could add validation, API calls, etc.
    Alert.alert("Profile Saved", `Name: ${name}\nEmail: ${email}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder="Enter your name"
        placeholderTextColor={colors.textGrayLight}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor={colors.textGrayLight}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
    paddingHorizontal: 24,
    paddingTop: 80,
  },
  title: {
    color: colors.textWhite,
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 32,
    alignSelf: "center",
  },
  label: {
    color: colors.textGrayLight,
    fontSize: 14,
    marginBottom: 6,
    fontWeight: "600",
  },
  input: {
    backgroundColor: colors.backgroundMedium,
    color: colors.textWhite,
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: colors.primaryRedDark,
  },
  saveButton: {
    backgroundColor: colors.primaryRed,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  saveButtonText: {
    color: colors.textWhite,
    fontWeight: "bold",
    fontSize: 18,
  },
});
