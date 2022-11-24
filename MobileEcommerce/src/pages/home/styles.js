import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    paddingBottom: 200,
  },

  container: {
    flex: 1,
    backgroundColor: '#1C1B1F',
  },
  header: {
    backgroundColor: '#272626',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignItems: 'flex-end',
    width: '100%',
    height: '12%',
  },
  banner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFBFE',
    width: '76%',
    height: 168,
    marginStart: '14%',
    marginVertical: 15,
    borderRadius: 15,
  },
  texto: {
    padding: 6,
    color: '#ffff',
    fontSize: 26,
    fontWeight: '400',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: {width: 6, height: 5},
    textShadowRadius: 4,
  },
  textoBanner: {
    padding: 6,
    color: '#000000',
    fontSize: 32,
    fontWeight: '800',
    textShadowColor: 'lightgrey',
    textShadowOffset: {width: 6, height: 5},
    textShadowRadius: 4,
  },
  textoNome: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  textoValor: {
    color: '#000000',
    fontSize: 22,
    fontWeight: '900',
  },
  containerCards: {
    flexDirection: 'column',
    //   backgroundColor: '#1C1B1F',
    marginBottom: 15,
    justifyContent: 'center',
  },
  imagem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    marginHorizontal: '12%',
  },
  card: {
    width: '35%',
    height: 200,
    backgroundColor: '#FFFBFE',
    borderRadius: 15,
    marginStart: '10%',
    shadowColor: '#fff',
  },
  flatbox: {
    height: 425,
  },
});
