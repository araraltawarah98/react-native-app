import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    backgroundColor: '#F6F5F5',
    flex: 1,
  },
  box: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 80,
  },
  title: {
    color: '#2D0C57',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  search: {
    borderColor: '#D9D0E3',
    borderRadius: 27,
    borderWidth: 1,
    flexDirection: 'row',
    marginBottom: 40,
  },
  searchIcon: {
    padding: 16,
  },
  textInput: {
    flex: 1,
  },
  input: {
    fontSize: 17,
    paddingLeft: 10,
    paddingRight: 10,
  },
  rowItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  items: {
    flex: 1,
  },
});
