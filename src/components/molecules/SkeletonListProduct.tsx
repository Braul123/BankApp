import React, {useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import SkeletonItemProduct from '../atoms/SkeletonItemProduct';
import {getStylesCard} from '../../services/utils/styleUtils';

interface SkeletonListProductProps {
  numberOfSkeletons: number;
}

const MemoizedSkeletonProduct = React.memo(SkeletonItemProduct);

const SkeletonListProduct: React.FC<SkeletonListProductProps> = ({
  numberOfSkeletons,
}) => {
  const skeletons = Array.from({length: numberOfSkeletons}, (_, i) => i);

  // Renderiza cada item del FlatList
  const renderItem = useCallback(
    ({index}: {index: number}) => {
      const stylesCard = getStylesCard(index, skeletons.length);
      return <MemoizedSkeletonProduct stylesContent={stylesCard} />;
    },
    [skeletons],
  );

  return (
    <View>
      <FlatList
        data={skeletons}
        renderItem={renderItem}
        keyExtractor={index => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  skeletonItem: {
    height: 20,
    backgroundColor: '#e0e0e0',
    marginVertical: 8,
  },
});

export default React.memo(SkeletonListProduct);
