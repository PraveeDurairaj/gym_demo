import React from 'react';

const PrimaryButton = ({buttonText,containerClass}) => {
  return (
    <button className={`bg-theme font-[500] text-white px-[20px] py-[5px] rounded-full ${containerClass && buttonText}`}>{buttonText}</button>
  )
}

export default PrimaryButton
