"use client"

import React from 'react'
import { useContestContext } from './(context)/Contest';
import {handleCode} from "app/submit";


const handleSubmit = (userCode, testCase) => {
  handleCode(userCode, testCase);
}

const Editorfooter = () => {
  const {userCode, setUserCode, testCase, setTestCase, output, setOutput} = useContestContext();
  return (
    <div className='flex justify-between bg-neutral-900 text-wh-10 px-10 h-12 items-center rounded-b-lg'>
        <div>
            <p>Ln 16, Col 3</p>
        </div>
        <div className='flex gap-5'>
            <button className='bg-neutral-600 w-24 py-2 rounded-lg font-bold hover:bg-neutral-500' onClick={() => handleSubmit(userCode, testCase)}>Run</button>
            <button className='bg-green-600 w-24 py-2 rounded-lg font-bold hover:bg-green-500' onClick={() => handleSubmit(userCode, testCase)}>Submit</button>
        </div>
    </div>
  )
}

export default Editorfooter