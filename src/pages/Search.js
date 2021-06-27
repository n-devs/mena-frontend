import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import EAUButton from '../components/buttons/EAUButton';
import AdminButton from '../components/buttons/AdminButton';
import MemberButton from '../components/buttons/MemberButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SearchAllInput from '../components/inputs/SearchAllInput';
import SearchProjectNameInput from '../components/inputs/SearchProjectNameInput';
import SearchProjectDateInput from '../components/inputs/SearchProjectDateInput';
import SearchProjectAbstractInput from '../components/inputs/SearchProjectAbstractInput';
import SearchProjectOrganizerInput from '../components/inputs/SearchProjectOrganizerInput';
import SearchProjectTypeInput from '../components/inputs/SearchProjectTypeInput';
import SearchButton from '../components/buttons/SearchButton';
import { DataGrid } from '@material-ui/data-grid';
import DetailButton from '../components/buttons/DetailButton';
import LoginButton from '../components/buttons/LoginButton';
import SignUpButton from '../components/buttons/SignUpButton';
import ContactButton from '../components/buttons/ContactButton';
import DownloadButton from '../components/buttons/DownloadButton';
import EditDocButton from '../components/buttons/EditDocButton';


export default function SearchPage() {
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
                              <ContactButton></ContactButton>
                              <SignUpButton></SignUpButton>
                              <LoginButton startIcon={true}></LoginButton>
                        </Grid>
                  </Grid>
            </React.Fragment>)
      }

      function Page() {

            // component in component
            function BoxSearch() {
                  return (<React.Fragment>
                        <Paper elevation={0} square style={{
                              // backgroundColor: "rgba(239, 236, 224, 0.4)",
                              padding: 20
                        }}>
                              <Grid
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center"
                                    spacing={3}
                              >
                                    <Grid item xs={6} >
                                          <Grid
                                                container
                                                direction="column"
                                                justify="center"
                                                alignItems="center"
                                                spacing={3}
                                          >
                                                <Grid item xs={12} >
                                                      <SearchProjectNameInput></SearchProjectNameInput>
                                                </Grid>
                                                <Grid item xs={12} >
                                                      <SearchProjectDateInput></SearchProjectDateInput>
                                                </Grid>
                                                <Grid item xs={12} >
                                                      <SearchProjectAbstractInput></SearchProjectAbstractInput>
                                                </Grid>
                                          </Grid>
                                    </Grid>
                                    <Grid item xs={6} >
                                          <Grid
                                                container
                                                direction="column"
                                                justify="center"
                                                alignItems="center"
                                                spacing={3}
                                          >
                                                <Grid item xs={12} >
                                                      <SearchProjectOrganizerInput></SearchProjectOrganizerInput>
                                                </Grid>
                                                <Grid item xs={12} >
                                                      <SearchProjectTypeInput></SearchProjectTypeInput>
                                                </Grid>
                                                <Grid item xs={12} >
                                                      <SearchButton></SearchButton>
                                                </Grid>
                                          </Grid>
                                    </Grid>

                              </Grid>
                        </Paper>
                  </React.Fragment>)
            }

            function TableSearch() {
                  const [tableLoading] = React.useState(true)
                  const [auth] = React.useState({
                        status: true,
                        privilege: "member"
                  })
                  const [columns, setColumns] = React.useState([
                        { field: 'number', headerName: 'ลำดับ', flex: 1 },
                        { field: 'type', headerName: 'ประเภทโครงงาน', flex: 1 },
                        { field: 'name', headerName: 'ชื่อโครงงาน', flex: 1 },
                        { field: 'detail', headerName: 'รายละเอียด', flex: 1, renderCell: (params) => (<DetailButton {...params} ></DetailButton>) },
                  ])
                  const [memberColumns] = React.useState([
                        { field: 'number', headerName: 'ลำดับ', flex: 1 },
                        { field: 'type', headerName: 'ประเภทโครงงาน', flex: 1 },
                        { field: 'name', headerName: 'ชื่อโครงงาน', flex: 1 },
                        { field: 'detail', headerName: 'รายละเอียด', flex: 1, renderCell: (params) => (<DetailButton {...params} ></DetailButton>) },
                        { field: 'download', headerName: 'ดาวน์โหลด', flex: 1, renderCell: (params) => (<DownloadButton {...params} ></DownloadButton>) }
                  ])
                  const [adminColumns] = React.useState([
                        { field: 'number', headerName: 'ลำดับ', flex: 1 },
                        { field: 'type', headerName: 'ประเภทโครงงาน', flex: 1 },
                        { field: 'name', headerName: 'ชื่อโครงงาน', flex: 1 },
                        { field: 'detail', headerName: 'รายละเอียด', flex: 1, renderCell: (params) => (<DetailButton {...params} ></DetailButton>) },
                        { field: 'edit', headerName: 'แก้ไข', flex: 1, renderCell: (params) => (<EditDocButton {...params} ></EditDocButton>) }
                  ])
                  const [rows] = React.useState([
                        {
                              id: 1,
                              number: 1,
                              type: "WebApp",
                              name: "ระบบขายหนังสือออนไลน์ Online book-selling system, Book Corner.pdf ",
                        },
                        {
                              id: 2,
                              number: 2,
                              type: "WebApp",
                              name: "ระบบขายหนังสือออนไลน์ Online book-selling system, Book Corner.pdf ",
                        }
                  ]);

                  return (

                        <Grid
                              container
                              direction="column"
                              justify="center"
                              alignItems="center"
                        >
                              <Grid item xs={12} >
                                    <Typography>{"ผลการค้นหา : โครงงานยอดนิยมประจำปี 2564"}</Typography>
                              </Grid>
                              <Grid item xs={12} style={{ height: 400, width: '100%' }}>
                                    <div style={{ height: 400, width: '100%' }}>
                                    <DataGrid rowHeight={25} rows={rows} columns={auth.status ? auth.privilege === "member" ? memberColumns: adminColumns :columns} />

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
                              <Grid item xs={12} >
                                    <Typography>{"ระบบการจัดเก็บโครงงานเทคโนโลยีสารสนเทศ ผ่านเครือข่ายอินเทอร์เน็ต"}</Typography>
                              </Grid>
                              <Grid item xs={12} >
                                    <SearchAllInput></SearchAllInput>
                              </Grid>
                              <Grid item xs={12} >
                                    <BoxSearch></BoxSearch>
                              </Grid>
                              <Grid item xs={12} style={{
                                    width: '100%'
                              }}>
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