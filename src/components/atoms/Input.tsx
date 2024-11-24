import React, { useEffect, useState } from 'react';
import {TextInput, StyleSheet, KeyboardTypeOptions, View, TouchableOpacity, Text} from 'react-native';
import {useTheme} from '../../context/ThemeContext';
import {colorsMain} from '../../utils/colors';
import DatePicker from 'react-native-date-picker';
import IconApp from '../../assets/icons/AllCustomIcons';
import { TypeDatePickerInput } from '../../types/types';
import DatePickerApp from './DatePicker';
import { format, parse, parseISO } from 'date-fns';

interface InputAtomProps {
  placeholder: string;
  value: string;
  onChangeText: (text: any) => void;
  keyboardType?: KeyboardTypeOptions;
  error: string;
  maxLength: number;
  datePicker?: TypeDatePickerInput,
  disabled: boolean;
}

export default function InputAtom(data: InputAtomProps) {
  const {colors, isDarkMode} = useTheme();
  const [open, setOpen] = useState(false);
  const [dateP, setDateP] = useState<any>();

  useEffect(() => {
    setDateP(data.value);
  }, [data.value]);

  const parseDate = () => {    
    if (dateP) {
      const dateFormat = new Date(dateP);
      return format(dateFormat, "dd-MM-yyyy");
    } else {
      return '';
    }
  }

  return (
    <View>
        <TextInput
          style={[
            styles.input,
            colors.colorText,
            {borderColor: data.error ? 'red' : colors.borderVariant.borderColor},
          ]}
          placeholder={data.placeholder}
          placeholderTextColor={
            isDarkMode
              ? colorsMain.system.placeholderDarkMode
              : colorsMain.system.placeholderLigthMode
          }
          value={parseDate()}
          onChangeText={data.onChangeText}
          keyboardType={data.keyboardType}
          maxLength={data.maxLength}
          editable={!data.disabled}
        />
        {data.datePicker && (
          <>
            <TouchableOpacity style={styles.iconContainer} disabled={data.datePicker.disabled} onPress={() => setOpen(true)}>
              <IconApp name={"calendar"} size={20} directoryName={'AntDesign'}/>
            </TouchableOpacity>

            <DatePickerApp
            open={open}
            setOpen={setOpen}
            date={data.value}
            onChangeText={(date: Date) => data.onChangeText(date)}
            minimumDate={new Date()}
            />
          </>
        )}

    </View>
  );
}

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