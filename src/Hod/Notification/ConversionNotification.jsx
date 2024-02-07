import React, { useState } from "react";
// import { FaRegBookmark } from "react-icons/fa";
// import data from './data'
import { IoArrowBack } from "react-icons/io5";

const ConversionNotification = () => {


  return (
    <>
 <div className="flex flex-row gap-x-2  ">
      <div className="bg-white w-[50%] p-5 ">
        <a href="/dashod">
        <div className="flex flex-row items-center gap-x-2 ">
          <div><IoArrowBack color="#47A5E4" className=" text-[20px] " /></div>
          <div>
      <h1 className="text-[color:var(--02,#47A5E4)] text-[20px] py-2 font-Raleway not-italic font-bold leading-[normal] tracking-[1.1px]">Conversion</h1>
      </div>
      </div>
      </a>
     <div className="py-2">
      <div className="flex flex-row space-x-3">
     <img src="/img/femaleimg.svg" />
     <div className="flex flex-col">
     <div className="flex flex-row space-x-1 py-1.5 ">
      <h1 className="text-[color:var(--black,#101010)] text-[16px] font-inter not-italic font-semibold leading-[normal] tracking-[0.32px]">Hanna Novak</h1>
      <h1 className="text-[color:var(--01,#16376E)] pt-1 text-[12px] font-inter not-italic font-semibold leading-[normal] tracking-[0.24px]">From LDRP</h1>
     </div>
     <div>
      <h1 className="text-[color:var(--black,#101010)] text-[14px] font-inter not-italic font-medium leading-[normal] tracking-[0.28px]">hanna@ldrp.ac.in</h1>
     </div>
     </div>
     </div>
     </div>

     <div className="py-6">
      <p className="text-[color:var(--black,#101010)] text-[16px] font-inter not-italic font-normal leading-[139.7%] tracking-[0.32px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada orci sit amet pretium facilisis. In lobortis congue augue, a commodo libero tincidunt scelerisque. Donec tempus congue lacinia. Phasellus lacinia felis est, placerat commodo odio tincidunt iaculis. Sed felis magna, iaculis a metus id, ullamcorper suscipit nulla. Fusce facilisis, nunc ultricies posuere porttitor, nisl lacus tincidunt diam, vel feugiat nisi elit id massa. Proin nulla augue, dapibus non justo in, laoreet commodo nunc. Maecenas faucibus neque in nulla mollis interdum. Quisque quis pellentesque enim, vitae pulvinar purus. Quisque vitae suscipit risus. Curabitur scelerisque magna a interdum pretium. Integer sodales metus ut placerat viverra. Curabitur accumsan, odio quis vehicula imperdiet, tellus ex venenatis nisl, a dignissim lectus augue tincidunt arcu.     </p>
     </div>
 
      <div className="flex flex-col gap-y-3">
        <div>
          <h1 className="text-[color:var(--black,#101010)] text-[16px] font-inter not-italic font-semibold leading-[normal] tracking-[0.32px]">Hanna Novak</h1>
        </div>
        <div className=" space-y-1.5">
          <h1  className="text-[color:var(--black,#101010)]  text-[12px] font-inter not-italic font-medium leading-[normal] tracking-[0.24px]">Assistant Professor</h1>
          <h1  className="text-[color:var(--black,#101010)]  text-[12px] font-inter not-italic font-medium leading-[normal] tracking-[0.24px]">Computer Engineering Department</h1>
          <h1  className="text-[color:var(--black,#101010)]  text-[12px] font-inter not-italic font-medium leading-[normal] tracking-[0.24px]">LDRP Institute of Technology and Research</h1>
          <h1  className="text-[color:var(--black,#101010)]  text-[12px] font-inter not-italic font-medium leading-[normal] tracking-[0.24px]">Gandhinagar, Gujarat, India.</h1>
          <h1  className="text-[color:var(--black,#101010)]  text-[12px] font-inter not-italic font-medium leading-[normal] tracking-[0.24px]">Email: hanna@ldrp.ac.in</h1>
    
</div>
      </div>

<div className="flex justify-end">
  <button className="text-[color:var(--03,#FFF)] shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] rounded-[5px] px-10 py-2 bg-[#16376E] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">Reply</button>
</div>


      </div>



      <div className="bg-white w-[50%] p-5 ">
      <h1 className="text-[color:var(--02,#47A5E4)] text-[20px] font-Raleway not-italic font-bold leading-[normal] tracking-[1.1px]">Notification</h1>
    <div>
   <div className="flex flex-row gap-x-3 py-2 ">
    <input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes"/>
   <h1 className="text-[color:var(--Gray-2,#2C2C2E)] text-[12px] font-Poppins not-italic font-normal leading-[normal] capitalize">Send as Circular</h1>
   </div>
   <div className="flex flex-col gap-y-4">
    <div className="flex flex-row gap-x-6 items-center">
      <h1 className="text-black text-nowrap  text-[14px] font-inter not-italic font-bold leading-[normal] tracking-[0.28px] capitalize">To :</h1>
      <input type="text" className="w-full py-3  border-[color:var(--Desable-Grey,#BDBDBD)]  rounded-[5px] border-[0.3px] border-solid"></input>
    </div>
    <div className="flex flex-row gap-x-2 items-center">
      <h1 className="text-black text-nowrap  text-[14px] font-inter not-italic font-bold leading-[normal] tracking-[0.28px] capitalize">From :</h1>
      <input type="text" className="w-full py-3  border-[color:var(--Desable-Grey,#BDBDBD)]  rounded-[5px] border-[0.3px] border-solid"></input>
    </div>
    <textarea typeof="text" placeholder="Write message here" className=" p-2 w-full  text-[color:var(--Desable-Grey,#BDBDBD)] text-[14px] font-inter not-italic font-medium leading-[normal] tracking-[0.28px] capitalize h-[25rem] resize-none rounded-[5px] bg-[#F5F5F5]" ></textarea>
   </div>
   <div className="flex flex-row justify-between items-center py-3">
   <button className="px-8 py-2 bg-[#159BD6] shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] rounded-[5px]   text-[color:var(--03,#FFF)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize ">Undo</button>
    <button className="px-8 py-2 bg-[#16376E] shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] rounded-[5px]     text-[color:var(--03,#FFF)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">Send</button>
   </div>
    </div>
      </div>
      </div>
    </>
  );
};

export default ConversionNotification;
