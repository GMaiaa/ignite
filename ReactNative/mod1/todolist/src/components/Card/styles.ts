import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cardContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
      marginBottom: 10,
      backgroundColor: '#333',
      borderRadius: 10,
      elevation: 3, 
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
    },
    selectedContainer: {
      backgroundColor: '#1c1c1c',
    },
    radioButton: {
      marginRight: 15,
    },
    cardText: {
      flex: 1,
      color: '#fff',
      fontSize: 16,
    },
    selectedText: {
      color: '#b2bec3',
      textDecorationLine: 'line-through',
    },
    deleteButton: {
      marginLeft: 15,
    },
  });
  