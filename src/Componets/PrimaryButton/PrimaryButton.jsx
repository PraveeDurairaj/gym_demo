import React from 'react';

const PrimaryButton = ({buttonText,containerClass,onClick}) => {
  const openWhatapp = () => {
    const phNo = '9345818731';
    const message = 'hello';
    const url = `https://wa.me/${phNo}?text=${encodeURIComponent(message)}`
    window.open(url,'_blank')
  }
  return (
    <button onClick={onClick && openWhatapp} className={`bg-theme font-[600] text-black px-[20px] py-[10px] rounded-full ${containerClass && containerClass}`}>{buttonText}</button>
  )
}

export default PrimaryButton
