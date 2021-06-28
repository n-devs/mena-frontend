import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    borderRadius: "50px"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function SearchAllInput() {
  const classes = useStyles();
  //Get the whole state from characterReducer
  const inputs = useSelector(state => state.inputs);

  //Use for all the dispatch actions
  const dispatch = useDispatch();

  const onUpdate = (event) => {
    // console.log(event.target.value);
    dispatch({ type: "CHANGE_SEARCH_ALL", payload: event.target.value })

  }

  return (
    <Paper component="form" className={classes.root}>

      <InputBase
        className={classes.input}
        placeholder="ค้นหาโครงงานทั้งหมด"
        inputProps={{ 'aria-label': 'ค้นหาโครงงานทั้งหมด' }}
        onChange={onUpdate}
        value={inputs.searchAll}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
