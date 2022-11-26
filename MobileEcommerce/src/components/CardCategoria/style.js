import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardCategoria: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2f0d26',
    width: 'auto',
    maxWidth: 150,
    height: 60,
    color: 'black',
    borderRadius: 50,
    marginHorizontal: 10,
    marginBottom: 15,
  },
  imgCategoria: {
    width: 50,
    height: 50,
    borderRadius: 80,
  },

  image: {
    width: '35%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 50,
  },
  imagem:{
    width: '100%',
    height: '60%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  textoCategoria: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'right',
  },
});
