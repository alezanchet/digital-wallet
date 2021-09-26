import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: '#000000b3',
    justifyContent: 'center',
    alignItems: 'center',
  },

  overlay: {
    width: '80%',
    padding: 15,
    backgroundColor: '#39586A',
    borderRadius: 20,
    alignItems: 'center',
  },

  close: {
    position: 'absolute',
    top: 15,
    left: 15,
  },

  avatar: {
    height: 65,
    width: 65,
    borderRadius: 32.5,
    borderWidth: 2,
    borderColor: '#00A6A8',
  },

  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 5,
    textAlign: 'center',
  },

  phone: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 15,
  },

  smallText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 10,
  },

  inputBackground: {
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 60,
    width: '100%',
  },

  input: {
    flex: 1,
    color: '#00A6A8',
    fontSize: 35,
    fontWeight: 'bold',
  },

  buttonContainer: {
    backgroundColor: '#00A6A8',
    borderRadius: 25,
    height: 50,
    width: '100%',
    marginTop: 15,
  },

  button: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textButton: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
