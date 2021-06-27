import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export default function StudyInfomationButton() {
      const history = useHistory()

      // function
      const goPage = () => {
            history.push('/search')
      }

      return (<Button
            onClick={goPage}
            size="small"
            variant="contained"
            style={{
                  textTransform: "capitalize",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "20px",
                  textAlign: "center",
                  color: "rgba(0, 0, 0, 0.78)",
                  background: "#F7BD2A"
            }}
      >
            {"ศึกษาข้อมูล"}
      </Button >)
}