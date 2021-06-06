import React, { useState } from 'react';
import style from './DateAndTimePickers.module.scss';

export default function DateAndTimePickers({ getDate }) {
  const [selectedDate, setSelectedDate] = useState(
    new Date('2021-06-15T09:00:00'),
  );

  const handleDateChange = date => {
    setSelectedDate(date.target.value);
  };

  return (
    <form className={style.DateAndTimePickers__form}>
      <input
        className={style.DateAndTimePickers__input}
        type="datetime-local"
        name="dateCreate"
        required
        min="2021-06-01T08:00"
        max="2022-06-30T21:00"
        value={selectedDate}
        onChange={handleDateChange}
        onBlur={() => {
          getDate(selectedDate);
        }}
      />
    </form>
  );
}

/* не могу настроить стили...
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  // root: {},
  container: {
    display: 'flex',
    flexWrap: 'nowrap',
    backgroundColor: 'red',
    contrastText: '#ffcc00',
  },
  textField: {
    marginLeft: '25px',
    marginRight: '25px',
    width: 200,
    color: '#db0938',
  },
}));

const theme = createMuiTheme({
  typography: {
    // Tell Material-UI what the font-size on the html element is.
    // htmlFontSize: 20,
    fontSize: 10,
    main: '#ffffff',
  },

  palette: {
    primary: {
      // Purple and green play nicely together.
      // main: purple[500],
      main: palette.primary.main,
    },
  },
});

export default function DateAndTimePickers() {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = useState(
    new Date('2021-06-15T21:11:54'),
  );

  const handleDateChange = date => {
    setSelectedDate(date.target.value);
  };

  return (


    <ThemeProvider theme={theme}>
      <TextField
        id="datetime-local"
        type="datetime-local"
        className={classes.textField}
        // defaultValue="2021-06-15T10:30"
        value={selectedDate}
        onChange={handleDateChange}
        // disableToolbar
        color="primary"
        InputLabelProps={{
          shrink: true,
        }}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </ThemeProvider>
  );
}

*/
