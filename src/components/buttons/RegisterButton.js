import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { fetchRegister } from '../../reducers/buttonReducer'
import { useSelector, useDispatch } from 'react-redux';

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
      //Get the whole state from characterReducer
      const inputs = useSelector(state => state.inputs);
      //Use for all the dispatch actions
      const dispatch = useDispatch();

      function goPage() {
            history.push('/member/register')
      }

      const onRegister = () => {
            let fullName = inputs.fullName;
            let phoneNumber = inputs.phoneNumber;
            let email = inputs.email;
            let profession = inputs.profession;
            let username = inputs.username;
            let password = inputs.password;
            // console.log(username, password);
            dispatch(fetchRegister(fullName, phoneNumber, email, profession, username, password))

      }

      if (props.variant === "contained") {


            return (<Button
                  onClick={onRegister}
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