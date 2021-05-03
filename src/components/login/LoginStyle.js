import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#F6F5F5',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    flex: 2,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    color: '#2D0C57',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  desctiption: {
    color: '#9586A8',
    fontSize: 17,
    marginBottom: 17,
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#0BCE83',
    borderRadius: 8,
    marginTop: 49,
    paddingBottom: 16,
    paddingTop: 16,
  },
  loginText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});
