import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { styles } from './styles';
import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';

type Props = {
    content: string;
    color: string;
    numberCount: number;
}

export function CustomText({ content, color, numberCount }: Props) {
    const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold })
    return (
        <>
            {
                fontsLoaded ? <View style={styles.container}>
                    <Text style={[styles.text, { color: color }]}>
                        {content}
                    </Text >
                    <View style={styles.numberCounter}>
                        < Text style={styles.numberText} > {numberCount} </Text >
                    </View>
                </View> : <ActivityIndicator />
            }
        </>
    )
}