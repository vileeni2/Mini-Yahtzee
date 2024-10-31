import { useState, useEffect } from "react";
import { Text, View, Pressable, ScrollView } from "react-native";
import Header from './Header';
import Footer from './Footer';
import { SCOREBOARD_KEY } from '../constants/Game';
import styles from '../style/style';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default Scoreboard = ({ navigation }) => {
    
    const [scores, setScores] = useState([]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getScoreboardData();
        });
        return unsubscribe;
    }, [navigation]);

    const getScoreboardData = async() => {
        try {
            const jsonValue = await AsyncStorage.getItem(SCOREBOARD_KEY);
            if (jsonValue !== null) {
                const tmpScores = JSON.parse(jsonValue);
                setScores(tmpScores);
                console.log('Scoreboard: Read successful');
                console.log('Scoreboard: Number of scores: ' + tmpScores.length);
            }
        } catch (e) {
            console.log('Read error: ' + e);
        }
    };

    const clearScoreboard = async () => {
        try {
            await AsyncStorage.removeItem(SCOREBOARD_KEY);
            setScores([]);
        } catch (e) {
            console.log('Clear error: ' + e);
        }
    };

    return (
        <>
            <Header />
            <View style={styles.scoreboardContainer}>
                <Text style={styles.scoreboardTitle}>Scoreboard</Text>
                
                <ScrollView>
                    {scores.length > 0 ? (
                        scores.map((score, index) => (
                            <View key={index} style={styles.scoreItem}>
                                <Text style={styles.scoreText}>{score.name}: {score.points} points</Text>
                                <Text style={styles.scoreDate}>{score.date} at {score.time}</Text>
                            </View>
                        ))
                    ) : (
                        <Text style={styles.scoreText}>No scores available.</Text>
                    )}
                </ScrollView>

                <View style={styles.scoreboardButtonContainer}>
                    <Pressable style={styles.clearScoreboardButton} onPress={clearScoreboard}>
                        <Text style={styles.clearScoreboardButtonText}>Clear Scoreboard</Text>
                    </Pressable>
                </View>
            </View>
            <Footer />
        </>
    );
};