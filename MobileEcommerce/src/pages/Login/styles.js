import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0c24',
  },

  imageBackground: {
    flex: 1,
  },

  logo: {
    height: '40%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  inputBox: {
    height: '30%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 150,
  },
  inputs: {
    width: 263,
    height: 56,
    borderWidth: 1,
    borderColor: '#E8DEF8',
    borderStyle: 'solid',
    borderRadius: 10,
    marginTop: 20,
    paddingLeft: 15,
    fontSize: 18,
    color: '#E8DEF8',
  },


  buttonLogin: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
    width: 157,
    height: 35,
    backgroundColor: '#8f0d27',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#AEA9B4',
    borderRadius: 100,
    },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'white'
  
  },

  imageBox:{
    borderRadius: 180,
    width: 200,
    height: 200,
    elevation: 7,
    shadowColor: '#000',
  },
  image:{
    width: 200,
    height: 200,
    tintColor: '#8f0d27',
  }
});
