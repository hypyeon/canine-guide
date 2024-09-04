import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Buttons = (props) => {
  const { type, bgColor, src, text, txtColor, href, onShare, mb, imgPosition } = props;

  const chooseType = () => {
    switch (type) {
      case 'start':
        return 'bg-black border-2 border-white mt-8 mb-4'
      case 'landing':
        return 'rounded-2xl shadow-md';
      case 'manual':
        return `bg-sage border-2 border-black ${mb}`;
      case 'resource':
        return `bg-black ${mb}`;
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
              className='pt-[2.5vw] w-[24vw] flex justify-center items-center'
            >
              <Image source={src} className='w-[8vw] h-[8vw]' />
            </View>
          </Link>
        )
      } else {
        return (
          <View 
            className='py-2 w-[24vw] flex justify-center items-center'
          >
            <Image source={src} className='w-[8vw] h-[8vw]' />
          </View>
        )
      }
    } else if (type === 'manual') {
      return (
        <Link 
          className='font-rs-reg text-xl text-black py-3 w-[76vw] text-center'
          href={href}
        >
          <Text>
            {text}
          </Text>
        </Link>
      )
    } else if (type === 'resource') {
      return (
        <Link 
          className="relative"
          href={href}
        >
          <View className="relative py-3 w-56 flex justify-center items-center">
            <View className={`absolute ${imgPosition}`}>
              <Image 
                source={src} 
              />
            </View>
            <Text className={`relative font-rs-reg text-xl ${txtColor}`}>
              {text}
            </Text>
          </View>
        </Link> 
      )
    }
  }

  return (
    <TouchableOpacity 
      className={`${chooseType()} ${bgColor}`}
      onPress={onShare ? onShare : null}
    >
      {renderContent()}
    </TouchableOpacity>
  )
}

export default Buttons