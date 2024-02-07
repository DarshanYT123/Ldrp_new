import React, { useState, useRef } from "react";

const UniversityHod = ({ handleNextStep }) => {
  const fileInputRef = useRef();
  const fileInputRef2 = useRef();
  const fileInputRef3 = useRef();
  //image link name
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [selectedImage3, setSelectedImage3] = useState(null);

  //first
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Display the name of the selected file
      console.log('Selected File:', file.name);

      // You can also store the file object in state if needed
      setSelectedImage(file);
    }
  };
  // handle button

  const handlebutton = () => {
    fileInputRef.current.click();
  }

  const handleImageChange2 = (e) => {
    const file2 = e.target.files[0];

    if (file2) {
      // Display the name of the selected file
      console.log('Selected File:', file2.name);

      // You can also store the file object in state if needed
      setSelectedImage2(file2);
    }
  };
  // handle button

  const handlebutton2 = () => {
    fileInputRef2.current.click();
  }

  //
  //first
  const handleImageChange3 = (e) => {
    const file3 = e.target.files[0];

    if (file3) {
      // Display the name of the selected file
      console.log('Selected File:', file3.name);

      // You can also store the file object in state if needed
      setSelectedImage3(file3);
    }
  };
  // handle button

  const handlebutton3 = () => {
    fileInputRef3.current.click();
  }

  return (
    <>
      <div className="w-full  px-2  ">
        <div className="overflow-hidden rounded-lg  w-full  p-10  pt-5   bg-white  ">
          <div className="flex justify-center  items-center ">
            <h2 className="text-[color:var(--02,#47A5E4)] py-2 text-[20px] font-Raleway not-italic font-bold leading-[normal] tracking-[1.1px]">
              University Section
            </h2>
          </div>
          <div className="flex flex-row justify-between px-6 py-6">
            <div className="flex flex-col gap-y-3">
              <div className="">
                <h2 className="pl-3  text-black  text-[20px] not-italic font-bold leading-[normal] tracking-[1.1px] font-Raleway ">Transcript</h2>
              </div>
              <div className="flex flex-col gap-2 ">
                <span
                  onClick={handlebutton}
                  className="text-center  absolute px-12  text-[color:var(--03,#FFF)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] rounded-[5px] bg-[#159BD6]  py-2 ">
                  Get
                  <input
                    type="file"
                    id="imageUpload"
                    className="hidden truncate "
                    // value={selectedImage}
                    accept="image/*" // Specify the accepted file types (e.g., images)
                    onChange={handleImageChange}
                    ref={fileInputRef}
                  />
                </span>
                {selectedImage && (
                  <div className="pt-14">
                    <button
                      onClick={handlebutton}
                      className="truncate pt-2 text-[color:var(--03,#FFF)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize px-5 shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] rounded-[5px] py-2  bg-[#159BD6]">
                      {selectedImage.name}</button>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-y-3">
              <div className="flex justify-center">
                <h2 className="  text-center   cursor-pointer  text-black text-[20px] not-italic font-bold leading-[normal] tracking-[1.1px] font-Raleway ">LOR</h2>
              </div>
              <div className="flex flex-col gap-2 ">
                <span
                  onClick={handlebutton2}
                  className="text-center absolute px-12 text-[color:var(--03,#FFF)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] rounded-[5px] bg-[#159BD6]  py-2 ">
                  Get
                  <input
                    type="file"
                    id="imageUpload2"
                    className="hidden"
                    // Activeclass="truncate"
                    // value={selectedImage}
                    accept="image/*" // Specify the accepted file types (e.g., images)
                    onChange={handleImageChange2}
                    ref={fileInputRef2}
                  />
                </span>

                {selectedImage2 && (
                  <div className="pt-14">
                    <button
                      onClick={handlebutton2}
                      className=" truncate pt-2 text-[color:var(--03,#FFF)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize px-10 shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] rounded-[5px] py-2 bg-[#159BD6]">
                      {selectedImage2.name}</button>
                  </div>

                )}
              </div>
            </div>
            <div className="flex flex-col gap-y-3">
              <div className="">
                <h2 className="  text-black text-[20px] not-italic font-bold leading-[normal] tracking-[1.1px] font-Raleway ">Degree Certificate</h2>
              </div>
              <div className="flex flex-col  gap-2  ">
                <button
                  onClick={handlebutton3}
                  className=" text-center absolute px-12 text-[color:var(--03,#FFF)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] rounded-[5px] bg-[#159BD6]  py-2">
                  Get
                  <input
                    type="file"
                    id="imageUpload3"
                    className="hidden"
                    // value={selectedImage}
                    accept="image/*" // Specify the accepted file types (e.g., images)
                    onChange={handleImageChange3}
                    ref={fileInputRef3}
                  />
                </button>

                {selectedImage3 && (
                  <div className="pt-14">
                    <button
                      onClick={handlebutton3}
                      className=" truncate pt-2 text-[color:var(--03,#FFF)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize px-5 shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] rounded-[5px] py-2 bg-[#159BD6]">
                      {selectedImage3.name}</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UniversityHod;
