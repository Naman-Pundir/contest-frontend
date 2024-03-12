'use client'

import React from 'react'
import Editormenu from './Editormenu'
import { Editor } from '@monaco-editor/react'
import Editorfooter from './Editorfooter'

type Props = {}

const Codeeditor = (props: Props) => {
  return (
    <div className='h-full'>
        <Editormenu/>
        <div className='flex-col bg-neutral-900 text-wh-10 py-9 px-4 h-full rounded-t-lg'>
          <Editor height="60vh" defaultLanguage="cpp" defaultValue="// some comment" theme='vs-dark'  />
        </div>
        <Editorfooter/>
    </div>
  )
}

export default Codeeditor