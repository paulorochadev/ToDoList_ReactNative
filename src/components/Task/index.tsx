import { useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

import { styles } from './styles';

type Task = {
  id: number,
  task: string,
  completed: boolean,
}

interface TaskProps {
  task: Task;
  onToggle: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export function Task({ task, onToggle, onDeleteTask }: TaskProps) {
  const [inCheckHighlight, setInCheckHighlight] = useState(false);
  const [inDanger, setInDanger] = useState(false);

  return (
    <View
        style={[
            styles.container,
            task.completed ?
                ({ borderColor: '#262626' }) :
                ({ borderColor: '#333333' })
        ]}
    >
      <TouchableHighlight
        style={styles.checkButton}
        underlayColor='transparent'
        onPress={() => onToggle(task.id)}
        onShowUnderlay={() => setInCheckHighlight(true)}
        onHideUnderlay={() => setInCheckHighlight(false)}
      >
        {
          task.completed ? (
            <MaterialCommunityIcons 
              name='checkbox-marked-circle' 
              size={24} 
              color={inCheckHighlight ? '#8284FA' : '#5E60CE'}
            />
          ) : (
            <MaterialCommunityIcons
              name='checkbox-blank-circle-outline' 
              size={24}
              color={inCheckHighlight ? '#1E6F9F' : '#4EA8DE'}
            />
          )
        }
      </TouchableHighlight>

      <Text 
        style={[
          styles.text,
          task.completed ? ({
            color: '#808080',
            textDecorationLine: 'line-through'
          }) : ({
            color: '#f2f2f2'
          })
        ]}
      >
        {task.task}
      </Text>

      <TouchableHighlight
        style={styles.trashButton}
        underlayColor='#333333'
        onPress={() => onDeleteTask(task.id)}
        onShowUnderlay={() => setInDanger(true)}
        onHideUnderlay={() => setInDanger(false)}
      >
        <Feather 
          name='trash-2' 
          size={22} 
          color={inDanger ? '#E25858' : '#808080'} 
        />
      </TouchableHighlight>
    </View>
  )
}



/* ---- VALIDATION ----
//RNBC
import React, { useContext, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import CheckBox from 'expo-checkbox';

import { TrashImg } from '../../assets/trash.png';

import { styles } from './styles';

import { CheckedContext } from "../../contexts/checkedContext";

type Props = {
    taskContent: string;
    onRemove: () => void;
    countRemoveTask: () => void;
}

export function Task({ taskContent, onRemove, countRemoveTask }: Props){
    const { countFinishedTask, isChecked, setChecked } = useContext(CheckedContext)

    return (
        <View style={ styles.taskBox }>
            <CheckBox 
                style={ styles.checkBox }
                value={ isChecked }
                onValueChange={ () => setChecked(!isChecked) }
                color={ isChecked ? '#8284FA' : undefined }   
                onTouchStart={ countFinishedTask }
            />
            <Text 
                style={ isChecked ? styles.taskTextSelected : styles.taskText }
            >
                { taskContent }
            </Text>

            <TouchableOpacity
                style={ styles.trashButton }
                onPress={ onRemove }
                onPressIn={ countRemoveTask }
            >
                <Image
                    // source={TrashImg}
                    source={ require('../../assets/trash.png') }
                    style={ styles.trashButtonImage }
                />
            </TouchableOpacity>
        </View>
    );
}
*/