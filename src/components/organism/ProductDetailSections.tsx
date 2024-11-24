import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ProductType } from '../../types/types';
import ProductDetailSection from '../molecules/ProductDetailSection';
import ProductDetailSectionImage from '../molecules/ProductDetailSectionImage';
import { format } from 'date-fns';

const ProductDetailSections: React.FC<ProductType> = ({
    id,
    name,
    description,
    logo,
    date_release,
    date_revision
}) => {
    return (
        <View>
            <ProductDetailSection label={'Nombre'} value={name}/>
            <ProductDetailSection label={'Descripción'} value={description}/>
            <ProductDetailSectionImage label={'Logo'} value={logo}/>
            <ProductDetailSection label={'Fecha liberación'} value={format(date_release, 'dd-MM-yyyy')}/>
            <ProductDetailSection label={'Fecha revisión'} value={format(date_revision, 'dd-MM-yyyy')}/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default ProductDetailSections;
