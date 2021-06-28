import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useSelector, useDispatch } from 'react-redux';

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

export default function ProfessionInput() {
      const classes = useStyles();
      //Get the whole state from characterReducer
      const inputs = useSelector(state => state.inputs);

      //Use for all the dispatch actions
      const dispatch = useDispatch();

      const onUpdate = (event) => {
            // console.log(event.target.value);
            dispatch({ type: "CHANGE_PROFESSION", payload: event.target.value })

      }

      return (
            <TextField
            id="profession"
            className={classes.textField}
            InputProps={{
              startAdornment: <InputAdornment position="start">{"อาชีพ:"}</InputAdornment>,
            }}
            margin="dense"
            variant="outlined"
            onChange={onUpdate}
            value={inputs.profession}
          />
      );
}
