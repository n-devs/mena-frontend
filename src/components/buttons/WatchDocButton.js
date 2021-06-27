import React from 'react';
import { Button } from '@material-ui/core';

export default function WatchDocButton() {

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
      >
            {"ดูตัวอย่าง"}
      </Button >)
}