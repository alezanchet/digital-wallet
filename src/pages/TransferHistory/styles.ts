import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  backgroundLinesContainer: {
    marginTop: 20,
  },

  backgroundLines: {
    width: '100%',
    height: 1,
    backgroundColor: '#1E405F',
    marginVertical: 5,
  },

  graphList: {
    position: 'absolute',
    top: 95,
    marginVertical: 30,
    height: 210,
  },

  graphItemContainer: {
    alignItems: 'center',
    marginHorizontal: 15,
  },

  graphMountItem: {
    color: '#00A6A8',
    marginBottom: 5,
  },

  graphSmallBall: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#165182',
  },

  graphLineItem: {
    width: 2,
  },

  graphAvatar: {
    height: 38,
    width: 38,
    borderRadius: 19,
    borderColor: '#00A6A8',
    borderWidth: 2,
  },

  list: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 70,
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
  },

  phone: {
    color: '#00A6A8',
    fontSize: 14,
    marginVertical: 5,
  },

  mount: {
    color: '#00A6A8',
    fontSize: 14,
  },
});
