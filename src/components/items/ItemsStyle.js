import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  imageConatainer: {
    flex: 1,
    padding: 20,
  },
  image: {
    borderRadius: 8,
    height: '100%',
    width: '100%',
  },
  info: {
    flex: 1,
    padding: 20,
  },
  title: {
    color: '#2D0C57',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  wieght: {
    color: '#9586A8',
    fontSize: 16,
  },
  price: {
    color: '#2D0C57',
    fontSize: 22,
    fontWeight: 'bold',
  },
  rowItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    height: 40,
    justifyContent: 'center',
    marginTop: 30,
    width: 70,
  },
  green: {
    backgroundColor: '#0BCE83',
    borderColor: '#0BCE83',
  },
  white: {
    backgroundColor: '#FFFFFF',
    borderColor: '#D9D0E3',
  },
});
