import React, { useState } from "react";

const HodUniversity = () => {
  return (
    <>
      <div className="absolute top-[5.5rem] right-0  px-10 rounded-[6px]  py-5 overflow-y-auto h-[42rem]  bg-[#F9FAFA] ">
        <div className="py-5">
          <h1 className="font-Raleway text-[#47A5E4] text-[20px] font-bold leading-normal tracking-[1.1px]">
            <span className="text-[#16376E] font-extrabold font-font-Raleway leading-normal tracking-[1.1px]  ">
              {" "}
              B{" "}
            </span>
            Class Of Computer Engineering
          </h1>
        </div>

        <div className="relative">
          <div className="flex flex-row gap-4 items-center justify-center">
            {/* first  */}
            <a href="/hodform">
            <div className="w-[320px] h-[120px] border bg-[#FFF] rounded-[12px] shadow-[rgba(153,153,153,0.25)_2px_4px_28px_0px]">
              <div className=" absolute bottom-3 left-4 ">
                <div className="border rounded-full w-[95px] h-[95px] bg-gradient-to-r from-[#47A5E4] to-[#16376E]"></div>
              </div>
              <div className=" absolute bottom-10 left-10 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="43"
                  height="48"
                  viewBox="0 0 43 48"
                  fill="none"
                >
                  <g filter="url(#filter0_d_173_2836)">
                    <path
                      d="M35.8333 33.625C35.8333 35.5106 35.8333 36.4534 35.2475 37.0392C34.6617 37.625 33.7189 37.625 31.8333 37.625H11.1666C9.28103 37.625 8.33822 37.625 7.75243 37.0392C7.16665 36.4534 7.16665 35.5106 7.16665 33.625L7.16665 11.375C7.16665 8.54657 7.16665 7.13236 8.04533 6.25368C8.92401 5.375 10.3382 5.375 13.1666 5.375H29.8333C32.6617 5.375 34.076 5.375 34.9546 6.25368C35.8333 7.13236 35.8333 8.54657 35.8333 11.375V33.625Z"
                      stroke="white"
                      stroke-width="3"
                    />
                    <path
                      d="M16.125 10.75L16.125 5.375M26.875 10.75L26.875 5.375"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                    <path
                      d="M26.875 28.6667L16.125 28.6667"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                    <path
                      d="M26.875 21.5L16.125 21.5"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_173_2836"
                      x="-4"
                      y="0"
                      width="51"
                      height="51"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_173_2836"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_173_2836"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>

              <div className="absolute bottom-11 left-[8rem]">
                <h1 className="text-[#16376E] font-Raleway text-[16px] not-italic font-bold leading-normal tracking-[1.1px]">
                  Mentoring Forms
                </h1>
              </div>
            </div>
            </a>
            {/* end */}

            {/* second */}
            <a href="#">
            <div className="w-[320px] h-[120px] border bg-[#FFF] rounded-[12px] shadow-[rgba(153,153,153,0.25)_2px_4px_28px_0px]">
              <div className=" absolute bottom-3 left-[22rem] ">
                <div className="border rounded-full w-[95px] h-[95px] bg-gradient-to-r from-[#47A5E4] to-[#16376E]"></div>
              </div>
              <div className=" absolute bottom-10 left-[23.5rem] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <g clip-path="url(#clip0_173_2892)">
                    <g filter="url(#filter0_d_173_2892)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.375 11.2H7.6L5 8.575L6.775 6.825L8.5 8.525L12.025 5L13.8 6.775L9.375 11.2ZM17.475 7.50001H37.475V10H17.475V7.50001ZM17.475 15H37.475V17.5H17.475V15ZM37.475 22.5H17.475V25H37.475V22.5ZM17.475 30H37.475V32.5H17.475V30ZM7.6 18.7H9.375L13.8 14.275L12.025 12.525L8.5 16.05L6.775 14.325L5 16.1L7.6 18.7ZM9.375 26.225H7.6L5 23.625L6.775 21.85L8.5 23.575L12.025 20.025L13.8 21.8L9.375 26.225ZM7.6 33.7501H9.375L13.8 29.3251L12.025 27.5501L8.5 31.1001L6.775 29.3751L5 31.1251L7.6 33.7501Z"
                        fill="white"
                      />
                    </g>
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_173_2892"
                      x="1"
                      y="5"
                      width="40.475"
                      height="36.7501"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_173_2892"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_173_2892"
                        result="shape"
                      />
                    </filter>
                    <clipPath id="clip0_173_2892">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div className="absolute bottom-11 left-[29rem]">
                <h1 className="text-[#16376E] font-Raleway text-[16px] not-italic font-bold leading-normal tracking-[1.1px]">
                  Attendance
                </h1>
              </div>
            </div>
            </a>
            {/* end */}
            {/* Third*/}
            <a href="#" >  
            <div className="w-[320px] h-[120px] border bg-[#FFF] rounded-[12px] shadow-[rgba(153,153,153,0.25)_2px_4px_28px_0px]">
              <div className=" absolute bottom-3 left-[43rem] ">
                <div className="border rounded-full w-[95px] h-[95px] bg-gradient-to-r from-[#47A5E4] to-[#16376E]"></div>
              </div>
              <div className=" absolute bottom-10 left-[44.5rem] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="43"
                  height="48"
                  viewBox="0 0 43 48"
                  fill="none"
                >
                  <g filter="url(#filter0_d_173_2864)">
                    <path
                      d="M35.8334 33.625C35.8334 35.5106 35.8334 36.4534 35.2476 37.0392C34.6618 37.625 33.719 37.625 31.8334 37.625H11.1667C9.28109 37.625 8.33828 37.625 7.75249 37.0392C7.16671 36.4534 7.16671 35.5106 7.16671 33.625L7.16671 11.375C7.16671 8.54657 7.16671 7.13236 8.04539 6.25368C8.92407 5.375 10.3383 5.375 13.1667 5.375H29.8334C32.6618 5.375 34.076 5.375 34.9547 6.25368C35.8334 7.13236 35.8334 8.54657 35.8334 11.375V33.625Z"
                      stroke="white"
                      stroke-width="3"
                    />
                    <path
                      d="M16.125 10.75L16.125 5.375M26.875 10.75L26.875 5.375"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                    <path
                      d="M26.875 28.6667L16.125 28.6667"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                    <path
                      d="M26.875 21.5L16.125 21.5"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_173_2864"
                      x="-4"
                      y="0"
                      width="51"
                      height="51"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_173_2864"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_173_2864"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>

              <div className="absolute bottom-11 left-[50rem]">
                <h1 className="text-[#16376E] font-Raleway text-[16px] not-italic font-bold leading-normal tracking-[1.1px]">
                  Fees
                </h1>
              </div>
           
            </div>
            </a>
          </div>
          
          
        </div>
        {/* end */}
       

        {/* second row  */}

        <div className="relative py-5">
          <div className="flex flex-row gap-4 ">
            {/* first  */}
            <a href="#">
            <div className="w-[320px] h-[120px] border bg-[#FFF] rounded-[12px] shadow-[rgba(153,153,153,0.25)_2px_4px_28px_0px]">
              <div className=" absolute bottom-[2rem] left-4 ">
                <div className="border rounded-full w-[95px] h-[95px] bg-gradient-to-r from-[#47A5E4] to-[#16376E]"></div>
              </div>
              <div className=" absolute bottom-[3rem] left-10 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="43"
                  height="48"
                  viewBox="0 0 43 48"
                  fill="none"
                >
                  <g filter="url(#filter0_d_173_2836)">
                    <path
                      d="M35.8333 33.625C35.8333 35.5106 35.8333 36.4534 35.2475 37.0392C34.6617 37.625 33.7189 37.625 31.8333 37.625H11.1666C9.28103 37.625 8.33822 37.625 7.75243 37.0392C7.16665 36.4534 7.16665 35.5106 7.16665 33.625L7.16665 11.375C7.16665 8.54657 7.16665 7.13236 8.04533 6.25368C8.92401 5.375 10.3382 5.375 13.1666 5.375H29.8333C32.6617 5.375 34.076 5.375 34.9546 6.25368C35.8333 7.13236 35.8333 8.54657 35.8333 11.375V33.625Z"
                      stroke="white"
                      stroke-width="3"
                    />
                    <path
                      d="M16.125 10.75L16.125 5.375M26.875 10.75L26.875 5.375"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                    <path
                      d="M26.875 28.6667L16.125 28.6667"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                    <path
                      d="M26.875 21.5L16.125 21.5"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_173_2836"
                      x="-4"
                      y="0"
                      width="51"
                      height="51"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_173_2836"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_173_2836"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>

              <div className="absolute bottom-[4rem] left-[8rem]">
                <h1 className="text-[#16376E] font-Raleway text-[16px] not-italic font-bold leading-normal tracking-[1.1px]">
                  Results
                </h1>
              </div>
            </div>
          </a>
            {/* end */}

            {/* second */}
            <a href="#">
            <div className="w-[320px] h-[120px] border bg-[#FFF] rounded-[12px] shadow-[rgba(153,153,153,0.25)_2px_4px_28px_0px]">
              <div className=" absolute bottom-[2rem] left-[22rem] ">
                <div className="border rounded-full w-[95px] h-[95px] bg-gradient-to-r from-[#47A5E4] to-[#16376E]"></div>
              </div>
              <div className=" absolute bottom-[3.5rem] left-[23.5rem] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <g clip-path="url(#clip0_173_2892)">
                    <g filter="url(#filter0_d_173_2892)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.375 11.2H7.6L5 8.575L6.775 6.825L8.5 8.525L12.025 5L13.8 6.775L9.375 11.2ZM17.475 7.50001H37.475V10H17.475V7.50001ZM17.475 15H37.475V17.5H17.475V15ZM37.475 22.5H17.475V25H37.475V22.5ZM17.475 30H37.475V32.5H17.475V30ZM7.6 18.7H9.375L13.8 14.275L12.025 12.525L8.5 16.05L6.775 14.325L5 16.1L7.6 18.7ZM9.375 26.225H7.6L5 23.625L6.775 21.85L8.5 23.575L12.025 20.025L13.8 21.8L9.375 26.225ZM7.6 33.7501H9.375L13.8 29.3251L12.025 27.5501L8.5 31.1001L6.775 29.3751L5 31.1251L7.6 33.7501Z"
                        fill="white"
                      />
                    </g>
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_173_2892"
                      x="1"
                      y="5"
                      width="40.475"
                      height="36.7501"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_173_2892"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_173_2892"
                        result="shape"
                      />
                    </filter>
                    <clipPath id="clip0_173_2892">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div className="absolute bottom-[4rem] left-[29rem]">
                <h1 className="text-[#16376E] font-Raleway text-[16px] not-italic font-bold leading-normal tracking-[1.1px]">
                Send Notice/circular
                </h1>
              </div>
            </div>
            </a>
            {/* end */}
            {/* Third*/}
           
          </div>

          {/* end */}
        </div>
      </div>
    </>
  );
};

export default HodUniversity;
