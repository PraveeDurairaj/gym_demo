import React from 'react';

const PrimaryButton = ({buttonText,containerClass}) => {
  return (
    <button className={`bg-theme font-[600] text-black px-[20px] py-[10px] rounded-full ${containerClass && containerClass}`}>{buttonText}</button>
  )
}

export default PrimaryButton
