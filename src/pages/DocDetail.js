import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import EAUButton from '../components/buttons/EAUButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import LoginButton from '../components/buttons/LoginButton';
import SignUpButton from '../components/buttons/SignUpButton';
import ContactButton from '../components/buttons/ContactButton';
import DownloadButton from '../components/buttons/DownloadButton';
import WatchDocButton from '../components/buttons/WatchDocButton';
import BackButton from '../components/buttons/BackButton';


export default function DocDetailPage() {
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
                              <ContactButton></ContactButton>
                              <SignUpButton></SignUpButton>
                              <LoginButton startIcon={true}></LoginButton>
                        </Grid>
                  </Grid>
            </React.Fragment>)
      }

      function Page() {



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
                                    <Typography>{"ระบบการจัดเก็บโครงงานเทคโนโลยีสารสนเทศ ผ่านเครือข่ายอินเทอร์เน็ต"}</Typography>
                              </Grid>
                              <Grid item xs={12} >
                                    <Typography>{"...ข้อมูลโครงงาน..."}</Typography>
                              </Grid>
                              <Grid item xs={12} >
                                    <Grid
                                          container
                                          direction="row"
                                          justify="flex-start"
                                          alignItems="flex-start"
                                    >
                                          <Grid item xs={3} >
                                                <Grid
                                                      container
                                                      direction="column"
                                                      justify="flex-start"
                                                      alignItems="center"
                                                      spacing={3}
                                                      style={{
                                                            display: "contents"
                                                      }}
                                                >
                                                      <Grid item xs={12} >{"รหัสโครงงาน"}</Grid>
                                                      <Grid item xs={12} >{"ชื่อโครงงาน"}</Grid>
                                                      <Grid item xs={12} >{"ผู้จัดทำโครงงาน"}</Grid>
                                                      <Grid item xs={12} >{"ปี พ.ศ. ที่จัดทำโครงงาน"}</Grid>
                                                      <Grid item xs={12} >{"ประเภทโครงงาน"}</Grid>
                                                      <Grid item xs={12} >{"บทคัดย่อโครงงาน"}</Grid>
                                                </Grid>
                                          </Grid>
                                          <Grid item xs={9} >
                                                <Grid
                                                      container
                                                      direction="column"
                                                      justify="flex-start"
                                                      alignItems="center"
                                                      spacing={3}
                                                      style={{
                                                            display: "contents"
                                                      }}
                                                >
                                                      <Grid item xs={12} >{"1"}</Grid>
                                                      <Grid item xs={12} >{"ระบบจัดการการจองโรงแรมออนไลน์ Online hotel booking management system.pdf "}</Grid>
                                                      <Grid item xs={12} >{"อามีนา สามะ , วริทธ์นันท์ บุญคง"}</Grid>
                                                      <Grid item xs={12} >{"2564"}</Grid>
                                                      <Grid item xs={12} >{"Webapp"}</Grid>
                                                      <Grid item xs={12} >{"ระบบจัดการการจองโรงแรมออนไลน์ได้จัดทำขึ้นเพื่อการออกแบบและพัฒนาระบบ การจัดการจองห้องพักออนไลน์ซึ่งระบบสามารถอำนวยความสะดวกในด้านต่าง ๆ เช่น การบันทึกข้อมูลผู้เช่า การค้นหาข้อมูลต่าง ๆ การพิมพ์รายงานยอดเงินมัดจำ การพิมพ์ใบเสร็จรับเงิน ฯ"}</Grid>
                                                </Grid>
                                          </Grid>
                                    </Grid>
                              </Grid>
                              <Grid item xs={12} style={{
                                    // width: '100%'
                              }}>
                                    <Grid
                                          container
                                          direction="row"
                                          justify="center"
                                          alignItems="center"
                                          spacing={3}
                                    >
                                          <Grid item xs={12} >
                                                <WatchDocButton></WatchDocButton>
                                          </Grid>
                                          {/* <Grid item xs={6} >
                                                <WatchDocButton></WatchDocButton>
                                          </Grid>
                                          <Grid item xs={6} >
                                                <DownloadButton ></DownloadButton>
                                          </Grid> */}
                                    </Grid>
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