import React from 'react';
import {StyleSheet, View} from 'react-native';
import ContentLoader, {Rect, Circle} from 'react-content-loader/native';
import {useTheme} from '../../context/ThemeContext';
import IconApp from '../../assets/icons/AllCustomIcons';

interface stylesProps {
  stylesContent: any;
}

const SkeletonItemProduct: React.FC<stylesProps> = ({stylesContent}) => {
  const {isDarkMode, colors} = useTheme();
  return (
    <View
      style={[
        styles.contentSkeleton,
        colors.borderVariant,
        {...stylesContent},
      ]}>
      <ContentLoader
        height={70}
        animate={true}
        speed={1}
        backgroundColor={isDarkMode ? '#282828' : 'rgb(203 213 225)'}
        foregroundColor={isDarkMode ? '#4D4D4D' : 'rgb(193 203 215)'}>
        <Rect x="0" y="0" rx="4" ry="4" width="200" height="20" />
        <Rect x="0" y="28" rx="4" ry="4" width="250" height="18" />
      </ContentLoader>
      <View style={styles.icon}>
        <IconApp
          name={'keyboard-arrow-right'}
          size={25}
          directoryName={'MaterialIcons'}
          color={colors?.borderVariant?.borderColor}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentSkeleton: {
    height: 65,
    borderWidth: 1,
    padding: 12,
    paddingTop: 8,
    paddingBottom: 8,
  },
    icon: {
        width: 50,
        position: 'absolute',
        right: 10,
        top: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default React.memo(SkeletonItemProduct);
