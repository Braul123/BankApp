import React, { useCallback, useEffect, useState } from 'react';
import {TextInput, StyleSheet, KeyboardTypeOptions, View, TouchableOpacity} from 'react-native';
import {useTheme} from '../../context/ThemeContext';
import {colorsMain} from '../../utils/colors';
import IconApp from '../../assets/icons/AllCustomIcons';
import DatePickerApp from './DatePicker';
import { format} from 'date-fns';
import { InputAtomProps } from '../../types/interfaces';

const InputAtom: React.FC<InputAtomProps> = ({
  placeholder,
  value,
  onChangeText,
  keyboardType,
  error,
  maxLength,
  datePicker,
  disabled
}) => {
  const {colors, isDarkMode} = useTheme();
  const [open, setOpen] = useState(false);
  const [dateP, setDateP] = useState<any>();

  useEffect(() => {
    if (datePicker){
      setDateP(value);
    }
  }, [value]);

  // Parsea la fecha para mostrarla en el input - si no es fecha devuelve el valor original
  const parseDate = useCallback(() => {
    if (dateP) {
      const dateFormat = new Date(dateP);
      return format(dateFormat, 'dd-MM-yyyy');
    } else {
      return value;
    }
  }, [dateP, value]);

  return (
    <View>
        <TextInput
          onPress={() => datePicker && !datePicker.disabled ? setOpen(true) : null}
          style={[
            styles.input,
            colors.colorText,
            {borderColor: error ? 'red' : colors.borderVariant.borderColor, opacity: disabled && !datePicker ? 0.5 : 1},
          ]}
          placeholder={placeholder}
          placeholderTextColor={
            isDarkMode
              ? colorsMain.system.placeholderDarkMode
              : colorsMain.system.placeholderLigthMode
          }
          value={parseDate()}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          maxLength={maxLength}
          editable={!disabled}
        />
        {datePicker && (
          <>
            <TouchableOpacity style={styles.iconContainer} disabled={datePicker.disabled} onPress={() => setOpen(true)}>
              <IconApp name={"calendar"} size={20} directoryName={'AntDesign'}/>
            </TouchableOpacity>

            <DatePickerApp
            open={open}
            setOpen={setOpen}
            date={value}
            onChangeText={(date: Date) => onChangeText(date)}
            minimumDate={new Date()}
            />
          </>
        )}

    </View>
  );
}

export default React.memo(InputAtom);

const styles = StyleSheet.create({
  input: {
    height: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    paddingRight: 48,
  },
  iconContainer: {
    height: 60,
    position: 'absolute',
    right: 0,
    top: 0,
    width: 45,
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});