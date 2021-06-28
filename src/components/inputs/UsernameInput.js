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

export default function UsernameInput(props) {
      const classes = useStyles();
      //Get the whole state from characterReducer
      const inputs = useSelector(state => state.inputs);

      //Use for all the dispatch actions
      const dispatch = useDispatch();

      const onUpdate = (event) => {
            // console.log(event.target.value);
            dispatch({ type: "CHANGE_USERNAME", payload: event.target.value })

      }

      if (props.startAdornment) {
            return (
                  <TextField
                        onChange={onUpdate}
                        id="username"
                        className={classes.textField}
                        InputProps={{
                              startAdornment: <InputAdornment position="start">{"Username:"}</InputAdornment>,
                        }}
                        value={inputs.username}
                        margin="dense"
                        variant="outlined"
                  />
            );
      } else {
            return (
                  <TextField
                        onChange={onUpdate}
                        id="username"
                        placeholder="Username"
                        className={classes.textField}
                        value={inputs.username}
                        margin="dense"
                        variant="outlined"
                  />
            );
      }


}
