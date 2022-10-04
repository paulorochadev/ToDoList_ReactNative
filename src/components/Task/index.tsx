//RNBC
import React, { useContext, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import CheckBox from 'expo-checkbox';

import { styles } from './styles';

import { CheckedContext } from "../../contexts/checkedContext";

type Props = {
    taskContent: string;
    onRemove: () => void;
    countRemoveTask: () => void;
}

export function Task({ taskContent, onRemove, countRemoveTask }: Props){
    const { countFinishedTask, isChecked, setChecked } = useContext(CheckedContextContext)

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
                    source={ require('../../../assets/trash.png') }
                    style={ styles.trashButtonImage }
                />
            </TouchableOpacity>        
        </View>
    );
}