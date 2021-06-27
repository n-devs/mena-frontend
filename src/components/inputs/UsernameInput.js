import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

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

export default function UsernameInput(props) {
      const classes = useStyles();

      if (props.startAdornment) {
            return (
                  <TextField
                        id="username"
                        className={classes.textField}
                        InputProps={{
                              startAdornment: <InputAdornment position="start">{"Username:"}</InputAdornment>,
                        }}
                        margin="dense"
                        variant="outlined"
                  />
            );
      } else {
            return (
                  <TextField
                        id="username"
                        placeholder="Username"
                        className={classes.textField}
                        margin="dense"
                        variant="outlined"
                  />
            );
      }


}
