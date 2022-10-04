//RNSO
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    taskBox: {
        alignSelf: 'center',
        backgroundColor: '#262626',
        borderColor: '#808080',
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 0.2,
        flexDirection: 'row',
        height: 64,
        marginTop: 10,
        width: 327,
    },
    checkBox: {
        borderColor: '#4EA8DE',
        borderRadius: 20,
        marginLeft: 20,
        marginTop: 20,
    },
    taskTextSelected: {
        alignSelf: 'center',
        color: '#808080',
        padding: 15,
        textDecorationLine: 'line-through'
    },
    taskText: {
        alignSelf: 'center',
        color: '#FFF',
        padding: 15,
    },
    trashButton: {
        alignSelf: 'center',
        marginLeft: 265,
        position: 'absolute',
    },
    trashButtonImage: {
        height: 40,
        width: 40,
    },
});