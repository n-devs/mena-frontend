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
import LoginButton from '../components/buttons/LoginButton';
import SuccessAlert from '../components/alerts/SuccessAlert';
import ErrorAlert from '../components/alerts/ErrorAlert';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function LoginAdminPage() {
      // const [loading, setLoading] = React.useState(false);
      const buttons = useSelector(state => state.buttons);
      const history = useHistory()
      const [successAlert, setSuccessAlert] = React.useState({
            open: false,
            message: ""
      })

      const [errorAlert, setErrorAlert] = React.useState({
            open: false,
            message: ""
      })

      const onSuccessAlertClose = () => {
            setSuccessAlert({
                  open: false,
                  message: ""
            })
      }

      const onErrorAlertClose = () => {
            setErrorAlert({
                  open: false,
                  message: ""
            })
      }

      React.useEffect(() => {
            console.log(buttons.loginData);

            if (buttons.loginData.response) {
                  if (buttons.loginData.response.statusCode === 200) {
                        setSuccessAlert({
                              open: true,
                              message: buttons.loginData.response.message
                        })
                        history.push('/')
                  } else if (buttons.loginData.response.statusCode === 400) {
                        setErrorAlert({
                              open: true,
                              message: buttons.loginData.response.message
                        })
                  } else if (buttons.loginData.response.statusCode === 500) {
                        setErrorAlert({
                              open: false,
                              message: buttons.loginData.response.message
                        })
                  }
            }

      }, [buttons.loginData, history])

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
                              <HomeButton></HomeButton>
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
                                    <Grid item xs={12} >
                                          <img src={AdminIcon} alt="admin-icon" style={{

                                          }} />
                                          <Typography>{"ผู้ดูแลระบบ"}</Typography>
                                    </Grid>
                                    <Grid item xs={12} >
                                          <UsernameInput></UsernameInput>
                                    </Grid>
                                    <Grid item xs={12} >
                                          <PasswordInput></PasswordInput>
                                    </Grid>
                                    <Grid item xs={12} >
                                          <LoginButton variant="contained" privilege="admin"></LoginButton>
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
                                    <Typography>{"ระบบการจัดเก็บโครงงานเทคโนโลยีสารสนเทศ"}</Typography>
                                    <Typography>{"ผ่านเครือข่ายอินเทอร์เน็ต"}</Typography>
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
            <SuccessAlert open={successAlert.open} message={successAlert.message} onClose={onSuccessAlertClose}></SuccessAlert>
            <ErrorAlert open={errorAlert.open} message={errorAlert.message} onClose={onErrorAlertClose}></ErrorAlert>
      </React.Suspense>)
}