'use client';
import React, { useEffect, useState } from 'react';
// import StepFinal from './StepFinal';
// import Basicinfo from '../Basicinfo/Basicinfo';
// import StudentHistory from '../StudentHistory/StudentHistory';
// import ExamSheet from '../ExamSheet/ExamSheet';
// import MidSemester from '../MidSemester/MidSemester';
// import Activities from '../Activities/Activities';
// import Seminar from '../Seminar/Seminar';
// import Membership from '../Membership/Membership';

// This is the parent component.
// This component will control and manage steps and data

// Step A: Customer Identity Info
// Step B: Customer Business Info
// Step C: Customer Financial Info
// Step D: Confirm Form  Data

// Step Final: Succes Result

const Dashboardsteps = ({ showStepNumber }) => {
    useEffect(() => {
        document.title = "CA | Dashboard";
        document.getElementById("header_title").innerHTML = "Dashboard";
    
      });
    

  return (
    <>
    <div className='  '>


    </div>
    </>
  );
};

export default Dashboardsteps;