import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboardsteps from './Dashboardsteps';
import MentoringForm from '../MentoringForm/MentoringForm';
import Sidebar from "./Sidebar";
import Header from "../Header/Header";

const Dashboard = () => {
    return (<>
      <div className="pt-3 flex justify-end ">
      <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.28px] capitalize">Last Login</h2>
      <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px] capitalize px-3">2 :00 pM , Sunday 15 Oct 2023</h2>
    </div>
    <div className='relative -top-5   rounded-lg  '>
    <Sidebar/>
         </div>
         </>
  );
};

export default Dashboard;