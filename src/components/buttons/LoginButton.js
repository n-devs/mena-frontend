import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router-dom';
import LoginIcon from '../../icons/LoginIcon.svg'

const useStyles = makeStyles((theme) => ({
      buttonContained: {

            textTransform: "capitalize",
            fontStyle: "normal",
            fontWeight: "bold",
            textAlign: "center",
            color: "rgba(0, 0, 0, 0.78)",
            background: "#F7BD2A"
      },
      buttonLine: {
            textTransform: "capitalize",
            fontStyle: "normal",
            fontWeight: "bold",
            textAlign: "center",
            color: "#F7BD2A",
            textDecoration: "underline"
      },
      buttonIcon: {
            textTransform: "capitalize",
            fontStyle: "normal",
            fontWeight: "normal",
            // fontSize: "40px",
            // lineHeight: "47px",
            color: "rgba(0, 0, 0, 0.83)"
      },
}));

export default function LoginButton(props) {

      const classes = useStyles()
      const history = useHistory();

      const goPage = () => {
            history.push('/member/login')
      }

      if (props.variant === "contained") {


            return (<Button
                  className={classes.buttonContained}
                  variant="contained"
                  {...props}
            >
                  {"เข้าสู่ระบบ"}
            </Button >)
      } else if (props.startIcon) { 
            return (<Button
                  onClick={goPage}
                  className={classes.buttonIcon}
                  startIcon={< img width={20} src={LoginIcon} alt="" />}
            >
                  {"Login"}
            </Button >)
      } else {
            return (<Button
                  onClick={goPage}
                  className={classes.buttonLine}
                  {...props}

            >
                  {"เข้าสู่ระบบ"}
            </Button >)
      }
}