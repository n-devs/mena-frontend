import React from 'react';
import { Button } from '@material-ui/core';

export default function ConfirmButton() {
      return (<Button
            variant="contained"
            style={{
                  textTransform: "capitalize",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "rgba(0, 0, 0, 0.78)",
                  background: "#F7BD2A"
            }}
      >
            {"ยืนยัน"}
      </Button >)
}