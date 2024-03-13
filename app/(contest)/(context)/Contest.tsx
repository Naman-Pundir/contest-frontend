"use client";

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

interface ContextProps{
    userCode: any,
    setUserCode: Dispatch<SetStateAction<any>>,
    testCase: any,
    setTestCase: Dispatch<SetStateAction<any>>,
    output: any,
    setOutput: Dispatch<SetStateAction<any>>
}

const ContestContext = createContext<ContextProps>({
    userCode: ``,
    setUserCode: (): any => ``,
    testCase: '',
    setTestCase: (): any => '',
    output: '',
    setOutput: (): any => ''
})

export const ContestContextProvider = ({children}) => {
    const [userCode, setUserCode] = useState(``);
    const [testCase, setTestCase] = useState("");
    const [output, setOutput] = useState("");

    return(
        <ContestContext.Provider value={{userCode, setUserCode, testCase, setTestCase, output, setOutput}}>
            {children}
        </ContestContext.Provider>
    )
}

export const useContestContext = () => useContext(ContestContext)