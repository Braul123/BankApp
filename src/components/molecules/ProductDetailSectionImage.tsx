import React, {useCallback, useEffect} from 'react';
import {Alert, Image, StyleSheet, View} from 'react-native';
import LabelAtom from '../atoms/LabelAtom';
import TextAtom from '../atoms/TextAtom';
import {ProductDetailSectionProps} from '../../types/interfaces';

const ProductDetailSectionImage: React.FC<ProductDetailSectionProps> = ({
  label,
  value,
}) => {
  const [image, setImage] = React.useState<any>({uri: value});

  useEffect(() => {
    if (value) {
      setImage({uri: value});
    }
    return () => {
      setImage(require('../../assets/images/card.png'));
    };
  }, [value]);

    // Si la imagen da error
  const errorImage = useCallback(() => {
    Alert.alert('Opps!!', 'Hubo un problema cargando la imagen, valida que la URL sea correcta');
    setImage(require('../../assets/images/card.png'));
  },[])

  return (
    <View style={styles.contentSection}>
      <View style={styles.label}>
        <LabelAtom text={label} />
      </View>
      <View style={styles.value}>
        <Image
          source={image}
          style={styles.image}
          resizeMode="contain"
          onError={() => errorImage()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentSection: {
    flexDirection: 'column',
    paddingVertical: 10,
    gap: 5,
  },
  label: {
    width: '100%',
  },
  value: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 200,
    width: 250,
  },
});

export default React.memo(ProductDetailSectionImage);
