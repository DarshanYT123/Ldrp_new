import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
// import "./App.css";
import data from "./mock-data.json";
import { useStepContext } from '../Multistep/StepContext';
// import ReadOnlyRow from "./components/ReadOnlyRow";
// import EditableRow from "./components/EditableRow";
import { FaSortDown } from "react-icons/fa";

const Activities = () => {
    const { stepNo, setStepNo } = useStepContext();
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    during: "",
    activity: "",
    date: "",
    place: "",
  });

  const options = [
    "12th","12th","12th",
  ];
  const onOptionChangeHandler = (event) => {
    setContacts(event.target.value);
    console.log(
        "User Selected Value - ",
        event.target.value
    );
};
  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      during: addFormData.during,
      activity: addFormData.activity,
      date: addFormData.date,
      place: addFormData.place,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
    setStepNo(stepNo + 1)
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="overflow-hidden   flex justify-center ">
    <div className="   pt-1 pb-14 relative w-screen px-10  max-h-[580px]    overflow-y-scroll ">
                <div className="flex justify-center  items-center">
          <h2 className="text-[color:var(--02,#47A5E4)] text-[20px] font-Raleway not-italic font-bold leading-[normal] tracking-[1.1px]">
            List Co-Curricular Activities you have Participated in
          </h2>
        </div>
        <div className=" pt-7 flex flex-row justify-between items-center">
          <div className="flex flex-row px-1 items-center">
            <div className="flex px-1">
              <h2
                className="    text-[color:var(--01,#159BD6)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize
"
              >
                {" "}
                Note:
              </h2>
            </div>
            <div className="flex ">
              <h2 className="text-[color:var(--01,#159BD6)] text-[14px] font-inter not-italic font-normal leading-[normal] tracking-[0.28px] capitalize">
                Please Fill all the details in{" "}
                <span className="text-[color:var(--01,#159BD6)] text-[14px] font-inter not-italic font-semibold leading-[normal] tracking-[0.28px] capitalize">
                  CAPITAL
                </span>{" "}
                Letters only
              </h2>
            </div>
          </div>
        </div>
    

        {/* <h2>Add a Contact</h2> */}
      <form onSubmit={handleAddFormSubmit}>
        <div>
      <div className="flex flex-row justify-between items-center py-5">
      <div className="flex flex-row justify-center items-center">
      <div className="flex justify-center relative min-w-[148px] px-1 h-[40px]">
               <select  onChange={onOptionChangeHandler} className=" px-9 rounded-[5px] border-none appearance-none p-2 w-[100%] hover:text-[#47A5E4] bg-[#E6E6E6] text-[18px] text-[color:var(--02,#363636)] font-inter not-italic font-medium leading-[normal] tracking-[0.36px] capitalize "
              id="12th"
          
              // value={selectoption}
              // onChange={handleInputChange}
              //onBlur={validateOne}
              tabIndex={1}
          
               >
               <option     className="">12th</option>
             
               {options.map((option,index) => {
                return (
                    <option key={index}>
                        {option}
                    </option>
                );
               })}
       
               </select>
               <div  className="icon-container pointer-events-none w-[50px] h-[100%] absolute -top-1 right-4 flex items-center justify-center ">
                <span  className="text-[20px] text-black  "><FaSortDown /></span>
               </div>
               </div>
               </div>

               <div className="flex flex-row">
              <label
                for="caste"
                className="px-1  py-2 flex justify-start text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
              >
                Activity Name:{" "}
              </label>
        <input
          type="text"
          id="activity"
          name="activity"
          required="required"
          className="hover:border-[2px] hover:border-[#159BD6] w-[243px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF]  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
            placeholder="Activity "
          onChange={handleAddFormChange}
        />
        </div>
        <div className="flex flex-row">
              <label
                for="date"
                id="date"
                className="px-1 flex justify-start  py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
              >
                Date:{" "}
              </label>

              <input
                type="date"
                name="date"
                id="date2"
               onChange={handleAddFormChange}
              // value={date}
              //  onChange={handleInputChange}
                //onBlur={validateOne}
                

                placeholder="DD/MM/YYYY"
                className="hover:border-[2px] hover:border-[#159BD6] w-[133px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF]  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                required
                tabIndex={3}
              />
            </div>
            <div className="flex flex-row">
              <label
                for="place"
                className="flex justify-start px-1 py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
              >
                Place:{" "}
              </label>

              <input
                id="place"
                type="text"
                name="place"
                // value={place}
               onChange={handleAddFormChange}
               //onChange={handleInputChange}
                //onBlur={validateOne}
                placeholder="Place"
                className="hover:border-[2px] hover:border-[#159BD6] w-[143px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF]  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                required
                tabIndex={4}
              />
            </div>
        {/* <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
        /> */}
        {/* <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
        /> */}
        {/* <button type="submit">Add</button> */}
        </div>
        <div className="flex justify-end">
            <button type="submit" className="text-[color:var(--03,#FFF)] rounded-[5px] text-[16px] font-inter px-14 py-2 bg-[#159BD6] shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">
              Add
            </button>
          </div>
          </div>
      </form>
      <form onSubmit={handleEditFormSubmit}>
      <div className=" py-7 ">
          {/* <div className="flex justify-end">
    <button className="text-[color:var(--03,#FFF)] rounded-[5px] text-[16px] font-inter px-14 py-2 bg-[#159BD6] shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">Add</button>
</div> */}
     <section  className="relative  w-[100%] ">

<section className=" capitalize ">
<div className="  w-[100%] bg-white ">
<table className="table-auto1 table-auto min-w-[100%] max-h-[250px] overflow-y-scroll overflow-hidden  border-collapse  ">
        <thead id="table_fixed">
                <tr className="text-[18px] font-bold font-Montserrat  text-white bg-[#47A5E4] px-3 sticky top-0 z-20 max-h-[70px]  h-[10px]">
                  {" "}
                  <th className="px-[2.5rem] py-2.5 border-[2px] border-[#47A5E4] whitespace-nowrap">
                    <p className=" text-white text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize ">During</p>
                  </th>
                  <th className="px-[10rem] py-2.5 border-[2px] border-[#47A5E4] whitespace-nowrap">
                    <p className="text-white text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">Activity</p>
                  </th>
                  <th className="px-[1.5rem] py-2.5 border-[2px] border-[#47A5E4] whitespace-nowrap">
                    <p className="text-white text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">Date</p>
                  </th>
                  <th className="px-[1.5rem] py-2.5 border-[2px] border-[#47A5E4] whitespace-nowrap">
                    <p className="text-white text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">Place</p>
                  </th>
                </tr>
              </thead>
            <tbody className=' '>
            {contacts.map((contact) => (
           <tr className="text-sm  h-[55px] rounded-lg py-3 px-3 transition-all duration-300    ">
                 <td className="border-[2px] border-[#47A5E4] px-[1rem] whitespace-nowrap">
                    <div className="">
                      <div className="text-center  text-black text-[16px]  font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">
                    {contact.during}
                    </div>
                    </div>
                    </td>
                    <td className="px-[1rem] whitespace-nowrap border-[2px] border-[#47A5E4]">
                    <div className="">
                   
                      <div className="  text-black text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">    
                   {contact.activity}
                   </div>
                   </div></td>
                   <td className="px-[1rem] whitespace-nowrap border-[2px] border-[#47A5E4]">
                    <div className="">
                      <div className="text-center text-[#00BE35] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">
                    {contact.date}
                    </div>
                    </div></td>
                    <td className="px-[1.2rem] whitespace-nowrap border-[2px] border-[#47A5E4]">
                    <div className="">
                      <div className="text-center text-black text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">
                     {contact.place}
                     </div>
                     </div></td>
           </tr>
            ))}
        
            
          </tbody>
        </table>
        </div>
        </section>
        </section>
        </div>
        <div className="flex flex-row justify-center items-center gap-x-7">
        <button
            // onClick={handlePrevStep}
            className="border-[#159BD6] px-10 py-2 border-[1px] rounded-[5px] text-[color:var(--01,#159BD6)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize"
          >
            Cancel
          </button>
               <button
            // onClick={handleNextStep}
            className="px-10 py-2 shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] rounded-[5px] bg-[#159BD6] text-[color:var(--03,#FFF)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize"
          >
            Save & Next
          </button>
     
        </div>
      </form>

     
    </div>
    </div>
  );
};

export default Activities;