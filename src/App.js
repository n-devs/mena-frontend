import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Container,
  Box
} from '@material-ui/core'
import React from 'react';
import { useStyles } from './styles';
import EAUButton from './components/buttons/EAUButton';
import AdminButton from './components/buttons/AdminButton';
import MemberButton from './components/buttons/MemberButton';
import HomeButton from './components/buttons/HomeButton';
import ContactButton from './components/buttons/ContactButton';
import LogoutButton from './components/buttons/LogoutButton';
import BackButton from './components/buttons/BackButton';
import SignUpButton from './components/buttons/SignUpButton';
import StudyInfomationButton from './components/buttons/StudyInfomationButton';
import LoginButton from './components/buttons/LoginButton';
import RegisterButton from './components/buttons/RegisterButton';
import ConfirmButton from './components/buttons/ConfirmButton';
import SendButton from './components/buttons/SendButton';
import EditProfileButton from './components/buttons/EditProfileButton';
import ManageProjectFileButton from './components/buttons/ManageProjectFileButton';
import SearchSummaryReportButton from './components/buttons/SearchSummaryReportButton';
import SearchButton from './components/buttons/SearchButton';
import DetailButton from './components/buttons/DetailButton';
import DownloadButton from './components/buttons/DownloadButton';
import DownloadButtonIcon from './components/buttons/DownloadButtonIcon';
import UsernameInput from './components/inputs/UsernameInput';
import PasswordInput from './components/inputs/PasswordInput';
import FullNameInput from './components/inputs/FullNameInput';
import EmailInput from './components/inputs/EmailInput';
import PhoneNumberInput from './components/inputs/PhoneNumberInput';
import ProfessionInput from './components/inputs/ProfessionInput';
import SearchAllInput from './components/inputs/SearchAllInput';
import SearchProjectNameInput from './components/inputs/SearchProjectNameInput';
import SearchProjectOrganizerInput from './components/inputs/SearchProjectOrganizerInput';
import SearchProjectDateInput from './components/inputs/SearchProjectDateInput';
import SearchProjectTypeInput from './components/inputs/SearchProjectTypeInput';
import SearchProjectAbstractInput from './components/inputs/SearchProjectAbstractInput';
import AddProjectNameInput from './components/inputs/AddProjectNameInput';
import AddProjectOrganizerInput from './components/inputs/AddProjectOrganizerInput';
import AddProjectDateInput from './components/inputs/AddProjectDateInput';
import AddProjectTypeInput from './components/inputs/AddProjectTypeInput';
import AddProjectAbstractInput from './components/inputs/AddProjectAbstractInput';
import UploadPDFButton from './components/buttons/UploadPDFButton';
import UserMessageInput from './components/inputs/UserMessageInput';
import EditProjectNameInput from './components/inputs/EditProjectNameInput';
import EditProjectDateInput from './components/inputs/EditProjectDateInput';
import EditProjectTypeInput from './components/inputs/EditProjectTypeInput';
import EditProjectAbstractInput from './components/inputs/EditProjectAbstractInput';
import EditProjectOrganizerInput from './components/inputs/EditProjectOrganizerInput';
import ProjectYearInput from './components/inputs/ProjectYearInput';
import HomePage from './pages/Home';
import LoginAdminPage from './pages/LoginAdmin';
import LoginUserPage from './pages/LoginUser';
import SearchPage from './pages/Search';
import RegisterUserPage from './pages/RegisterUser';
import ContactUsPage from './pages/ContactUs';
import DocDetailPage from './pages/DocDetail';
import DocDownloadPage from './pages/DocDownload';
import AdminPage from './pages/Admin';
import EditAdminPage from './pages/EditAdmin';
import ReportAdminPage from './pages/ReportAdmin';

function App() {
  const classes = useStyles()
  return (
    <React.Suspense fallback="loading">
      <AppBar elevation={0} >
        <Toolbar variant="dense" />
      </AppBar>
      <Toolbar />
      <Container>
        <Box>
          <Router>
            <Switch>
              <Route exact path="/">
                <HomePage></HomePage>
              </Route>
              <Route path="/admin">
                <Route exact path="/admin">
                  <AdminPage></AdminPage>
                </Route>
                <Route path="/admin/login">
                  <LoginAdminPage></LoginAdminPage>
                </Route>
                <Route path="/admin/edit">
                  <EditAdminPage></EditAdminPage>
                </Route>
                <Route path="/admin/report">
                  <ReportAdminPage></ReportAdminPage>
                </Route>
              </Route>

              <Route path="/member/login">
                <LoginUserPage></LoginUserPage>
              </Route>
              <Route path="/member/register">
                <RegisterUserPage></RegisterUserPage>
              </Route>
              <Route path="/search">
                <SearchPage></SearchPage>
              </Route>
              <Route path="/detail">
                <DocDetailPage></DocDetailPage>
              </Route>
              <Route path="/download">
                <DocDownloadPage></DocDownloadPage>
              </Route>
              <Route path="/contact-us">
                <ContactUsPage></ContactUsPage>
              </Route>
              <Route path="/test-components">
                {"button"}
                <EAUButton></EAUButton>
                <AdminButton></AdminButton>
                <MemberButton></MemberButton>
                <HomeButton></HomeButton>
                <ContactButton></ContactButton>
                <LogoutButton></LogoutButton>
                <BackButton></BackButton>
                <SignUpButton></SignUpButton>
                <StudyInfomationButton></StudyInfomationButton>
                <LoginButton></LoginButton>
                <LoginButton variant="contained"></LoginButton>
                <RegisterButton></RegisterButton>
                <RegisterButton variant="contained"></RegisterButton>
                <ConfirmButton></ConfirmButton>
                <SendButton></SendButton>
                <EditProfileButton></EditProfileButton>
                <ManageProjectFileButton></ManageProjectFileButton>
                <SearchSummaryReportButton></SearchSummaryReportButton>
                <SearchButton></SearchButton>
                <DetailButton></DetailButton>
                <DownloadButton></DownloadButton>
                <UploadPDFButton></UploadPDFButton>
                <DownloadButtonIcon></DownloadButtonIcon>
                {"input"}
                <UsernameInput></UsernameInput>
                <PasswordInput></PasswordInput>
                <UsernameInput startAdornment={true} ></UsernameInput>
                <PasswordInput startAdornment={true}></PasswordInput>
                <FullNameInput></FullNameInput>
                <EmailInput></EmailInput>
                <PhoneNumberInput></PhoneNumberInput>
                <ProfessionInput></ProfessionInput>
                <UserMessageInput></UserMessageInput>
                <ProjectYearInput></ProjectYearInput>

                {"search input"}
                <SearchAllInput></SearchAllInput>
                <SearchProjectNameInput></SearchProjectNameInput>
                <SearchProjectOrganizerInput></SearchProjectOrganizerInput>
                <SearchProjectDateInput></SearchProjectDateInput>
                <SearchProjectTypeInput></SearchProjectTypeInput>
                <SearchProjectAbstractInput></SearchProjectAbstractInput>

                {"add input"}
                <AddProjectNameInput></AddProjectNameInput>
                <AddProjectOrganizerInput></AddProjectOrganizerInput>
                <AddProjectDateInput></AddProjectDateInput>
                <AddProjectTypeInput></AddProjectTypeInput>
                <AddProjectAbstractInput></AddProjectAbstractInput>


                {"edit input"}
                <EditProjectNameInput></EditProjectNameInput>
                <EditProjectOrganizerInput></EditProjectOrganizerInput>
                <EditProjectDateInput></EditProjectDateInput>
                <EditProjectTypeInput></EditProjectTypeInput>
                <EditProjectAbstractInput></EditProjectAbstractInput>
              </Route>
            </Switch>
          </Router>
        </Box>
      </Container>
    </React.Suspense>
  );
}

export default App;
