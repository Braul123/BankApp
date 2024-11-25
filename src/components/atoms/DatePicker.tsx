import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import { DatePickerProps } from '../../types/interfaces';

const DatePickerApp :React.FC<DatePickerProps> = ({
  open,
  setOpen,
  date,
  onChangeText,
  minimumDate
}) => {
  return (
    <View>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={new Date(date)}
        minimumDate={minimumDate}
        onConfirm={date => {
            setOpen(false);
            onChangeText(date);
        }}
        onCancel={() => setOpen(false)}
      />
    </View>
  );
}

export default React.memo(DatePickerApp);