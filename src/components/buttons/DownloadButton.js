import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export default function DownloadButton(props) {

      const history = useHistory()

      const goPage = (prop) => (even) => {
            console.log(prop);
            history.push(`/download?id=${prop.id}`)
      }


      return (<Button
            onClick={goPage(props.row)}
            variant="contained"
            style={{
                  textTransform: "capitalize",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  letterSpacing: "0.1px",
                  textAlign: "center",
                  color: "#000",
                  textDecoration: "underline",
                  background: "#F7BD2A"
            }}
      >
            {"ดาวน์โหลด"}
      </Button >)
}