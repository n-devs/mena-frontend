import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import EAUButton from '../components/buttons/EAUButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import HomeButton from '../components/buttons/HomeButton';
import AdminIcon from '../icons/AdminIcon.svg';
import UsernameInput from '../components/inputs/UsernameInput';
import PasswordInput from '../components/inputs/PasswordInput';
import ConfirmButton from '../components/buttons/ConfirmButton';
import LogoutButton from '../components/buttons/LogoutButton';
import BackButton from '../components/buttons/BackButton';


export default function EditAdminPage() {
      // const [loading, setLoading] = React.useState(false);



      // component in page
      function Tab() {
            return (<React.Fragment>
                  <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                  >
                        <Grid item xs={4}>
                              <EAUButton></EAUButton>
                        </Grid>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={4} style={{
                              justifyContent: "flex-end",
                              display: "flex",
                        }}>
                              <BackButton></BackButton>
                              <LogoutButton></LogoutButton>
                        </Grid>
                  </Grid>
            </React.Fragment>)
      }

      function Page() {

            // component in component
            function Box() {
                  return (<React.Fragment>
                        <Paper elevation={0} square style={{
                              backgroundColor: "rgba(239, 236, 224, 0.4)",
                              padding: 20
                        }}>
                              <Grid
                                    container
                                    direction="column"
                                    justify="center"
                                    alignItems="center"
                                    spacing={3}
                              >
                                    <Grid item xs={12} style={{
                                          display: "contents"
                                    }}>
                                          <img src={AdminIcon} alt="admin-icon" style={{

                                          }} />
                                          <Typography>{"??????????????????????????????????????????????????????????????????????????????????????????"}</Typography>
                                    </Grid>
                                    <Grid item xs={12} >
                                          <UsernameInput></UsernameInput>
                                    </Grid>
                                    <Grid item xs={12} >
                                          <PasswordInput></PasswordInput>
                                    </Grid>
                                    <Grid item xs={12} >
                                          <ConfirmButton></ConfirmButton>
                                    </Grid>
                              </Grid>
                        </Paper>
                  </React.Fragment>)
            }

            return (<React.Fragment>
                  <Paper elevation={0} square style={{
                        padding: 20
                  }}>
                        <Grid
                              container
                              direction="column"
                              justify="center"
                              alignItems="center"
                              spacing={3}
                        >
                              <Grid item xs={12} style={{
                                    textAlign: "center"
                              }}>
                                    <Typography>{"??????????????????????????????????????????????????????????????????????????????????????????????????????????????????"}</Typography>
                                    <Typography>{"???????????????????????????????????????????????????????????????????????????"}</Typography>
                              </Grid>
                              <Grid item xs={12} >
                                    <Box></Box>
                              </Grid>
                        </Grid>
                  </Paper>
            </React.Fragment>)
      }


      return (<React.Suspense fallback={<LinearProgress />}>
            <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
            >
                  <Grid item xs={12} style={{
                        width: "100%"
                  }}>
                        <Tab></Tab>
                  </Grid>
                  <Grid item xs={12} style={{
                        width: "100%",
                        backgroundColor: "#EFECE0",
                        padding: 20
                  }}>
                        <Page></Page>
                  </Grid>
            </Grid>
      </React.Suspense>)
}