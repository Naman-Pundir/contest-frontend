import React from 'react'
import Menu from './Menu'

type Props = {}

const Problem = (props: Props) => {
  return (
    <div className='h-full'>
        <Menu/>
        <div className='flex-col bg-neutral-900 text-wh-10 py-9 px-4 rounded-lg h-full'>
            <h1 className='text-3xl'>791. Custom Sort String</h1>
            <br/>
            <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas facere aspernatur, nostrum explicabo perspiciatis cumque ut, repellat id minima, sequi saepe. Commodi doloremque facilis repellendus omnis architecto quod nam aut.</p>
        </div>
    </div>    
  )
}

export default Problem