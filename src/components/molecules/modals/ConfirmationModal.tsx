import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ButtonPrimary from '../../atoms/ButtonPrimary';
import {useTheme} from '../../../context/ThemeContext';
import IconApp from '../../../assets/icons/AllCustomIcons';

type ConfirmModalProps = {
  visible: boolean;
  title?: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmModal = ({
  visible,
  title,
  message,
  onConfirm,
  onCancel,
}: ConfirmModalProps) => {
  const {colors} = useTheme();
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.overlay}>
        <View style={[styles.container, colors.backgroundStyle]}>
          <View style={styles.headerModal}>
            <TouchableOpacity style={styles.touchClose} onPress={onCancel}>
              <IconApp
                name={'close'}
                size={25}
                directoryName={'MaterialIcons'}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.containerInfo, colors.borderVariant]}>
            <ScrollView style={styles.scrollStyle}>
              {title && (
                <Text style={[styles.title, colors.colorText]}>{title}</Text>
              )}
              <Text style={[styles.message, colors.colorText]}>{message}</Text>
            </ScrollView>
          </View>
          <View style={styles.buttonContainer}>
            <ButtonPrimary
              onPress={onConfirm}
              title={'Confirmar'}
              status={'enabled'}
              typeButton={'primary'}
            />
            <ButtonPrimary
              onPress={onCancel}
              title={'Cancelar'}
              status={'enabled'}
              typeButton={'secondary'}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    width: '100%',
    paddingBottom: 40,
    backgroundColor: 'white',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    elevation: 4,
    flexDirection: 'column',
    gap: 20,
  },
  containerInfo: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    maxHeight: 300,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  buttonContainer: {
    paddingHorizontal: 20,
    flexDirection: 'column',
    gap: 15,
    justifyContent: 'space-between',
  },
  headerModal: {
    paddingHorizontal: 20,
    paddingTop: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  touchClose: {
    height: 30,
    width: 50,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  scrollStyle: {
    flexGrow: 1,
    paddingVertical: 30,
  },
});

export default ConfirmModal;
