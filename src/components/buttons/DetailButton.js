import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
      buttonContained: {

            textTransform: "capitalize",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "20px",
            textAlign: "center",
            color: "rgba(0, 0, 0, 0.78)",
            background: "#F7BD2A"
      },
      buttonLine: {
            textTransform: "capitalize",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "15px",
            letterSpacing: "0.1px",
            textAlign: "center",
            color: "#F7BD2A",
            textDecoration: "underline"
      },
}));

export default function DetailButton(props) {
      const classes = useStyles()
      const history = useHistory()

      const goPage = (prop) => (even) => {
            console.log(prop);
            history.push(`/detail?id=${prop.id}`)
      }

      return (<Button
            onClick={goPage(props.row)}
            className={classes.buttonLine}
      >
            {"รายละเอียด"}
      </Button >)
}