import React from 'react';
import { Button } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';

export default function DownloadButtonIcon() {

      return (<Button
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
            startIcon={<GetAppIcon style={{
                  fontSize: "20px",
            }}></GetAppIcon>}
      >
            {"ดาวน์โหลด"}
      </Button >)
}