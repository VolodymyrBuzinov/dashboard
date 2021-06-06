import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'nowrap',
  },
  textField: {
    marginLeft: '25px',
    marginRight: '25px',
    width: 200,
    color: 'red !important',
  },
}));

export default function DateAndTimePickers() {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = useState(
    new Date('2021-06-15T21:11:54'),
  );

  const handleDateChange = date => {
    setSelectedDate(date.target.value);
  };

  return (
    <form className={classes.container} noValidate>
      {/* <input type="time" />
      <input type="date" /> */}

      <TextField
        id="datetime-local"
        type="datetime-local"
        className={classes.textField}
        // defaultValue="2021-06-15T10:30"
        value={selectedDate}
        onChange={handleDateChange}
        disableToolbar
        InputLabelProps={{
          shrink: true,
        }}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </form>
  );
}
