import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { peopleFromServer } from '../data/people';

export default function ComboBox() {
  return (
    <Autocomplete
      getOptionLabel={(p) => p.name}
      disablePortal
      id="combo-box-demo"
      options={peopleFromServer}
      sx={{ width: 300 }}
      renderInput={
        (el) => <TextField {...el} label="Movie" />
      }
    />
  );
}
