import React from 'react';
import { StyleSheet, View } from 'react-native';
import LabelAtom from '../atoms/LabelAtom';
import TextAtom from '../atoms/TextAtom';

interface ProductDetailSectionProps {
    label: string;
    value: string;
}

const ProductDetailSection: React.FC<ProductDetailSectionProps> = ({
    label,
    value
}) => {
    return (
        <View style={styles.contentSection}>
            <View style={styles.label}>
                <LabelAtom text={label}/>
            </View>
            <View style={styles.value}>
                <TextAtom text={value} style={{textAlign: "right" }}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contentSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    label: {
        width: '50%',
    },
    value: {
        width: '50%',
        textAlign: 'right',
    },
})

export default React.memo(ProductDetailSection);
