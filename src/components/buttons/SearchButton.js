import React from 'react';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/styles';
import { fetchSearch } from '../../reducers/buttonReducer'
import { useSelector, useDispatch } from 'react-redux';


const useStyles = makeStyles((theme) => ({
      buttonContained: {
            textTransform: "capitalize",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "20px",
            textAlign: "center",
            color: "#fff",
            background: "#F7BD2A"
      },
      buttonLine: {
            textTransform: "capitalize",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "20px",
            textAlign: "center",
            color: "#F7BD2A",
            textDecoration: "underline"
      },
}));

export default function SearchButton() {
      const classes = useStyles();
      //Get the whole state from characterReducer
      const inputs = useSelector(state => state.inputs);
      //Use for all the dispatch actions
      const dispatch = useDispatch();

      const onSearch = () => {
            let all = inputs.searchAll;
            let name = inputs.searchProjectName;
            let organizer = inputs.searchProjectOrganizer;
            let date = inputs.searchProjectDate;
            let type = inputs.searchProjectType;
            let abstract = inputs.searchProjectAbstract;


            dispatch(fetchSearch(all, name, organizer, date, type, abstract))
      }

      return (<Button
            onClick={onSearch}
            variant="contained"
            className={classes.buttonContained}
            endIcon={<SearchIcon style={{
                  fontSize: "20px",
            }} />}
      >
            {"ค้นหา"}
      </Button>)
}