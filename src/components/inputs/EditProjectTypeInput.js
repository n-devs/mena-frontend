import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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

      },
}));

export default function EditProjectTypeInput() {
      const classes = useStyles();
      //Get the whole state from characterReducer
      const inputs = useSelector(state => state.inputs);

      //Use for all the dispatch actions
      const dispatch = useDispatch();

      const onUpdate = (event) => {
            // console.log(event.target.value);
            dispatch({ type: "CHANGE_EDIT_PROJECT_TYPE", payload: event.target.value })

      }
      return (
            <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  spacing={2}
            >
                  <Grid item xs={2}>
                        <Typography>{"ประเภทโครงงาน"}</Typography>
                  </Grid>
                  {/* <Grid item xs={1}></Grid> */}
                  <Grid item xs={10}>
                        {":"}
                        <Input
                              className={classes.textField}
                              placeholder="กรอกข้อมูล"
                              inputProps={{ 'aria-label': 'description' }}
                              onChange={onUpdate}
                              value={inputs.editProjectType}
                        />
                  </Grid>


            </Grid>
      );

}
