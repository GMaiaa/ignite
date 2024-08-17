import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Use this ou uma biblioteca de ícones semelhante
import { styles } from './styles';

type Props = {
    content: string;
    isSelected: boolean;
    handleDelete: () => void;
    handleSelect: () => void;
}

export function Card({content, isSelected, handleDelete, handleSelect}: Props) {
 

  

  return (
    <View style={[styles.cardContainer, isSelected && styles.selectedContainer]}>
      <TouchableOpacity onPress={handleSelect} style={styles.radioButton}>
        <Ionicons 
          name={isSelected ? "radio-button-on" : "radio-button-off"} 
          size={24} 
          color={isSelected ? "#6c5ce7" : "#74b9ff"} 
        />
      </TouchableOpacity>
      <Text style={[styles.cardText, isSelected && styles.selectedText]}>
        {content}
      </Text>
      <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
        <Ionicons 
          name="trash-outline" 
          size={24} 
          color="#d63031" 
        />
      </TouchableOpacity>
    </View>
  );
};