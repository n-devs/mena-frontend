import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

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
            fontSize: "20px",
            textAlign: "center",
            color: "#F7BD2A",
            textDecoration: "underline"
      },
}));

export default function RegisterButton(props) {
      const classes = useStyles()

      const history = useHistory()

      function goPage() {
            history.push('/register')
      }

      if (props.variant === "contained") {


            return (<Button
                  {...props}
                  className={classes.buttonContained}
                  variant="contained"
            >
                  {"สมัครสมาชิก"}
            </Button >)
      } else {
            return (<Button
                  {...props}
                  className={classes.buttonLine}
                  onClick={goPage}

            >
                  {"สมัครสมาชิก"}
            </Button >)
      }
}