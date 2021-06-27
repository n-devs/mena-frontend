import React from 'react';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
      buttonContained: {
            textTransform: "capitalize",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "20px",
            textAlign: "center",
            color: "#fff",
            background: "#F7BD2A"
      },
      buttonLine: {
            textTransform: "capitalize",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "20px",
            textAlign: "center",
            color: "#F7BD2A",
            textDecoration: "underline"
      },
}));
export default function SearchButton() {
      const classes = useStyles();

      return (<Button
            variant="contained"
            className={classes.buttonContained}
            endIcon={<SearchIcon style={{
                  fontSize: "20px",
            }} />}
      >
            {"ค้นหา"}
      </Button>)
}