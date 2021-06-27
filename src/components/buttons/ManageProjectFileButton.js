import React from 'react';
import { Button } from '@material-ui/core';

export default function ManageProjectFileButton() {
      return (<Button
            variant="contained"
            style={{
                  textTransform: "capitalize",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  textAlign: "center",
                  textDecorationLine: "underline",
                  color: "#000000",
                  background: "#F7BD2A"
            }}
      >
            {"จัดการไฟล์โครงงาน"}
      </Button >)
}