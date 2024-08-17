import { StyleSheet } from "react-native";
import { useFonts, Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    numberCounter: {
        backgroundColor: '#333333',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 999
    },
    numberText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#FFF'
    }

})