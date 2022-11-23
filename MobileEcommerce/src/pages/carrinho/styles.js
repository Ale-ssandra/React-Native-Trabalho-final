import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    backgroundColor: '#1C1B1F',
    alignItems: 'center',
    paddingBottom: 128,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#272626',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    height: '12%',
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
  botao: {
    width: 206,
    height: 48,
    backgroundColor: '#EE6B22',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#FFFF',
    fontSize: 20,
    fontWeight: '700',
  },
  finalizar: {
    position: 'absolute',
    bottom: 80,
    left: '50%',
    marginLeft: -104,
  },
  produtos: {
    left: '50%',
    marginLeft: -167,
  },
});
