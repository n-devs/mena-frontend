import React from 'react';
import { Button } from '@material-ui/core';
import EAUIcon from '../../icons/EAUIcon.svg';

export default function EAUButton() {
      return (<Button
            style={{
                  textTransform: "capitalize",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "20px",
                  lineHeight: "18px",
                  textAlign: "center",
                  letterSpacing: "1.5px",
                  color: "rgba(0, 0, 0, 0.7)",
            }}
            endIcon={<img width={70} src={EAUIcon} alt="" />}
      >
            {"Eastern Asia University"}
      </Button>)
}