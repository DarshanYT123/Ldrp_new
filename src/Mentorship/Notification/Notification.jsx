import React, { useState } from "react";

const Notification = ({}) => {

  return (
    <>
      <div className="absolute top-[80px] right-0  px-5  py-5 max-h-[700px]  overflow-y-auto bg-white  ">
        <div className="flex justify-center  items-center ">
          <h2 className="text-[color:var(--02,#47A5E4)] py-2 text-[20px] font-Raleway not-italic font-bold leading-[normal] tracking-[1.1px]">
            Notification
          </h2>
        </div>
        <div className="flex justify-end py-3 ">
            <div className="flex flex-row justify-center items-center">
<input type="text" placeholder="Search" className=" bg-[#F3F3F3] px-7 py-2 focus:outline-none " />
<div className="relative right-10 "><svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.1615 0C12.4257 0 15.8826 3.42502 15.8826 7.65C15.8826 9.45606 15.2509 11.1159 14.1945 12.4246L17.3471 15.549C17.6821 15.8809 17.6821 16.4191 17.3471 16.751C17.0378 17.0575 16.5512 17.081 16.2147 16.8218L16.1338 16.751L12.9805 13.6275C11.6596 14.6741 9.98434 15.3 8.1615 15.3C3.89727 15.3 0.44043 11.875 0.44043 7.65C0.44043 3.42502 3.89727 0 8.1615 0ZM8.16151 1.70007C4.84489 1.70007 2.15623 4.36398 2.15623 7.65007C2.15623 10.9362 4.84489 13.6001 8.16151 13.6001C11.4781 13.6001 14.1668 10.9362 14.1668 7.65007C14.1668 4.36398 11.4781 1.70007 8.16151 1.70007Z" fill="#211F3B"/>
</svg></div>
</div>
<div className="px-2 py-2 bg-[#F3F3F3]">
<svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none">
  <path d="M4.83984 7C4.83984 6.44772 5.29172 6 5.84913 6H19.9792C20.5366 6 20.9885 6.44772 20.9885 7C20.9885 7.55228 20.5366 8 19.9792 8H5.84913C5.29172 8 4.83984 7.55228 4.83984 7ZM6.85842 12C6.85842 11.4477 7.3103 11 7.86772 11H17.9606C18.518 11 18.9699 11.4477 18.9699 12C18.9699 12.5523 18.518 13 17.9606 13H7.86772C7.3103 13 6.85842 12.5523 6.85842 12ZM8.87701 17C8.87701 16.4477 9.32888 16 9.8863 16H15.942C16.4995 16 16.9513 16.4477 16.9513 17C16.9513 17.5523 16.4995 18 15.942 18H9.8863C9.32888 18 8.87701 17.5523 8.87701 17Z" fill="#211F3B"/>
</svg>
</div>
        </div>
       <div className="flex flex-row gap-x-7">
<div className="flex flex-col justify-start gap-y-1">
<div className="bg-[#F5F5F5] rounded-[2px] px-5 py-2 flex flex-row">
    <div className="flex flex-col gap-y-2 justify-start items-start py-2 ">
        <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-semibold leading-[normal]">Kindly Fill your Mentoring Form By Today Only</h2>
        <h2 className="text-[color:var(--02,#47A5E4)] text-[12px] not-italic font-normal leading-[normal] ">From Mentor Name</h2>
    </div>
    <div className="flex justify-end items-end  ">
        <h2 className="text-[color:var(--01,#16376E)] text-[10px] font-Poppins not-italic font-medium leading-[normal]">9:00 Am 17 Oct 2023</h2>
    </div>
    </div>
    <div className="bg-[#F5F5F5] rounded-[2px] px-5 py-2 flex flex-row">
    <div className="flex flex-col gap-y-2 justify-start items-start py-2 ">
        <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-semibold leading-[normal]">Kindly Fill your Mentoring Form By Today Only</h2>
        <h2 className="text-[color:var(--02,#47A5E4)] text-[12px] not-italic font-normal leading-[normal] ">From Mentor Name</h2>
    </div>
    <div className="flex justify-end items-end  ">
        <h2 className="text-[color:var(--01,#16376E)] text-[10px] font-Poppins not-italic font-medium leading-[normal]">9:00 Am 17 Oct 2023</h2>
    </div>
    </div>
    <div className="bg-[#F5F5F5] rounded-[2px] px-5 py-2 flex flex-row">
    <div className="flex flex-col gap-y-2 justify-start items-start py-2 ">
        <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-semibold leading-[normal]">Kindly Fill your Mentoring Form By Today Only</h2>
        <h2 className="text-[color:var(--02,#47A5E4)] text-[12px] not-italic font-normal leading-[normal] ">From Mentor Name</h2>
    </div>
    <div className="flex justify-end items-end  ">
        <h2 className="text-[color:var(--01,#16376E)] text-[10px] font-Poppins not-italic font-medium leading-[normal]">9:00 Am 17 Oct 2023</h2>
    </div>
    </div>
    <div className="bg-[#F5F5F5] rounded-[2px] px-5 py-2 flex flex-row">
    <div className="flex flex-col gap-y-2 justify-start items-start py-2 ">
        <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-semibold leading-[normal]">Kindly Fill your Mentoring Form By Today Only</h2>
        <h2 className="text-[color:var(--02,#47A5E4)] text-[12px] not-italic font-normal leading-[normal] ">From Mentor Name</h2>
    </div>
    <div className="flex justify-end items-end  ">
        <h2 className="text-[color:var(--01,#16376E)] text-[10px] font-Poppins not-italic font-medium leading-[normal]">9:00 Am 17 Oct 2023</h2>
    </div>
    </div>
    <div className="bg-[#F5F5F5] rounded-[2px] px-5 py-2 flex flex-row">
    <div className="flex flex-col gap-y-2 justify-start items-start py-2 ">
        <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-semibold leading-[normal]">Kindly Fill your Mentoring Form By Today Only</h2>
        <h2 className="text-[color:var(--02,#47A5E4)] text-[12px] not-italic font-normal leading-[normal] ">From Mentor Name</h2>
    </div>
    <div className="flex justify-end items-end  ">
        <h2 className="text-[color:var(--01,#16376E)] text-[10px] font-Poppins not-italic font-medium leading-[normal]">9:00 Am 17 Oct 2023</h2>
    </div>
    </div>
    <div className="bg-[#F5F5F5] rounded-[2px] px-5 py-2 flex flex-row">
    <div className="flex flex-col gap-y-2 justify-start items-start py-2 ">
        <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-semibold leading-[normal]">Kindly Fill your Mentoring Form By Today Only</h2>
        <h2 className="text-[color:var(--02,#47A5E4)] text-[12px] not-italic font-normal leading-[normal] ">From Mentor Name</h2>
    </div>
    <div className="flex justify-end items-end  ">
        <h2 className="text-[color:var(--01,#16376E)] text-[10px] font-Poppins not-italic font-medium leading-[normal]">9:00 Am 17 Oct 2023</h2>
    </div>
    </div>
    <div className="bg-[#F5F5F5] rounded-[2px] px-5 py-2 flex flex-row">
    <div className="flex flex-col gap-y-2 justify-start items-start py-2 ">
        <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-semibold leading-[normal]">Kindly Fill your Mentoring Form By Today Only</h2>
        <h2 className="text-[color:var(--02,#47A5E4)] text-[12px] not-italic font-normal leading-[normal] ">From Mentor Name</h2>
    </div>
    <div className="flex justify-end items-end  ">
        <h2 className="text-[color:var(--01,#16376E)] text-[10px] font-Poppins not-italic font-medium leading-[normal]">9:00 Am 17 Oct 2023</h2>
    </div>
    </div>
</div>


<div className="  h-96  w-2 ">
    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="623" viewBox="0 0 2 623" fill="none">
  <path d="M1 1V622" stroke="#BDBDBD" stroke-linecap="round" stroke-dasharray="4 4"/>
</svg></div>
<div className="w-[530px] h-[500px] border-[2px] border-[#47A5E4] "></div>
       </div>
      </div>
    </>
  );
};

export default Notification;
