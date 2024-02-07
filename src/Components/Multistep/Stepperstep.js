import {Steps,Form} from 'antd'
import { useState } from 'react'
import styles from './TestPage.css'
import Basicinfo from '../Basicinfo/Basicinfo'
import StudentHistorynew from '../StudentHistory/StudentHistory'
import ExamSheetnew from '../ExamSheet/ExamSheet'
import MidSemesternew from '../MidSemester/MidSemester'
import Activitiesnew from '../Activities/Activities'
import Seminarnew from '../Seminar/Seminar'
import Membershipnew from '../Membership/Membership'

function StepperStep(){
  const [current,setCurrent] = useState(0)
  const [loginDetails,setLoginDetails] = useState(null)
  const onFinishLoginForm = (values) => {
    setLoginDetails(values);
    setCurrent(1)
  }
  const onFinishProfileForm = (values) => {
    setLoginDetails(values);
    setCurrent(1)
  }
  const forms = [
    <BasicInformation onFinish={onFinishLoginForm}/>,
    <StudentHistory onFinish={onFinishLoginForm}/>,
    <Exam onFinish={onFinishLoginForm}/>,
    <MidSemester onFinish={onFinishLoginForm}/>,
    <Activities onFinish={onFinishLoginForm}/>,
    <Seminar onFinish={onFinishLoginForm}/>,
    <Membership onFinish={onFinishLoginForm}/>,
    
  ]

  return(
    <div className='  bg-white w-screen'>
  <Steps   onChange={setCurrent} current={current}  >
    <Steps.Step style={{width:"200px",height:"100px",display:"flex",flexDirection:"column"}}  title="Basic Information"></Steps.Step>
    <Steps.Step style={{width:"200px",height:"100px"}} title="Student History And Information"></Steps.Step>
    <Steps.Step style={{width:"200px",height:"100px"}} title="External Exam Sheet"></Steps.Step>
    <Steps.Step style={{width:"200px",height:"100px"}} title="Mid Semester Details"></Steps.Step>
    <Steps.Step style={{width:"200px",height:"100px"}} title="Participated  Co-Curricular Activities"></Steps.Step>
    <Steps.Step style={{width:"200px",height:"100px"}} title="Participated Seminar or Project"></Steps.Step>
    <Steps.Step style={{width:"200px",height:"100px"}} title="Membership Organization"></Steps.Step>
  </Steps>
  {forms[current]}
  </div>
  )

}

function BasicInformation({onFinishLoginForm}){
  return<Form onFinish={onFinishLoginForm}><Form.Item className='w-screen   '><Basicinfo/></Form.Item></Form>
}
function StudentHistory({onFinishLoginForm}){
  return<Form onFinish={onFinishLoginForm}><Form.Item className='w-screen px-16'><StudentHistorynew/></Form.Item></Form>
}
function Exam({onFinishLoginForm}){
  return<Form onFinish={onFinishLoginForm}><Form.Item className='w-screen px-16'><ExamSheetnew/></Form.Item></Form>
}
function MidSemester({onFinishLoginForm}){
  return<Form onFinish={onFinishLoginForm}><Form.Item className='w-screen px-16'><MidSemesternew/></Form.Item></Form>
}
function Activities({onFinishLoginForm}){
  return<Form onFinish={onFinishLoginForm}><Form.Item className='w-screen px-16'><Activitiesnew/></Form.Item></Form>
}
function Seminar({onFinishLoginForm}){
  return<Form onFinish={onFinishLoginForm}><Form.Item className='w-screen px-16'><Seminarnew/></Form.Item></Form>
}
function Membership({onFinishLoginForm}){
  return<Form onFinish={onFinishLoginForm}><Form.Item className='w-screen px-16'><Membershipnew/></Form.Item></Form>
}
export default StepperStep




// import {
//   Box,
//   Button,
//   Container,
//   Stack,
//   Step,
//   StepButton,
//   Stepper,
// } from '@mui/material';
// import React, { useState } from 'react';
// import Basicinfo from '../Basicinfo/Basicinfo';
// import StudentHistory from '../StudentHistory/StudentHistory';
// import ExamSheet from '../ExamSheet/ExamSheet';

// const StepperStep = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const [steps, setSteps] = useState([
//     { label: 'Location', completed: false },
//     { label: 'Details', completed: false },
//     { label: 'Images', completed: false },
//   ]);
//   const handleNext = () => {
//     if (activeStep < steps.length - 1) {
//       setActiveStep((activeStep) => activeStep + 1);
//     } else {
//       const stepIndex = findUnfinished();
//       setActiveStep(stepIndex);
//     }
//   };
//   const checkDisabled = () => {
//     if (activeStep < steps.length - 1) return false;
//     const index = findUnfinished();
//     if (index !== -1) return false;
//     return true;
//   };
//   const findUnfinished = () => {
//     return steps.findIndex((step) => !step.completed);
//   };
//   return (
//     <Container sx={{  }}>
//       <Stepper
//         alternativeLabel
//         nonLinear
//         orientation="vertical"
//         activeStep={activeStep}
//         sx={{  }}
//       >
//         {steps.map((step, index) => (
//           <Step key={step.label} completed={step.completed}>
//             <StepButton onClick={() => setActiveStep(index)}>
//               {step.label}
//             </StepButton>
//           </Step>
//         ))}
//       </Stepper>
//       <Box>
//         {
//           {
//             // 0: <Basicinfo />,
//             1: <StudentHistory />,
//             2: <ExamSheet />,
//           }[activeStep]
//         }
//       </Box>
//       <Stack
//         direction="row"
//         sx={{ }}
//       >
//         <Button
//           color="inherit"
//           disabled={!activeStep}
//           onClick={() => setActiveStep((activeStep) => activeStep - 1)}
//         >
//           Back
//         </Button>
//         <Button disabled={checkDisabled()} onClick={handleNext}>
//           Next
//         </Button>
//       </Stack>
//     </Container>
//   );
// };

// export default StepperStep;