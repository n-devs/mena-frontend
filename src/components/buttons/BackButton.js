import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export default function BackButton() {
      const history = useHistory()

      const goBack = () => {
            history.goBack();
      }
      return (<Button
            onClick={goBack}
            style={{
                  textTransform: "capitalize",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  // fontSize: "40px",
                  // lineHeight: "47px",
                  color: "rgba(0, 0, 0, 0.83)",
                  textDecoration: "underline"
            }}
      >
            {"Back"}
      </Button >)
}