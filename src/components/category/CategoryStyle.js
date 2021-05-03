import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  category: {
    backgroundColor: 'white',
    borderRadius: 24,
    flexDirection: 'row',
    marginBottom: 14,
    marginRight: 8,
    paddingBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
  },
  active: {
    backgroundColor: '#E2CBFF',
  },
  checkImage: {
    marginRight: 10,
  },
  activeText: {
    color: '#6C0EE4',
    fontWeight: 'bold',
  },
  inactiveText: {
    color: '#9586A8',
  },
  categoryText: {
    fontSize: 14,
  },
});
