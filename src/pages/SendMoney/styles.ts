import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  list: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },

  separator: {
    width: '100%',
    backgroundColor: '#00A6A8',
    height: 1,
    marginVertical: 15,
  },

  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    height: 65,
    width: 65,
    borderRadius: 32.5,
    borderWidth: 2,
    borderColor: '#00A6A8',
    marginRight: 15,
  },

  name: {
    color: '#00A6A8',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  phone: {
    color: '#00A6A8',
    fontSize: 14,
  },
});
