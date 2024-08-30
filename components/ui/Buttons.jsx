import { Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Buttons = (props) => {
  const { type, bgColor, src, text, txtColor } = props;

  const chooseType = () => {
    switch (type) {
      case 'start':
        return 'bg-black border-2 border-white py-3 w-[52vw] mt-8 mb-4'
      case 'landing':
        return 'rounded-2xl py-2 w-24';
      case 'manual':
        return 'bg-sage border-2 border-black py-2 w-72';
      case 'tip':
        return 'bg-black py-2 w-72';
      default:
        return 'bg-yellow text-yellowtxt';
    }
  }

  const renderContent = () => {
    if (type === 'start') {
      return (
        <Text className='text-sage font-ruda-sb text-xl tracking-wide'>{text}</Text>
      )
    }
    else if (type === 'landing') {
      return (
        <Image source={src} className='w-8 h-8' />
      )
    } else if (type === 'manual') {
      return (
        <Text className='font-rs-reg text-xl text-black'>{text}</Text>
      )
    } else if (type === 'tip') {
      return (
        <Text className={`font-rs-reg text-xl ${txtColor}`}>{text}</Text> 
      )
    }
  }

  return (
    <TouchableOpacity className={`${chooseType()} ${bgColor} flex justify-center items-center`}>
      {renderContent()}
    </TouchableOpacity>
  )
}

export default Buttons