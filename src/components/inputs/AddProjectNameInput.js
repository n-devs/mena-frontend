import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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

export default function AddProjectNameInput() {
      const classes = useStyles();

      return (
            <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  spacing={2}
            >
                  <Grid item xs={2}>
                        <Typography>{"ชื่อโครงงาน"}</Typography>
                  </Grid>
                  {/* <Grid item xs={1}></Grid> */}
                  <Grid item xs={10}>
                        {":"}
                        <Input className={classes.textField} placeholder="กรอกข้อมูล" inputProps={{ 'aria-label': 'description' }} />
                  </Grid>


            </Grid>
      );

}
