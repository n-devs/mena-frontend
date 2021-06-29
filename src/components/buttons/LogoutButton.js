import React from 'react';
import { Button } from '@material-ui/core';
import LogoutIcon from '../../icons/LogoutIcon.svg';
import { fetchLogout } from '../../reducers/buttonReducer'
import { useDispatch } from 'react-redux';

export default function LogoutButton() {
      const dispatch = useDispatch();

      const onLogout = () => {
            dispatch(fetchLogout())


      }

      return (<Button
            onClick={onLogout}
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