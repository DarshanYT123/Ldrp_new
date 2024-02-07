import React from "react";

const CounsellorDetails = () => {
  return (
    <>
      <div classname=" absolute top-8 right-0  px-10  py-5 max-h-[700px]  overflow-y-auto bg-white">
        <div className="flex items-center gap-[20px] justify-center">
          <a className="font-Poppins text-[18px] font-semibold leading-[27px] text-[#47A5E4] cursor-pointer">
            Counsellor Details{" "}
          </a>
          <a className="font-Poppins text-[18px] font-semibold leading-[27px] cursor-pointer ">
            Attendance Sheet{" "}
          </a>
        </div>

        <form>
          <div className="flex gap-[20rem] flex-row py-5 items-center justify-center">
            <div className="flex flex-row">
              <label
                for="Counselling Date :"
                className=" px-1 py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
              >
                Counselling Date:{" "}
              </label>

              <input
                type="date"
                id="CounsellingDate :"
                name="CounsellingDate :"
                //   value={CounsellingDate :}
                //   onChange={handleInputChange}
                //   onBlur={validateOne}
                className="hover:border-[2px] hover:border-[#159BD6] ml-[5px] w-[170px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF] font-inter  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                required
                placeholder="First/Second"
                tabindex="1"
              />
            </div>
            <div className="flex flex-row">
              <label
                for="CounsellingDay"
                className="px-1  py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
              >
                Counselling Day :{" "}
              </label>

              <input
                type="text"
                id="CounsellingDay"
                name="CounsellingDay"
                //   value={date}
                //   onChange={handleInputChange}
                //onBlur={validateOne}
                placeholder="Day"
                className="hover:border-[2px] hover:border-[#159BD6] w-[170px] h-[40px] rounded-[5px] border  border-[#CBCBCB] bg-[#FFFFFF] font-inter  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                required
                tabindex="2"
              />
            </div>
          </div>
          <div className="flex gap-[20rem] flex-row py-5 items-center justify-center">
            <div className="flex flex-row gap-5">
              <h2 className="font-Poppins font-semibold text-[#000000] text-[16px] leading-[24px] ">
                1. Reason For Counselling :
              </h2>

              <div class="flex items-center gap-2">
                <input
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="Routine-radio"
                  className="w-4 h-4 border-[#AEAEB2]"
                />
                <label for="default-radio-2" className="font-Poppins font-medium text-[#2C2C2E] text-[14px] leading-[21px]">
                Routine
                </label>
              </div>
              <div class="flex items-center gap-2">
                <input
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="Routine-radio"
                  className="w-4 h-4 border-[#AEAEB2]"
                />
                <label for="default-radio-2" className="font-Poppins font-medium text-[#2C2C2E] text-[14px] leading-[21px]">
                Routine
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CounsellorDetails;
