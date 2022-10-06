import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 56,
    marginTop: -30,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#262626',
    color: '#f2f2f2',
    fontSize: 16,
    borderRadius: 6,
    borderWidth: 1,
  },
  button: {
    width: 52,
    marginLeft: 4,
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
  },
});