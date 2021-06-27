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

      },
}));

export default function ProjectYearInput() {
      const classes = useStyles();

      return (
            <TextField
                  id="search-year"
                  className={classes.textField}
                  InputProps={{
                        startAdornment: <InputAdornment position="start">{"ปี:"}</InputAdornment>,
                  }}
                  margin="dense"
                  // variant="outlined"
            />
      );

}
