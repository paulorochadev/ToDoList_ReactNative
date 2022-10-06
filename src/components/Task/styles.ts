import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262626',
    marginBottom: 8,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,

    flexDirection: 'row',
    alignItems: 'center',

    elevation: 2,
    shadowColor: '#000',
  },
  checkButton: {
    padding: 3,
  },
  text: {
    flex: 1,
    marginHorizontal: 8,
    lineHeight: 20,
  },
  trashButton: {
    padding: 10,
    borderRadius: 4,
  }
});


/* ---- VALIDATION ----
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
        textDecorationLine: 'line-through',
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
*/