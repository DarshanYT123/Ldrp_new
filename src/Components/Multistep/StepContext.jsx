import React, { createContext, useContext, useState } from 'react'

const StepContext = createContext();


const StepProvider = ({children}) => {
    const [stepNo, setStepNo] = useState(1)
  return (
    <StepContext.Provider value={{ stepNo, setStepNo }}>{children}</StepContext.Provider>
  )
};

const useStepContext = () =>{
    return useContext(StepContext);
}

export{ StepProvider, useStepContext}