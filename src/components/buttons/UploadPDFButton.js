import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
      root: {
            '& > *': {
                  margin: theme.spacing(1),
            },
      },
      input: {
            display: 'none',
      },
}));

export default function UploadPDFButton() {
      const classes = useStyles();

      return (
            <div className={classes.root}>
                  <input
                        accept="application/pdf"
                        className={classes.input}
                        id="upload-file-pdf"
                        multiple
                        type="file"
                  />
                  <label htmlFor="upload-file-pdf">
                        <Button variant="contained"
                              style={{
                                    textTransform: "capitalize",
                                    fontStyle: "normal",
                                    fontWeight: "bold",
                                    fontSize: "38px",
                                    lineHeight: "42px",
                                    letterSpacing: "0.1px",
                                    textAlign: "center",
                                    color: "rgb(0, 0, 0)",
                                    textDecoration: "underline",
                                    background: "rgb(247, 189, 42)",
                              }}
                              component="span">
                              {"อัปโหลดเอกสาร"}
                        </Button>
                  </label>
            </div>
      );
}
