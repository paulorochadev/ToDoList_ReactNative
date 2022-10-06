import { useState } from 'react';
import { View, TextInput, TouchableHighlight } from 'react-native';

import { AntDesign } from '@expo/vector-icons'

import { styles } from './styles';

interface AddTaskProps {
  onAddTask: (taskText: string) => void;
}

export function AddTask({ onAddTask }: AddTaskProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [taskText, setTaskText] = useState('');

  function handleNewTask() {
    onAddTask(taskText);
    setTaskText('');
  }

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor='#808080'
        style={[
          styles.input,
          isFocused ? 
            ({ borderColor: '#5E60CE' }) : 
            ({ borderColor: '#0D0D0D' })
        ]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={taskText}
        onChangeText={setTaskText}
      />

      <TouchableHighlight
        style={styles.button}
        underlayColor='#4EA8DE'
        onPress={handleNewTask}
      >
        <AntDesign
          name='pluscircleo'
          size={16}
          color='#f2f2f2'
        />
      </TouchableHighlight>
    </View>
  )
}