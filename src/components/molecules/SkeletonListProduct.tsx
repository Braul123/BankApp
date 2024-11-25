import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';
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

export default React.memo(SkeletonListProduct);
