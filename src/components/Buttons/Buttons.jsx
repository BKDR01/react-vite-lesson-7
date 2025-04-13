import React from 'react'

const Buttons = ({className, Text}) => {
  return (
    <>
      <button className={`py-[13px] px-[50px] ${className}`}>{Text}</button>
    </>
  )
}

export default Buttons
