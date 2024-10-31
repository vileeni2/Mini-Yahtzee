import { Text, View } from "react-native";
import styles from '../style/style';

export default Footer = () => {
    return(
        <View style={styles.footer}>
            <Text style={styles.author}>Ville Sinkkonen</Text>
        </View>
    )
}