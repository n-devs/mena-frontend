import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router-dom';
import LoginIcon from '../../icons/LoginIcon.svg'
import { fetchLogin, fetchAdminLogin } from '../../reducers/buttonReducer'
import { useSelector, useDispatch } from 'react-redux';


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
      //Get the whole state from characterReducer
      const inputs = useSelector(state => state.inputs);
      //Use for all the dispatch actions
      const dispatch = useDispatch();

      const goPage = () => {
            history.push('/member/login')
      }

      const onLogin = () => {
            let username = inputs.username;
            let password = inputs.password;
            console.log(username, password);
            if (props.privilege === "admin") {
                  dispatch(fetchAdminLogin(username, password))
            } else {
                  dispatch(fetchLogin(username, password))
            }


      }

      if (props.variant === "contained") {


            return (<Button
                  onClick={onLogin}
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