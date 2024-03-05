import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Grid from '@material-ui/core/Grid';
import logo from '../../assets/cdclogo.png';
import iitjLogo from '../../assets/iitjKogo.png';
function Logout(event) {
  event.preventDefault();
  localStorage.setItem('cdc_LoggedIn', false);
  localStorage.setItem('cdc_auth_token', '');
  window.location = '/';
}
export default function Navbar() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Grid container style={{ marginBottom: 68 }}>
      <div className="wrapper">
        <nav>
          <input
            onChange={(event) => setIsChecked(event.currentTarget.checked)}
            checked={isChecked}
            type="checkbox"
            id="show-menu"
          />
          <label htmlFor="show-menu" className="menu-icon">
            <i className="fas fa-bars"></i>
          </label>
          <div className="content">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" width="69px" heigth="64px" />
              </Link>
              <Link to="/">
                <img src={iitjLogo} alt="logo" width="55px" heigth="58px" />
              </Link>
            </div>
            <ul className="links">
              <li>
                <Link to="#" className="desktop-link">
                  Home <i className="fa fa-caret-down"></i>
                </Link>
                <input type="checkbox" id="show-home" />
                <label htmlFor="show-home">
                  Home <i className="fa fa-caret-down"></i>
                </label>
                <ul>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/director-message">Director's Message</Link>
                  </li>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/chairman-message">Chairman's Message</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#" className="desktop-link">
                  Academics <i className="fa fa-caret-down"></i>
                </Link>
                <input type="checkbox" id="show-academics" />
                <label htmlFor="show-academics">
                  Academics <i className="fa fa-caret-down"></i>
                </label>
                <ul>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/programs">Programmes</Link>
                  </li>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/course-highlights">Course Highlights</Link>
                  </li>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/grade-system">Grade System</Link>
                  </li>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/admissions">Admission Procedure</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#" className="desktop-link">
                  Students <i className="fa fa-caret-down"></i>
                </Link>
                <input type="checkbox" id="show-students" />
                <label htmlFor="show-students">
                  Students <i className="fa fa-caret-down"></i>
                </label>
                <ul>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/student-dashboard/suggestion_inquiry">
                      Student Corner
                    </Link>
                  </li>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/achievements">Achievements</Link>
                  </li>
                  {/* <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/student-guidelines">Norms/Guidelines</Link>
                  </li> */}
                  {/* <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/internships">Internships</Link>
                  </li> */}
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/student-registraion-process">
                      Registration Procedure
                    </Link>
                  </li>
                  {/* <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/placement-calendar">Placement Calendar</Link>
                  </li> */}
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/cd-activities">Career Development Activity</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#" className="desktop-link">
                  Recruiter <i className="fa fa-caret-down"></i>
                </Link>
                <input type="checkbox" id="show-recruiter" />
                <label htmlFor="show-recruiter">
                  Recruiter <i className="fa fa-caret-down"></i>
                </label>
                <ul>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/why-recruit">Why Recruit?</Link>
                  </li>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/brochure">Brochure</Link>
                  </li>
                  {/* <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/student-demographics">Student Demographics</Link>
                  </li> */}
                  {/* <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/course-highlights">Programs</Link>
                  </li> */}
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/placement-statistics">Placement Statistics</Link>
                  </li>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/placement-procedure">Placement Procedure</Link>
                  </li>
                  {/* <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/grade-system">Grade System</Link>
                  </li> */}
                  {/* <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/company-rules">Norms/Guidelines</Link>
                  </li> */}
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/past-recruiters">Past Recruiters</Link>
                  </li>
                  {/* <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/aipc-norms">AIPC Norms</Link>
                  </li> */}
                </ul>
              </li>
              <li>
                <Link to="#" className="desktop-link">
                  Forms <i className="fa fa-caret-down"></i>
                </Link>
                <input type="checkbox" id="show-forms" />
                <label htmlFor="show-forms">
                  Forms <i className="fa fa-caret-down"></i>
                </label>
                <ul>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/jaf">JAF</Link>
                  </li>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/iaf">IAF</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#" className="desktop-link">
                  CDC Team <i className="fa fa-caret-down"></i>
                </Link>
                <input type="checkbox" id="show-cdc-team" />
                <label htmlFor="show-cdc-team">
                  CDC-Team <i className="fa fa-caret-down"></i>
                </label>
                <ul>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  {/* <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/reach-us">Reach Us</Link>
                  </li> */}
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/placement-team">Placement Team</Link>
                  </li>
                  <li onClick={() => setIsChecked(!isChecked)}>
                    <Link to="/c3-members">
                      Career Counselling Committee Members
                    </Link>
                  </li>
                </ul>
              </li>
              {localStorage.getItem('cdc_LoggedIn') === 'true' ? (
                <li>
                  <Link
                    className="desktop-link"
                    to={
                      localStorage.getItem('cdc_loginType') === 'Student'
                        ? '/student-dashboard'
                        : '/recruiter-dashboard'
                    }
                  >
                    <span>
                      {localStorage.getItem('cdc_Dname')}{' '}
                      <i className="fa fa-caret-down"></i>
                    </span>
                  </Link>
                  <input type="checkbox" id="show-login" />
                  <label htmlFor="show-login">
                    {localStorage.getItem('cdc_Dname')}{' '}
                    <i className="fa fa-caret-down"></i>
                  </label>
                  {localStorage.getItem('cdc_loginType') === 'Student' ? (
                    /* Student Zone */
                    <ul>
                      <li onClick={() => setIsChecked(!isChecked)}>
                        <a href="/student-dashboard/">Dashboard</a>
                      </li>
                      <li onClick={() => setIsChecked(!isChecked)}>
                        <a href="/student-dashboard/profile">Profile</a>
                      </li>
                      <li onClick={() => setIsChecked(!isChecked)}>
                        <a href="/student-dashboard/offers">Available offers</a>
                      </li>
                      <li onClick={() => setIsChecked(!isChecked)}>
                        <a href="/student-dashboard/uploadresume">
                          Upload Resume
                        </a>
                      </li>
                      <li onClick={() => setIsChecked(!isChecked)}>
                        <a href="/student-dashboard/suggestion_inquiry">
                          Suggestion or Inquiry
                        </a>
                      </li>
                      <li onClick={() => setIsChecked(!isChecked)}>
                        <a href="/student-dashboard/placement-calendar">
                          Placement Calendar
                        </a>
                      </li>
                      <li onClick={Logout}>
                        <Link to="#">Logout</Link>
                      </li>
                    </ul>
                  ) : (
                    /* Company Zone */
                    <ul>
                      <li onClick={() => setIsChecked(!isChecked)}>
                        <a href="/recruiter-dashboard/profile">Profile</a>
                      </li>
                      <li onClick={() => setIsChecked(!isChecked)}>
                        <a href="/recruiter-dashboard/add-intern-advertisement">
                          Add Intern Announcement
                        </a>
                      </li>
                      <li onClick={() => setIsChecked(!isChecked)}>
                        <a href="/recruiter-dashboard/add-job-advertisement">
                          Add Job Announcement
                        </a>
                      </li>
                      <li onClick={Logout}>
                        <Link to="#">Logout</Link>
                      </li>
                    </ul>
                  )}
                </li>
              ) : (
                <li>
                  <Link to="#" className="desktop-link">
                    Login <i className="fa fa-caret-down"></i>
                  </Link>
                  <input type="checkbox" id="show-login" />
                  <label htmlFor="show-login">
                    Login <i className="fa fa-caret-down"></i>
                  </label>
                  <ul>
                    <li onClick={() => setIsChecked(!isChecked)}>
                      <Link to="/recruiter-login">Recruiter Login</Link>
                    </li>
                    <li onClick={() => setIsChecked(!isChecked)}>
                      <Link to="/student-login">Student Login</Link>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </Grid>
  );
}
