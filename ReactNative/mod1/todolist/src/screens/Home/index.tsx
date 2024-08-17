import { ActivityIndicator, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Feather, FontAwesome6 } from "@expo/vector-icons";
import { CustomText } from "../../components/CustomText";
import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import { Card } from "../../components/Card";
import { useState } from "react";

export default function Home() {
    const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });
    const [tasks, setTasks] = useState<{ content: string, isSelected: boolean }[]>([]);
    const [contentTask, setContentTask] = useState('');

    function handleAddTask() {
        setTasks(prevState => [...prevState, { content: contentTask, isSelected: false }]);
        setContentTask('');
    }

    function handleSelect(index: number) {
        setTasks(prevState => {
            const newTasks = [...prevState];
            newTasks[index].isSelected = !newTasks[index].isSelected;
            return newTasks;
        });
    }

    function handleDelete(index: number) {
        setTasks(prevState => prevState.filter((_, i) => i !== index));
    }

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Image source={require('../../../assets/Logo.png')} />
            </View>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#888"
                    keyboardAppearance="dark"
                    onChangeText={e => setContentTask(e)}
                    value={contentTask}
                />
                <TouchableOpacity style={styles.button} onPress={handleAddTask}>
                    <Feather name="plus-circle" size={30} color="#fff" />
                </TouchableOpacity>
            </View>

            <View style={styles.bottomSection}>
                <View style={styles.headerSection}>
                    <CustomText content='Criadas' color="#4EA8DE" numberCount={tasks.length} />
                    <CustomText content='Concluídas' color="#8284FA" numberCount={tasks.filter(task => task.isSelected).length} />
                </View>

                {tasks.length === 0 ? (
                    <View style={styles.emptyList}>
                        <FontAwesome6 name="file-clipboard" size={70} color='#333333' />
                        {fontsLoaded ? (
                            <>
                                <Text style={styles.titleEmpty}>Você ainda não tem tarefas cadastradas</Text>
                                <Text style={styles.subtitleEmpty}>Crie tarefas e organize seus itens a fazer</Text>
                            </>
                        ) : <ActivityIndicator />}
                    </View>
                ) : (
                    <FlatList
                        style={styles.list}
                        data={tasks}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => (
                            <Card
                                content={item.content}
                                isSelected={item.isSelected}
                                handleDelete={() => handleDelete(index)}
                                handleSelect={() => handleSelect(index)}
                            />
                        )}
                    />
                )}
            </View>
        </View>
    );
}