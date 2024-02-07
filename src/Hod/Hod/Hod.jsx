import React from "react";
import HodSidebar from "../HodSidebar/HodSidebar";

const Hod = () => {
    return (<>
      {/* <div className="pt-3 flex justify-end ">
      <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.28px] capitalize">Last Login</h2>
      <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px] capitalize px-3">2 :00 pM , Sunday 15 Oct 2023</h2>
    </div> */}
    <div className='  rounded-lg  '>
    <HodSidebar/>
         </div>
         </>
  );
};

export default Hod;