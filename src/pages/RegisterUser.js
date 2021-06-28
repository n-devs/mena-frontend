import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import EAUButton from '../components/buttons/EAUButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import HomeButton from '../components/buttons/HomeButton';
import UsernameInput from '../components/inputs/UsernameInput';
import PasswordInput from '../components/inputs/PasswordInput';
import LoginButton from '../components/buttons/LoginButton';
import RegisterButton from '../components/buttons/RegisterButton';
import FullNameInput from '../components/inputs/FullNameInput';
import PhoneNumberInput from '../components/inputs/PhoneNumberInput';
import EmailInput from '../components/inputs/EmailInput';
import ProfessionInput from '../components/inputs/ProfessionInput';
import { useSelector } from 'react-redux';

export default function RegisterUserPage() {
      // const [loading, setLoading] = React.useState(false);
      const buttons = useSelector(state => state.buttons);

      React.useEffect(() => {
            console.log(buttons.registerData);

            if (buttons.registerData.response) {

            }

      }, [buttons.registerData])


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
                                    <Grid item xs={12} style={{
                                          display: "contents"
                                    }}>
                                          <Typography>{"...กรุณากรอกข้อมูลเพื่อสมัครสมาชิก..."}</Typography>
                                    </Grid>
                                    <Grid item xs={12} >
                                          <FullNameInput></FullNameInput>
                                    </Grid>
                                    <Grid item xs={12} >
                                          <PhoneNumberInput></PhoneNumberInput>
                                    </Grid>
                                    <Grid item xs={12} >
                                          <EmailInput></EmailInput>
                                    </Grid>
                                    <Grid item xs={12} >
                                          <ProfessionInput></ProfessionInput>
                                    </Grid>
                                    <Grid item xs={12} >
                                          <UsernameInput startAdornment={true} ></UsernameInput>
                                    </Grid>
                                    <Grid item xs={12} >
                                          <PasswordInput startAdornment={true} ></PasswordInput>
                                    </Grid>
                                    <Grid item xs={12} style={{
                                          width: "100%"
                                    }}>
                                          <Grid
                                                container
                                                direction="row"
                                                justify="center"
                                                alignItems="center"
                                          >
                                                <Grid item xs={6} style={{
                                                      display: "flex",
                                                      justifyContent: "center",
                                                }} >
                                                      <LoginButton style={{
                                                            fontSize: '15px',
                                                            fontWeight: 'inherit',
                                                      }}></LoginButton>
                                                </Grid>
                                                <Grid item xs={6} style={{
                                                      display: "flex",
                                                      justifyContent: "center",
                                                }}>
                                                      <RegisterButton variant="contained" style={{
                                                            fontSize: '15px',
                                                            fontWeight: 'inherit',
                                                      }}></RegisterButton>
                                                </Grid>


                                          </Grid>
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
      </React.Suspense>)
}