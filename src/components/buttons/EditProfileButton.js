import React from 'react';
import { Button } from '@material-ui/core';

export default function EditProfileButton() {
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
            {"แก้ไขโปรไฟล์"}
      </Button >)
}