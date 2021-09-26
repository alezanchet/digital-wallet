import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  contentContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: '30%',
  },

  avatarContainer: {
    height: 130,
    width: 130,
  },

  avatar: {
    position: 'absolute',
    borderRadius: 65,
  },

  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },

  email: {
    color: '#fff',
    fontSize: 14,
  },

  button: {
    height: 50,
    width: '80%',
    backgroundColor: '#00A6A8',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
