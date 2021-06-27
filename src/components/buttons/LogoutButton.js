import React from 'react';
import { Button } from '@material-ui/core';
import LogoutIcon from '../../icons/LogoutIcon.svg';

export default function LogoutButton() {
      return (<Button
            style={{
                  textTransform: "capitalize",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  color: "rgba(0, 0, 0, 0.83)"
            }}
            startIcon={< img width={20} src={LogoutIcon} alt="" />}
      >
            {"Logout"}
      </Button >)
}