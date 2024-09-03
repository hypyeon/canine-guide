import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Buttons = (props) => {
  const { type, bgColor, src, text, txtColor, href, onShare } = props;

  const chooseType = () => {
    switch (type) {
      case 'start':
        return 'bg-black border-2 border-white mt-8 mb-4'
      case 'landing':
        return 'rounded-2xl shadow-md';
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
        <Link 
          className='text-sage font-ruda-sb text-xl tracking-wide py-3 w-[56vw] text-center'
          href={href}
        >
          {text}
        </Link>
      )
    }
    else if (type === 'landing') {
      if (href) {
        return (
          <Link
            href={href}
          >
            <View 
              className='pb-1 pt-2 w-[24vw] flex justify-center items-center'
            >
              <Image source={src} className='w-[8vw] h-[8vw]' />
            </View>
          </Link>
        )
      } else {
        return (
          <View 
            className='py-[1.5] w-[24vw] flex justify-center items-center'
          >
            <Image source={src} className='w-[8vw] h-[8vw]' />
          </View>
        )
      }
      
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
    <TouchableOpacity 
      className={`${chooseType()} ${bgColor} flex justify-center items-center`}
      onPress={onShare ? onShare : null}
    >
      {renderContent()}
    </TouchableOpacity>
  )
}

export default Buttons