import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';

import { Participant } from '../../components/Participant';

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('')


  function handleParticipantAdd() {
    if(participants.includes(participantName)){
      return Alert.alert("Participante Existe", "Já existe um participante na lista com esse nome")
    }
    
    setParticipants(prevState => [...prevState, participantName])
    setParticipantName('')
  }


  function handleParticipantRemove(name: String) {
    
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'Não',
        style:'cancel'
      }
    ])
    
    console.log(`voce clicou no botao de remover o participante ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventTitle}>
        Nome do Evento
      </Text>

      <Text style={styles.eventDate}>
        Terça, 9 de Julho de 2024.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor={'#6b6b6b'}
          onChangeText={e => setParticipantName(e)}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione Participantes a sua lista de presença
          </Text>
        )}
      />

  
    </View>
  );
}