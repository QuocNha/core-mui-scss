import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { DatePickerElement } from 'react-hook-form-mui';

interface ICreateAtDatePicker {
  name: string;
}

const CreateAtDatePicker = ({ name }: ICreateAtDatePicker) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePickerElement name={name} />
    </LocalizationProvider>
  );
};

export default CreateAtDatePicker;
