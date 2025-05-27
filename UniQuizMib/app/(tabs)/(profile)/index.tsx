import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../../../constants/colors"; // Assuming you have a colors.js file for consistent styling
import { Link } from "expo-router";

export default function Profile() {
    const quizHistory = [
        { name: "History of Art", course: "Art History 101", score: "92%", date: "2023-08-15" },
        { name: "Calculus I", course: "Math 101", score: "78%", date: "2023-08-10" },
        { name: "Introduction to Psychology", course: "Psych 101", score: "88%", date: "2023-08-05" },
        { name: "Organic Chemistry", course: "Chem 201", score: "75%", date: "2023-07-30" },
        { name: "World Literature", course: "Eng 201", score: "95%", date: "2023-07-25" },
    ];

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.mainContent} showsVerticalScrollIndicator={false}>
                {/* Profile info */}
                <View style={styles.profileSection}>
                    <Image
                        source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhnGs3seHEw-aMiZacWmr3cOrU7c964ZGnvYDEnGgY6AKo1rwsd0SU0la3seMpGWJOegHGTSwEF_QVvJmLcqln_S2124wKFvMJ0U9QNfSddPi_IUrvYSSYNLwy5fRRW5M1kovOMLZE3ZffFu46Ik4eK_Qj5O1cmMcJfdeAOaBoBGlTtJns4nH4I8xgRHlt6a-GzNSqH_QCdJmMj3L7E6VWMazzEhT0LQJxbDd0XU6Uga_ysw6SzjLzzim-5CCsV1LnDgrhoi_DoZAp" }}
                        style={styles.profileAvatar}
                    />
                    <View style={styles.profileInfo}>
                        <Text style={styles.profileName}>Sophia Clark</Text>
                        <Text style={styles.profileEmail}>sophia.clark@email.com</Text>
                        <Text style={styles.profileJoined}>Joined: January 15, 2022</Text>
                        <Link href="/edit" asChild>
                            <TouchableOpacity style={styles.editButton}>
                                <Text style={styles.editButtonText}>✏️ Edit Profile</Text>
                            </TouchableOpacity>
                        </Link>
                    </View>
                </View>

                {/* Stats */}
                <View style={styles.statsContainer}>
                    <View style={styles.statCard}>
                        <Text style={styles.statNumber}>15</Text>
                        <Text style={styles.statLabel}>Quizzes Taken</Text>
                    </View>
                    <View style={styles.statCard}>
                        <Text style={styles.statNumber}>85%</Text>
                        <Text style={styles.statLabel}>Average Score</Text>
                    </View>
                    <View style={styles.statCard}>
                        <Text style={styles.statNumber}>3</Text>
                        <Text style={styles.statLabel}>Badges Earned</Text>
                    </View>
                </View>

                {/* Quiz History */}
                <View style={styles.historySection}>
                    <Text style={styles.historyTitle}>Quiz History</Text>
                    <View style={styles.tableContainer}>
                        <View style={styles.tableHeader}>
                            <Text style={[styles.tableCell, styles.tableHeaderCell, { flex: 2 }]}>Quiz Name</Text>
                            <Text style={[styles.tableCell, styles.tableHeaderCell, { flex: 2 }]}>Course</Text>
                            <Text style={[styles.tableCell, styles.tableHeaderCell, { flex: 1 }]}>Score</Text>
                            <Text style={[styles.tableCell, styles.tableHeaderCell, { flex: 1 }]}>Date</Text>
                        </View>
                        {quizHistory.map(({ name, course, score, date }) => (
                            <View key={name} style={styles.tableRow}>
                                <Text style={[styles.tableCell, { flex: 2, color: colors.textWhite, fontWeight: "600" }]}>{name}</Text>
                                <Text style={[styles.tableCell, { flex: 2, color: colors.softPink }]}>{course}</Text>
                                <Text style={[styles.tableCell, { flex: 1, color: colors.softPink }]}>{score}</Text>
                                <Text style={[styles.tableCell, { flex: 1, color: colors.softPink }]}>{date}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundDark,
    },
    mainContent: {
        paddingHorizontal: 20,
        paddingTop: 70,
        paddingBottom: 20,
    },
    profileSection: {
        flexDirection: "row",
        backgroundColor: colors.primaryRed,
        padding: 16,
        borderRadius: 16,
        alignItems: "center",
        gap: 16,
        marginBottom: 20,
    },
    profileAvatar: {
        width: 128,
        height: 128,
        borderRadius: 64,
        borderWidth: 4,
        borderColor: colors.primaryRedDark,
    },
    profileInfo: {
        flex: 1,
    },
    profileName: {
        color: colors.textWhite,
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 4,
    },
    profileEmail: {
        color: colors.textWhite,
        fontSize: 14,
        marginBottom: 2,
    },
    profileJoined: {
        color: colors.textWhite,
        fontSize: 12,
    },
    editButton: {
        marginTop: 10,
        backgroundColor: colors.primaryRedDark,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 9999,
        alignSelf: "flex-start",
    },
    editButtonText: {
        color: colors.textWhite,
        fontWeight: "bold",
        fontSize: 14,
    },
    statsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    statCard: {
        flex: 1,
        backgroundColor: colors.primaryRedDark,
        padding: 16,
        borderRadius: 16,
        marginHorizontal: 6,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 3 },
    },
    statNumber: {
        color: colors.textWhite,
        fontSize: 32,
        fontWeight: "bold",
    },
    statLabel: {
        color: colors.softPink,
        fontSize: 14,
        fontWeight: "500",
        marginTop: 4,
    },
    historySection: {
        marginBottom: 40,
    },
    historyTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: colors.textWhite,
        marginBottom: 10,
    },
    tableContainer: {
        backgroundColor: colors.primaryRedDark,
        borderRadius: 12,
        overflow: "hidden",
    },
    tableHeader: {
        flexDirection: "row",
        backgroundColor: colors.primaryRed,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    tableRow: {
        flexDirection: "row",
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderBottomColor: colors.primaryRed,
        borderBottomWidth: 1,
    },
    tableCell: {
        fontSize: 13,
        paddingRight: 8,
    },
    tableHeaderCell: {
        fontWeight: "bold",
        color: colors.softPink,
    },
});
