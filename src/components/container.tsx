import React from 'react'

type Props = {
    children: React.ReactNode
}

function Container({children}: Props) {
  return (
    <div 
    className='
    max-w-[1100px] md:mx-auto
    min-h-[100vh]
    '
    >{children}</div>
  )
}

export default Container