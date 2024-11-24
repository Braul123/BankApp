import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';

interface DatePickerProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    date: any;
    onChangeText: (date: any) => void;
    minimumDate: Date;
}

export default function DatePickerApp(data: DatePickerProps) {
  return (
    <View>
      <DatePicker
        modal
        mode="date"
        open={data.open}
        date={new Date(data.date)}
        minimumDate={data.minimumDate}
        onConfirm={date => {
            data.setOpen(false);
            data.onChangeText(date);
        }}
        onCancel={() => data.setOpen(false)}
      />
    </View>
  );
}
