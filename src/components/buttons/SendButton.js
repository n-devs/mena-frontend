import React from 'react';
import { Button } from '@material-ui/core';
import { fetchSendContactUs } from '../../reducers/buttonReducer'
import { useSelector, useDispatch } from 'react-redux';

export default function SendButton() {
      //Get the whole state from characterReducer
      const inputs = useSelector(state => state.inputs);
      //Use for all the dispatch actions
      const dispatch = useDispatch();

      const onSend = () => {
            let fullName = inputs.fullName;
            let phoneNumber = inputs.phoneNumber;
            let email = inputs.email;
            let profession = inputs.profession;
            let message = inputs.userMessage;
            // console.log(username, password);
            dispatch(fetchSendContactUs(fullName, phoneNumber, email, profession, message))

      }
      return (<Button
            variant="contained"
            onClick={onSend}
            style={{
                  textTransform: "capitalize",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "rgba(0, 0, 0, 0.78)",
                  background: "#F7BD2A"
            }}
      >
            {"ส่ง"}
      </Button >)
}