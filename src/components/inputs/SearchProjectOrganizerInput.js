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

export default function SearchProjectOrganizerInput() {
      const classes = useStyles();

      return (
            <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  spacing={2}
            >
                  <Grid item xs={12}>
                        <Typography>{"สืบค้น : ผู้จัดทำโครงงาน"}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                        <Input className={classes.textField} placeholder="ค้นหา" inputProps={{ 'aria-label': 'description','style':{ textAlign: "center"} }} />
                  </Grid>


            </Grid>
      );

}
