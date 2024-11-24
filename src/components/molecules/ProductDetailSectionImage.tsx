import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import LabelAtom from '../atoms/LabelAtom';
import TextAtom from '../atoms/TextAtom';

interface ProductDetailSectionProps {
    label: string;
    value: string;
}

const ProductDetailSectionImage: React.FC<ProductDetailSectionProps> = ({
    label,
    value
}) => {
    const [image, setImage] = React.useState<any>({uri: value});
    return (
        <View style={styles.contentSection}>
            <View style={styles.label}>
                <LabelAtom text={label}/>
            </View>
            <View style={styles.value}>
                <Image
                    source={image}
                    style={styles.image}
                    resizeMode="contain"
                    onError={() => setImage(require('../../assets/images/card.png'))}
                />
            </View>
        </View>
    );
}

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
    }
})

export default React.memo(ProductDetailSectionImage);
