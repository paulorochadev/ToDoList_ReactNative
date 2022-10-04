//RNSO
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  //Header
  container: {
    backgroundColor: '#1A1A1A',
    flex: 1,
    // padding: 24,
  },
  form: {
    alignSelf: 'center',
    flexDirection: "row",
    marginTop: -28,
    width: 327,

    // marginBottom: 42,
    // marginTop: 36,
    // width: '100%',
  },
  input: {
    backgroundColor: '#262626',
    borderRadius: 5,
    color: '#FFF',
    flex: 1,
    fontSize: 16,
    height: 56,
    marginRight: 10,
    padding: 16,
    
    // backgroundColor: '#1F1E25',
    // marginRight: 12,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#1E6F9F',
    borderRadius: 5,
    height: 56,
    justifyContent: 'center',
    width: 56,

    // backgroundColor: '#31CF67',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },

  //CountStatus
  status: {
    flexDirection: 'row',
    marginTop: 15,
    padding: 20,
  },
  textCreate:{
    color: '#4EA8DE',
    fontSize: 14,
    fontWeight: 'bold',
  },
  countStatus: {
    alignItems: 'center',
    backgroundColor: '#262626',
    borderRadius: 8,
    justifyContent: 'center',
    marginLeft: 8,
    width: 25,
  },
  textCount: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  textFinish: {
    color: '#8284FA',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 175,
  },


  hrLine: {
    alignSelf: 'center',
    borderBottomColor: '#333333',
    borderBottomWidth: 1.5,
    marginTop: 10,
    width: 360,
  },


  //FlatList
  listEmptyImg: {
    alignSelf: 'center',
    marginTop: 50,
  },
  listEmptyTextUpper: {
    color: '#333333',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  listEmptyTextDown: {
    color: '#333333',
    fontSize: 14,
    textAlign: 'center',
  },

});