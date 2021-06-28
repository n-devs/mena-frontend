import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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

export default function UserMessageInput() {
      const classes = useStyles();
      //Get the whole state from characterReducer
      const inputs = useSelector(state => state.inputs);

      //Use for all the dispatch actions
      const dispatch = useDispatch();

      const onUpdate = (event) => {
            // console.log(event.target.value);
            dispatch({ type: "CHANGE_USER_MESSAGE", payload: event.target.value })

      }

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
                  onChange={onUpdate}
                  value={inputs.userMessage}
            />
      );
}
