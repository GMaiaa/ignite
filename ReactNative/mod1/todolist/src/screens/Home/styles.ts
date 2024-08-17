import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
    },
    topSection: {
        height: 190,
        backgroundColor: '#0D0D0D',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 24

    },
    bottomSection: {
        padding: 24,
        marginTop: 54,
    },
    headerSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image: {
        width: 110,
        height: 32,
    },
    input: {
        flex: 1,
        height: 54,
        backgroundColor: '#262626',
        color: '#FFF',
        padding: 16,
        borderRadius: 5
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42,
        position: 'absolute',
        top: 130,
        paddingRight: 24,
        paddingLeft: 24
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,

    },
    emptyList: {
        alignItems: 'center',
        paddingTop: 50,
        marginTop: 20,
        borderTopWidth: 1,
        borderColor: '#333333'
    },
    titleEmpty: {
        marginTop: 15,
        color: '#808080',
        fontWeight: 'bold',
        fontSize: 14,
    }, 
    subtitleEmpty: {
        color: '#808080',
        fontSize: 14,
    },
    list: {
        marginTop: 20,
    }

})