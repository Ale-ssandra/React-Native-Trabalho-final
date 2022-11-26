import * as Animatable from 'react-native-animatable';
import {Image, ImageBackground} from 'react-native';

export const Load = () => {
  const zoomOut = {
    0.1: {
      opacity: 0.1,
      scale: 4,
    },
    0.2: {
      opacity: 0.2,
      scale: 3,
    },
    0.3: {
      opacity: 0.4,
      scale: 2,
    },
    0.4: {
      opacity: 0.6,
      scale: 1.8,
    },
    0.5: {
      opacity: 0.6,
      scale: 1.6,
    },
    0.6: {
      opacity: 0.6,
      scale: 1.4,
    },
    0.7: {
      opacity: 0.8,
      scale: 1.2,
    },
    0.8: {
      opacity: 0.9,
      scale: 1,
    },
    0.9: {
      opacity: 0.9,
      scale: 1.05,
    },
    1: {
      opacity: 1,
      scale: 1,
    },
  };
  return (
    <ImageBackground
      imageStyle={{opacity: 0.08}}
      source={require('../../images/texturaFundo.png')}
      style={{
        flex: 1,
        backgroundColor: '#0e0c24',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <Animatable.Image
        animation={zoomOut}
        source={require('../../images/Logo.png')}
      />
    </ImageBackground>
  );
};
