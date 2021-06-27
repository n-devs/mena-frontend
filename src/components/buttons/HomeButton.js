import React from 'react';
import { Button } from '@material-ui/core';
import HomeIcon from '../../icons/HomeIcon.svg';
import { useHistory } from 'react-router-dom';

export default function HomeButton() {
      const history = useHistory()

      // function
      const goPage = () => {
            history.push('/')
      }

      return (<Button
            onClick={goPage}
            style={{
                  textTransform: "capitalize",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  // fontSize: "40px",
                  // lineHeight: "47px",
                  color: "rgba(0, 0, 0, 0.83)"
            }}
            startIcon={< img width={20} src={HomeIcon} alt="" />}
      >
            {"Home"}
      </Button >)
}