import React from 'react';
import { Button } from '@material-ui/core';
import MemberIcon from '../../icons/MemberIcon.svg';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({

      buttonIcon: {
            textTransform: "capitalize",
            fontStyle: "normal",
            fontWeight: "normal",
            // fontSize: "40px",
            // lineHeight: "47px",
            color: "rgba(0, 0, 0, 0.83)"
      },
}));

export default function SignUpButton(props) {
      const classes = useStyles()
      const history = useHistory();
      const goPage = () => {
            history.push('/register')
      }
      return (<Button
            onClick={goPage}
            className={classes.buttonIcon}
            {...props}
            startIcon={< img width={20} src={MemberIcon} alt="" />}
      >
            {"Sign Up"}
      </Button >)
}