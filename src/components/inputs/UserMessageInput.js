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

export default function UserMessageInput() {
      const classes = useStyles();

      return (
            <TextField
                  id="email"
                  className={classes.textField}
                  placeholder=". . . กรอกข้อความของคุณ . . ."
                  multiline
                  rowsMax={4}
                  rows={4}
                  margin="dense"
                  variant="outlined"
            />
      );
}
