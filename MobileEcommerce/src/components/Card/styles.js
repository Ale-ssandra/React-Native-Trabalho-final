import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#302d38',
    width: 334,
    height: 89,
    borderRadius: 15,
    marginTop: 12,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  preco: {
    flexDirection: 'row',
    width: '56%',
    height: '56%',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFF',
    borderRadius: 15,
  },
  qtd: {
    position: 'absolute',
  },
  text:{
    color: '#ffff'
  },
  imagens: {
    right: 3,
    width: 24,
    height: 24,
  },
});
