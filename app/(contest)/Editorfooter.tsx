import React from 'react'

type Props = {}

const Editorfooter = (props: Props) => {
  return (
    <div className='flex justify-between bg-neutral-900 text-wh-10 px-10 h-12 items-center rounded-b-lg'>
        <div>
            <p>Ln 16, Col 3</p>
        </div>
        <div className='flex gap-5'>
            <button className='bg-neutral-600 w-24 py-2 rounded-lg font-bold hover:bg-neutral-500'>Run</button>
            <button className='bg-green-600 w-24 py-2 rounded-lg font-bold hover:bg-green-500'>Submit</button>
        </div>
    </div>
  )
}

export default Editorfooter