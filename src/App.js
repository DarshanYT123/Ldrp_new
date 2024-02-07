import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Basicinfo from "./Components/Basicinfo/Basicinfo";
import StudentHistory from "./Components/StudentHistory/StudentHistory";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState,useEffect } from "react";
import Stepper from "./Components/Stepper/Stepper";
import StepperControl from "./Components/Stepper/StepperControl";
import { UseContextProvider } from "./Components/Stepper/StepperContext";

import ExamSheet from "./Components/ExamSheet/ExamSheet";
import MidSemester from "./Components/MidSemester/MidSemester";
import Activities from "./Components/Activities/Activities";
import Seminar from "./Components/Seminar/Seminar";
import Membership from "./Components/Membership/Membership";
import Progressbar from "./Components/Progressbar/Progressbar";
import Page from "./Components/Multistep/Page";
import StudentHistorynew from './Components/StudentHistory/StudentHistory';
import ExamSheetnew from './Components/ExamSheet/ExamSheet';
import MidSemesternew from './Components/MidSemester/MidSemester';
import Activitiesnew from './Components/Activities/Activities';
import Seminarnew from './Components/Seminar/Seminar';
import Membershipnew from './Components/Membership/Membership';
import Dashboard from "./Dashboard/Dashboard/Dashboard";
import Results from "./Dashboard/Results/Results";
import SecondResults from "./Dashboard/Results/SecondResults";
import MentoringForm from "./Dashboard/MentoringForm/MentoringForm";
// import Mentorship from "./Mentorship/MentorshipForm/MentorshipForm";
// import MentorshipForm from "./Mentorship/MentorshipForm/MentorshipForm";
import Sidebar from "./Dashboard/Dashboard/Sidebar";
import BasicInfoDashboard from "./Dashboard/BasicInfoDashboard/BasicInfoDashboard";
import Attendance from "./Dashboard/Attendance/Attendance";
import ResultSection from "./Dashboard/Results/ResultSection";
import FeesDetails from "./Dashboard/FeesDetails/FeesDetails";
import University from "./Dashboard/University/University";
import Notification from "./Dashboard/Notification/Notification";

// mentorship

// import Navbar from "./Mentorship/Navbar/Navbar";

import Mentorship from "./Mentorship/MentorshipForm/MentorshipForm";
import MentoringDashboard from "./Mentorship/MentoringDashboard/MentoringDashboard";
import AttendanceSheet from './Mentorship/MentoringSession/AttendanceSheet'
import MentoringTable from "./Mentorship/MentoringDashboard/MentoringTable";
import Universitymentor from "./Mentorship/MentoringSession/MentoringSession";
import MentorSidebar from "./Mentorship/MentorSidebar/MentorSidebar";
import SidebarEmp from "./Mentorship/MentorSidebar/Sidebar";
import AttendanceTable from "./Mentorship/Attendance/AttendanceTable";
import ResultTable from "./Mentorship/Results/ResultTable";
import SecondFeesTable from "./Mentorship/FeesDetails/SecondFeesTable";
import FeesTable from "./Mentorship/FeesDetails/FeesTable";
import MentoringSession from "./Mentorship/MentoringSession/MentoringSession";
import MentorAttendance from "./Mentorship/Attendance/MentorAttendance";
import MentorResultSection from "./Mentorship/Results/MentorResultSection";
import MentorFeesDetails from "./Mentorship/FeesDetails/MentorFeesDetails";
import Maths from "./Dashboard/Attendance/FME";
import BEEE from "./Dashboard/Attendance/BEEE";
import StepperStep from "./Components/Multistep/Stepperstep";
import FME from "./Dashboard/Attendance/FME";
import Eg from "./Dashboard/Attendance/Eg";
import Civil from "./Dashboard/Attendance/Civil";
import Physics from "./Dashboard/Attendance/Physics";

// hod
import HodNavbar from "./Hod/Navbar/Navbar";
// import HodSidebar from "./HOD/HodSidebar/HodSidebar";

import Hod from "./Hod/Hod/Hod";
import SidebarHod from "./Hod/HodSidebar/Sidebar";
import Home from "./Hod/HomeSidebar/Home";
import AttendanceHod from "./Hod/Attendance/AttendanceHod";
import UniversityHod from "./Hod/University/HodUniversity";
import Table from './Hod/HodForm/HodTable';
import SecondFeesTableHod from "./Hod/FeesDetails/SecondFeesTable";
import ResultTableHod from "./Hod/Results/ResultTable";
import DashboardHod from "./Hod/HodForm/HodDashboard";
import AttendanceTableHod from "./Hod/Attendance/HodAttendanceTable";
import SimpleMultiStepForm from "./Components/Multistep/SimpleMultiStepForm";
import StepFinal from "./Components/Multistep/StepFinal";
import Notificationhod from "./Hod/Notification/Notificationhod";
import ConversionNotification from "./Hod/Notification/ConversionNotification";
import ClassCards from "./Hod/ClassCards/ClassCards";




// Priciple
import PrincipleSidebar from "./Principle/PrincipleSidebar/PrincipleSidebar";

import HomePrinciple from "./Principle/PrincipleSidebar/HomePrinciple"
import AttendancePrinciple from './Principle/PrincipleSidebar/AttendancePrinciple'
import ResultsPrinciple from './Principle/PrincipleSidebar/ResultsPrinciple'
import FeesPrinciple from './Principle/PrincipleSidebar/FeesPrinciple'
import UniversityPrinciple from './Principle/PrincipleSidebar/UniversityPrinciple'
import NotificationPrinciple from './Principle/PrincipleSidebar/NotificationPrinciple'
import ChairmainSidebar from "./Chairmain/ChairmainSidebar/ChairmainSidebar";
import HomeChairmain from "./Chairmain/HomeChairmain/HomeChairmain";
import NotificationChairmain from "./Chairmain/NotificationChairmain/NotificationChairmain";
import ConNotification from "./Principle/PrincipleSidebar/ConNotification";
import CollageChairmain from "./Chairmain/HomeChairmain/CollageChairmain";
import HodDashboard from "./Hod/HodForm/HodDashboard";
import HodResults from "./Hod/Results/HodResults";
import ActivityTable from "./Components/Activities/ActivityTable";
import Login from "./Components/Login/Login";
import HodAttendanceTable from "./Hod/Attendance/HodAttendanceTable";
import AttendanceTableHodDetails from "./Hod/Attendance/AttendanceTableHod";
import HodFeesDetails from "./Hod/FeesDetails/HodFeesDetails";
import HodResultSection from "./Hod/Results/HodResultSection";
import FeesTableHodDetails from './Hod/FeesDetails/FeesTableHodDetails'
function App() {
  // for aos
  // AOS.init();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const [isDashboard, setIsDashboard] = useState(false);

  useEffect(() => {
    if (window.location.pathname.toString().includes("dashboard")) {
      setIsDashboard(true);
    } else {
      setIsDashboard(false);
    }
  });
  const [isMentorship, setIsMentorship] = useState(false);

  const [inactive, setInactive] = useState(false);
  useEffect(() => {
    if (window.location.pathname.toString().includes("mentorship")) {
      setIsMentorship(true);
    } else {
      setIsMentorship(false);
    }
  });
  const [isHod, setIsHod] = useState(false);
  useEffect(() => {
    if (window.location.pathname.toString().includes("hod")) {
      setIsHod(true);
    } else {
      setIsHod(false);
    }
  });

  const [isPrinciple, setIsPrinciple] = useState(false);
  useEffect(() => {
    if (window.location.pathname.toString().includes("principle")) {
      setIsPrinciple(true);
    } else {
      setIsPrinciple(false);
    }
  });
  const [isChairmain, setIsChairmain] = useState(false);
  useEffect(() => {
    if (window.location.pathname.toString().includes("chairmain")) {
      setIsChairmain(true);
    } else {
      setIsChairmain(false);
    }
  });

  // const [fix,setFix] = useState(false)

  // function setFixedSidebar() {
  //   if(window.scrollY >= 500) {
  //     setFix(true)
  //   }
  //   else {
  //     setFix(false)
  //   }
  // }

  // window.addEventListener("scroll",setFixedSidebar)

  return (
    <div className="App bg-[#F6F3F3]  ">
      <Navbar />
  
      {/* <div className="relative top-2  flex justify-end ">
        <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.28px] capitalize">Last Login</h2>
        <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px] capitalize px-3">2 :00 pM , Sunday 15 Oct 2023</h2>
      </div> */}

<Router>
  <Routes>
    <Route path="/login" element={<Login/>}/>
  </Routes>
</Router>
      <Router>
       {isDashboard ? (
            <>
          <div className="flex flex-row   ">
            <div className="fixed">

            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
            </div>
            <div className="flex flex-col w-screen  pl-60 ">
            <div className=" relative py-2  flex justify-end ">
        <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.28px] capitalize">Last Login</h2>
        <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px] capitalize px-3">2 :00 pM , Sunday 15 Oct 2023</h2>
      </div>
              <Routes>
              <Route path="/dashboard" element={<BasicInfoDashboard />} />
              <Route path="/attendanceitem" element={<Attendance />} />
                <Route path="/attendance" element={<Maths/>} />
                <Route path="/beee" element={<BEEE/>} />
                <Route path="/fme" element={<FME/>} />
                <Route path="/eg" element={<Eg/>} />
                <Route path="/civil" element={<Civil/>} />
                <Route path="/physics" element={<Physics/>} />
                <Route path="/attendance/eg" element={<Maths/>} />
              <Route path="/results" element={<ResultSection />} />
              <Route path="/fees" element={<FeesDetails />} />
              <Route path="/university" element={<University />} />
              <Route path="/notification" element={<Notification />} />

              </Routes>
              </div>

</div>
                  </>
        ) : (
          <>
    <div className=" flex  flex-col justify-center items-center overflow-hidden   ">
            <div className="  ">
            {/* <StepperStep path="/" sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} /> */}

{/* <Page path="/"   sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} /> */}
</div>
{/* <div className="absolute top-28  left-[16rem]  bg-[#D9D9D9] w-[2px] h-[33rem] ">
    </div> */}
                <div className="flex  justify-center items-center  overflow-hidden   "> 
            <Routes>
            {/* <Route path="/" element={<SimpleMultiStepForm />} /> */}
              <Route path="/" element={<StepFinal />} />
              {/* <Route path="/" element={<Page />} /> */}
              <Route path="/info" element={<Basicinfo />} />
              <Route path="/history" element={<StudentHistorynew />} />
              <Route path="/exam" element={<ExamSheetnew />} />
              <Route path="/midsem" element={<MidSemesternew />} />
              {/* <Route path="/activity" element={<Activitiesnew />} /> */}
              <Route path="/activity" element={<ActivityTable />} />
              <Route path="/seminar" element={<Seminarnew />} />
              <Route path="/mentorshipitem" element={<Membershipnew />} />
            </Routes>
            </div>
            </div>
                 </>
        )}
        </Router>


<Router>
      {isMentorship ? (
          <>
          <div className="flex flex-row   ">
            <div className="fixed">
            <MentorSidebar onCollapse={(inactive) => {  console.log(inactive);  setInactive(inactive); }} sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
            </div>
            <div className="flex flex-col w-screen pl-60  ">
            <div className=" relative py-2  flex justify-end ">
        <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.28px] capitalize">Last Login</h2>
        <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px] capitalize px-3">2 :00 pM , Sunday 15 Oct 2023</h2>
      </div>

              <Routes>

{/* Start */}
<Route path="/mentorship" element={<MentoringTable/>} />
      <Route path="/attendancementorship" element={<AttendanceTable/>} />
      <Route path="/resultsmentorship" element={<ResultTable/>} />
      <Route path="/feesmentorship" element={<FeesTable/>} />
      {/* <Route path="/secondfees" element={<SecondFeesTable/>} /> */}
      <Route path="/sessionmentorship" element={<MentoringSession/>} />
      <Route path="/mentorship/mentoringform" element={<MentoringDashboard/>} />
      <Route path="/attendancementorship/attendancementorshiptable" element={<MentorAttendance/>} />
      <Route path="/resultsmentorship/mentorshipresults" element={<MentorResultSection/>} />

      <Route path="/feesmentorship/mentorshipfees" element={<MentorFeesDetails/>} />

      <Route path="/mentorship/attendancesheet" element={<AttendanceSheet/>} />
      <Route path="/mentorship/university" element={<Universitymentor/>} />
              </Routes>
          </div>

          </div>

        </>
        ) : (<></>)}
         </Router>  

         <Router>
      {isHod ? (
          <>
          <div className="flex flex-row   ">
            <div className="fixed">
            <Hod onCollapse={(inactive) => {  console.log(inactive);  setInactive(inactive); }} sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
            </div>
            <div className="flex flex-col w-screen pl-60 ">
            <div className=" relative py-2  flex justify-end ">
        <h2 className="text-[color:var(--black,#101010)]  text-[14px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.28px] capitalize">Last Login</h2>
        <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px] capitalize px-3">2 :00 pM , Sunday 15 Oct 2023</h2>
      </div>

              <Routes>

{/* Start */}

      {/* <Route path="hod" element={<Hod />} /> */}
      <Route path="/hod" element={<Home />} />
      <Route path="/attendancehod" element={<AttendanceHod />} />
      <Route path="/resultshod" element={<ResultTableHod />} />
      <Route path="/feeshod" element={<SecondFeesTableHod />} />
      <Route path="/cards" element={<UniversityHod />} />
      <Route path="/dashod" element={<Notificationhod />} />
      <Route path="/hod/hodform" element={<Table />} />
      <Route path="/hod/detailshod" element={<HodDashboard />} />
      <Route path="/attendancehod/attendancetablehod" element={<AttendanceTableHodDetails />} />
      <Route path="/feeshod/feestablehod" element={<FeesTableHodDetails />} />
      <Route path="/resultshod/resultstablehod" element={<HodResults />} />
      {/* <Route path="/resultshod/resultstablehod" element={<MentorResultSection />} /> */}
      <Route path="/dashod/chat" element={<ConversionNotification />} />
      <Route path="/hod/classcards"  element={<ClassCards/>}/>
      <Route path="/attendancehod/attendancehoddetails"  element={<HodAttendanceTable/>}/>
      <Route path="/feeshod/feeshoddetails"  element={<HodFeesDetails/>}/>
      <Route path="/resultshod/resultshoddetails"  element={<HodResultSection/>}/>


              </Routes>
          </div>

          </div>

        </>
        ) : (<></>)}
         </Router>  


         <Router>
      {isPrinciple ? (
          <>
          <div className="flex flex-row   ">
            <div className="fixed ">
            <PrincipleSidebar onCollapse={(inactive) => {  console.log(inactive);  setInactive(inactive); }} sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
            </div>
            <div className="flex flex-col w-screen pl-60 ">
            <div className=" relative py-2  flex justify-end ">
        <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.28px] capitalize">Last Login</h2>
        <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px] capitalize px-3">2 :00 pM , Sunday 15 Oct 2023</h2>
      </div>

              <Routes>

            {/* Start */}
           
            <Route Route  path="/principle" element={<HomePrinciple/>} />

            < Route path="/attendanceprinciple" element={<AttendancePrinciple/>}/>
            < Route path="/resultspriciple" element={<ResultsPrinciple/>}/>
            < Route path="/feesprinciple" element={<FeesPrinciple/>}/>
            < Route path="/universityprinciple" element={<UniversityPrinciple/>}/>
            < Route path="/dashprinciple" element={< NotificationPrinciple/>}/>
            <Route  path="/dashprinciple/chat" element={<ConNotification/>}/>
              </Routes>
          </div>

          </div>

        </>
        ) : (<></>)}
         </Router>  

         <Router>
      {isChairmain ? (
          <>
          <div className="flex flex-row    ">
            <div className="fixed">
            <ChairmainSidebar onCollapse={(inactive) => {  console.log(inactive);  setInactive(inactive); }} sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
            </div>
            <div className="flex flex-col w-screen pl-60  ">
            <div className=" relative py-2  flex justify-end ">
        <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.28px] capitalize">Last Login</h2>
        <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px] capitalize px-3">2 :00 pM , Sunday 15 Oct 2023</h2>
      </div>

              <Routes>

{/* Start */}

<Route path="/chairmain" element={<HomeChairmain />} />
<Route path="/chairmain/chairmainhome" element={<CollageChairmain />} />

<Route path="/notificationchairmain" element={<NotificationChairmain />} />
   
              </Routes>
          </div>

          </div>

        </>
        ) : (<></>)}
         </Router>  

    </div>
  );
}

export default App;
