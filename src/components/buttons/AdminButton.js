import React from 'react';
import { Button } from '@material-ui/core';
import AdminIcon from '../../icons/AdminIcon.svg';
import { useHistory } from 'react-router-dom';

export default function AdminButton() {
      const history = useHistory()

      // function
      const goPage = () => {
            history.push('/admin/login')
      }

      return (<Button
            onClick={goPage}
            style={{
                  textTransform: "capitalize",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  // fontSize: "40px",
                  // lineHeight: "47px",
                  color: "rgba(0, 0, 0, 0.83)"
            }}
            startIcon={< img width={20} src={AdminIcon} alt="" />}
      >
            {"Admin"}
      </Button >)
}