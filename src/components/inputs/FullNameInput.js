import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
      root: {
            display: 'flex',
            flexWrap: 'wrap',
      },
      textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: '25ch',
            backgroundColor: "white"
      },
}));

export default function FullNameInput() {
      const classes = useStyles();

      return (
            <TextField
            id="full-name"
            className={classes.textField}
            InputProps={{
              startAdornment: <InputAdornment position="start">{"ชื่อ-สกุล:"}</InputAdornment>,
            }}
            margin="dense"
            variant="outlined"
          />
      );
}
