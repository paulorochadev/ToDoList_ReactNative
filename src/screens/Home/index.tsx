import { useState } from 'react';
import { View, Text, FlatList } from 'react-native';

import { styles } from './styles';

import Logo from '../../assets/Logo.svg';
import Clipboard from '../../assets/Clipboard.svg';

import { AddTask } from '../../components/AddTask';
import { Task } from '../../components/Task';

type Task = {
  id: number,
  task: string,
  completed: boolean,
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const completedTasks = tasks.reduce((acc, task) => {
    return task.completed ? acc + 1 : acc;
  }, 0);

  function handleAddTask(taskText: string) {
    const task = {
      id: (tasks[tasks.length - 1]?.id ?? -1) + 1,
      task: taskText,
      completed: false,
    }

    setTasks([...tasks, task]);
  }

  function handleToggleTask(id: number) {
    const newTasks = tasks.map((task) =>
      task.id === id ?
        ({ ...task, completed: !task.completed }) :
        task
    );

    setTasks(newTasks);
  }

  function handleDeleteTask(id: number) {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>

      <View style={styles.tasksContainer}>
        <AddTask onAddTask={handleAddTask} />

        <View style={styles.tasksInformationsContainer}>
          <View style={styles.infoContainer}>
            <Text style={[styles.infoText, { color: '#4EA8DE' }]}>
              Criadas
            </Text>

            <Text style={styles.infoTextCounter}>
              {tasks.length}
            </Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={[styles.infoText, { color: '#8284FA' }]}>
              Concluídas
            </Text>

            <Text style={styles.infoTextCounter}>
              {completedTasks}
            </Text>
          </View>
        </View>

        <FlatList
          style={styles.taskList}
          showsVerticalScrollIndicator={false}
          data={tasks}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => 
            <Task 
              task={item} 
              onToggle={handleToggleTask} 
              onDeleteTask={handleDeleteTask} 
            />
          }
          ListEmptyComponent={() => (
            <View style={styles.taskListEmptyContainer}>
              <Clipboard />
              <Text 
                style={[
                  styles.taskListEmptyText,
                  { marginTop: 16, fontWeight: 'bold' }
                ]}
              >
                Você ainda não tem tarefas cadastradas
              </Text>

              <Text style={styles.taskListEmptyText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}



/* ---- VALIDATION ----
//RNBC
import React, { useContext, useState } from 'react';
import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { CheckedContext } from '../../contexts/checkedContext';

import { Task } from '../../components/Task';

import { styles } from './styles';


let countCreate = 0;

export function Home() {
    const [tasks, setTasks] = useState<string[]>([]);
    const [taskText, setTaskText] = useState('');

    const { countChecked } = useContext(CheckedContext)

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
        <View style={ styles.container }>
            
            <View style={ styles.form }>
                <TextInput
                    style={ styles.input }
                    placeholder= 'Adicione uma nova tarefa'
                    placeholderTextColor= '#6B6B6B'
                    onChangeText={ setTaskText }
                    value={ taskText }
                />

                <TouchableOpacity
                    style={ styles.button }
                    onPress={ handleTaskAdd }
                    onPressIn={ countCreateTask }
                >
                    <Text style={ styles.buttonText }>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            // CountStatus 
            <View style={ styles.status }>
                <Text style={ styles.textCreate }>
                    Criadas
                </Text>
                <View style={ styles.countStatus }>
                    <Text style={ styles.textCount }>
                        { countCreate }
                    </Text>
                </View>
                <Text style={ styles.textFinish }>
                    Concluídas
                </Text>
                <View style={ styles.countStatus }>
                    <Text style={ styles.textCount }>
                        { countChecked }
                    </Text>
                </View>
            </View>

            // <View style={ styles.hrLine } />

            <FlatList
                data={ tasks }
                keyExtractor={ item => item }
                renderItem={({ item }) => (
                    <Task 
                        taskContent={ item }
                        onRemove={ () => handleTaskRemove(item) }
                        countRemoveTask={ countRemoveTask }
                    />
                )}
                ListEmptyComponent={() => (
                    <>
                        <View style={ styles.hrLine } />
                        
                        <Image
                            source={ require('../../assets/Clipboard.png') }
                            style={ styles.listEmptyImg }
                        />

                        <Text style={ styles.listEmptyTextUpper }>
                            Você ainda não tem tarefas cadastradas!
                        </Text>
                        <Text style={ styles.listEmptyTextDown }>
                            Crie tarefas e organize seus itens a fazer
                        </Text>
                    </>
                )}
            />

        </View>
    );
}
*/