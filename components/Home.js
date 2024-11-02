import { useState } from "react";
import { Text, View, TextInput, Pressable, Keyboard } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Header from './Header';
import Footer from './Footer';
import { NBR_OF_DICES, NBR_OF_THROWS, MIN_SPOT, MAX_SPOT, BONUS_POINTS, BONUS_POINTS_LIMIT } from "../constants/Game";
import styles from '../style/style';

export default Home = ({ navigation }) => {

    const [playerName, setPlayerName] = useState('');
    const [hasPlayerName, setHasPlayername] = useState(false);
    
    const handlePlayerName = (value) => {
        if (value.trim().length > 0) {
            setHasPlayername(true);
            Keyboard.dismiss();
        }
    }
    return(
        <>
            <Header />
            <View style={styles.homeContainer}>
                <MaterialCommunityIcons name="information" size={90} color="#73CED6" />
                {!hasPlayerName ?
                    <>
                        <Text style={styles.homeText}>For scoreboard enter your name</Text>
                        <TextInput style={styles.homeInput} onChangeText={setPlayerName} autoFocus={true} />
                        <Pressable style={styles.homeButton} onPress={() => handlePlayerName(playerName)}>
                            <Text style={styles.homeButtonText}>OK</Text>
                        </Pressable>
                    </>
                :
                    <>
                        <Text style={styles.homeTitle}>Rules of the game</Text>
                        <Text style={styles.homeRules} multiline="true">
                            THE GAME: Upper section of the classic Yahtzee
                            dice game. You have {NBR_OF_DICES} dices and
                            for the every dice you have {NBR_OF_THROWS} {''}
                            throws. After each throw you can keep dices in
                            order to get same dice spot counts as many as
                            possible. In the end of the turn you must select
                            your points from {MIN_SPOT} to {MAX_SPOT}.
                            Game ends when all points have been selected.
                            The order for selecting those is free.
                        </Text>
                        <Text style={styles.homeText}>Good luck, {playerName}</Text>
                        <Pressable style={styles.homeButton} onPress={() => navigation.navigate('Gameboard', {player: playerName})}>
                            <Text style={styles.homeButtonText}>PLAY</Text>
                        </Pressable>
                    </>
                }
            </View>
            <Footer />
        </>
    )
}