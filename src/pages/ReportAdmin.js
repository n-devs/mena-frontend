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
import ProjectYearInput from '../components/inputs/ProjectYearInput';
import { DataGrid } from '@material-ui/data-grid';


export default function ReportAdminPage() {
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
            function TableSearch() {
                  const [tableLoading] = React.useState(true)
                  const [auth] = React.useState({
                        status: true,
                        privilege: "admin"
                  })
                  const [columns] = React.useState([
                        { field: 'name', headerName: 'ชื่อโครงงาน', flex: 1 },
                        { field: 'view', headerName: 'จำนวนที่ค้นหา', flex: 1 }])

                  const [rows] = React.useState([
                        {
                              id: 1,
                              name: "ระบบขายหนังสือออนไลน์ Online book-selling system, Book Corner.pdf ",
                              view: 1,
                        },
                        {
                              id: 2,
                              name: "ระบบขายหนังสือออนไลน์ Online book-selling system, Book Corner.pdf ",
                              view: 1,
                        }
                  ]);

                  return (

                        <Grid
                              container
                              direction="column"
                              justify="center"
                              alignItems="center"
                        >
                              <Grid item xs={12} style={{ height: 400, width: '100%' }}>
                                    <div style={{ height: 400, width: '100%' }}>
                                          <DataGrid rowHeight={25} rows={rows} columns={columns} />

                                    </div>
                              </Grid>
                        </Grid>


                  );
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
                                    <Typography>{"...รายงานสรุปการค้นหาประจำปี..."}</Typography>
                              </Grid>
                              <Grid item xs={12} >
                                    <ProjectYearInput></ProjectYearInput>

                              </Grid>
                              <Grid item xs={12} >
                                    <TableSearch></TableSearch>
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