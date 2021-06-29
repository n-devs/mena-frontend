import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import EAUButton from '../components/buttons/EAUButton';
import AdminButton from '../components/buttons/AdminButton';
import MemberButton from '../components/buttons/MemberButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import StudyInfomationButton from '../components/buttons/StudyInfomationButton';
import { useSelector } from 'react-redux';
import LogoutButton from '../components/buttons/LogoutButton';
import AdminManageButton from '../components/buttons/AdminManageButton';


export default function HomePage() {
      // const [loading, setLoading] = React.useState(false);
      const buttons = useSelector(state => state.buttons);


      // component in page
      function Tab(props) {


            console.log(props);
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
                              {props.response ? (<React.Fragment>
                                    {props.response.data[0].privilege_type === 0 && (<React.Fragment>
                                          <AdminManageButton></AdminManageButton>
                                          <LogoutButton></LogoutButton>
                                    </React.Fragment>)}
                                    {props.response.data[0].privilege_type === 1 && (<React.Fragment>
                                          <LogoutButton></LogoutButton>
                                    </React.Fragment>)}
                              </React.Fragment>) : (<React.Fragment>
                                    <AdminButton></AdminButton>
                                    <MemberButton></MemberButton>
                              </React.Fragment>)}

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
                                          <Typography>{"บทความวิจัยหรือโครงงาน"}</Typography>
                                    </Grid>
                                    <Grid item xs={12} style={{
                                          textAlign: "center"
                                    }}>
                                          <Typography>{"รวบรวมเนื้อหาบทความวิจัยหรือ"}</Typography>
                                          <Typography>{"โครงงาน ทุกรูปแบบ"}</Typography>
                                          <Typography>{"จากคณะเทคโนโลยสารสนเทศ"}</Typography>
                                          <Typography>{"มหาวิทยาลัยอีสเทิร์นเอเชีย"}</Typography>
                                    </Grid>
                                    <Grid item xs={12} >
                                          <StudyInfomationButton></StudyInfomationButton>
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
                              <Grid item xs={12} >
                                    <Typography>{"...ยินดีต้อนรับเข้าสู่..."}</Typography>
                              </Grid>
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
                        <Tab {...buttons.loginData}></Tab>
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