//RNBC
import React, { useContext, useState } from 'react';
import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';


let countCreate = 0;

export function Home() {
    const [tasks, setTasks] = useState<string[]>([]);
    const [taskText, setTaskText] = useState('');

    function countCreateTask(){
        countCreate = countCreate + 1;
    }

    function countRemoveTask(){
        countCreate = countCreate - 1;
    }

    function handleTaskAdd() {
        if (tasks.includes(taskText)) {
            // console.log("Entrou na condição de que a Tarefa existe!", "(handleTaskAdd)");

            return Alert.alert("Tarefa existe!", "Já existe esta tarefa na lista, adicione outra!");
        }

        setTasks(prevState => [...prevState, taskText]);
        setTaskText('');

        // console.log("Você clicou no botão de Adicionar Tarefa!", "(handleTaskAdd)");
    }

    function handleTaskRemove(task: string) {
        // console.log("Tarefa já criada ==> ", task, "(handleTaskRemove)");

        Alert.alert("Remover!", `Remover a tarefa ${task}?`, [
            {
                text: 'Sim',
                onPress: () => setTasks(prevState => prevState.filter(taskItem => taskItem !== task))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ]);

        // console.log(`Você clicou no botão de Remover Tarefa ${task} !`)
    }

    return (
        <View style={styles.container}>
            
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#6B6B6B"
                    onChangeText={setTaskText}
                    value={taskText}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleTaskAdd}
                >
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}