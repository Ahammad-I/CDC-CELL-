import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import NotFound from './pages/404';
import ChairmanMessage from './pages/ChairmanMessage';
import DirectorMessage from './pages/DirectorMessage';
import GradeSystem from './pages/GradeSystem';
import Programmes from './pages/Programs';
import CourseHighlights from './pages/CourseHighlights';
import Brochure from './pages/Brochure';
import WhyRecruit from './pages/WhyRecruit';
import PlacementStatistics from './pages/PlacementStatistics';
import PlacementProcedure from './pages/PlacementProcedure';
import RecruiterGuidelines from './pages/RecruiterGuidelines';
import PastRecruiters from './pages/PastRecruiters';
import AIPCNorms from './pages/AIPCNorms';
import Achievements from './pages/Achievements';
import CDActivities from './pages/CDActivities';
import Prospective from './pages/Prospective';
import StudentGuidelines from './pages/StudentGuidelines';
import JAF from './pages/JAF';
import IAF from './pages/IAF';
import ContactUs from './pages/ContactUs';
import ReachUs from './pages/ReachUs';
import PlacementTeam from './pages/PlacementTeam';
import CareerCounselling from './pages/CareerCounselling';
import StudentLogin from './pages/StudentLogin';
import RecruiterLogin from './pages/RecruiterLogin';
import RecruiterRegister from './pages/RecruiterRegister';
import RecruiterDashboard from './pages/RecruiterDashboard';
import StudentRegister from './pages/StudentRegister';
import StudentDashboard from './pages/StudentDashboard';
import AdmissionProcedure from './pages/AdmissionProcedure';
import Footer from './components/Footer/Footer';
import SiteConfig from './pages/SiteConfig';
import ScrollToTop from './components/ScrollToTop';
import StudentProtected from './components/RestrictedRoutes/StudentProtected';
import CompanyProtected from './components/RestrictedRoutes/CompanyProtected';
import StudentRegistrationProcess from './pages/StudentRegistrationProcess';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/chairman-message" component={ChairmanMessage} />
        <Route path="/director-message" component={DirectorMessage} />
        <Route path="/grade-system" component={GradeSystem} />
        <Route path="/programs" component={Programmes} />
        <Route path="/course-highlights" component={CourseHighlights} />
        <Route path="/admissions" component={AdmissionProcedure} />
        <Route path="/achievements" component={Achievements} />
        <Route path="/cd-activities" component={CDActivities} />
        <Route path="/student-demographics" component={Prospective} />
        <Route path="/student-guidelines" component={StudentGuidelines} />
        <Route
          path="/student-registraion-process"
          component={StudentRegistrationProcess}
        />
        <Route path="/why-recruit" component={WhyRecruit} />
        <Route path="/brochure" component={Brochure} />
        <Route path="/placement-statistics" component={PlacementStatistics} />
        <Route path="/placement-procedure" component={PlacementProcedure} />
        <Route path="/company-rules" component={RecruiterGuidelines} />
        <Route path="/past-recruiters" component={PastRecruiters} />
        <Route path="/aipc-norms" component={AIPCNorms} />
        <Route path="/jaf" component={JAF} />
        <Route path="/iaf" component={IAF} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/reach-us" component={ReachUs} />
        <Route path="/placement-team" component={PlacementTeam} />
        <Route path="/c3-members" component={CareerCounselling} />
        <Route path="/student-login" component={StudentLogin} />
        <Route path="/student-register" component={StudentRegister} />
        <StudentProtected
          path="/student-dashboard/"
          component={StudentDashboard}
        />
        <Route path="/recruiter-login" component={RecruiterLogin} />
        <Route path="/recruiter-register" component={RecruiterRegister} />
        <CompanyProtected
          path="/recruiter-dashboard"
          component={RecruiterDashboard}
        />
        <Route path="/site-config" component={SiteConfig} />
        <Route default component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
