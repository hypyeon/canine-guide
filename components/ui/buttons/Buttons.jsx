import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';

const Buttons = (props) => {
  const { type, bgColor, src, text, txtColor, onShare, mb, imgPosition, imgSize, handlePress } = props;

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
      case 'expect':
        return 'bg-black rounded-xl shadow-sm';
      case 'finder': 
        return 'bg-yellow shadow-sm';
      default:
        return 'bg-yellow text-yellowtxt';
    }
  }

  const renderContent = () => {
    if (type === 'start') {
      return (
        <TouchableOpacity 
          className='py-3 w-[56vw]'
          onPress={handlePress}
        >
          <Text className="text-sage font-ruda-sb text-xl tracking-wide text-center">
            {text}
          </Text>
        </TouchableOpacity>
      )
    }
    else if (type === 'landing') {
      return (
        <>
          { onShare && (
            <TouchableOpacity 
              onPress={onShare}
            >
              <View 
                className='py-2 w-[24vw] flex justify-center items-center'
              >
                <Image source={src} className='w-[8vw] h-[8vw]' />
              </View>
            </TouchableOpacity>
          )}
          { handlePress && (
            <TouchableOpacity
              onPress={handlePress}
            >
              <View 
                className='pt-[2.5vw] w-[24vw] flex justify-center items-center'
              >
                <Image source={src} className='w-[8vw] h-[8vw]' />
              </View>
            </TouchableOpacity>
          )}
        </>
      )
    } else if (type === 'manual') {
      return (
        <TouchableOpacity 
          className='py-3 w-[76vw]'
          onPress={handlePress}
        >
          <Text className="font-rs-reg text-xl text-black text-center">
            {text}
          </Text>
        </TouchableOpacity>
      )
    } else if (type === 'resource') {
      return (
        <TouchableOpacity 
          className="relative"
          onPress={handlePress}
        >
          <View className="relative py-3 w-56 flex justify-center items-center">
            <View className={`absolute ${imgPosition}`}>
              <Image 
                source={src} 
                className={`${imgSize}`}
              />
            </View>
            <Text className={`relative font-rs-reg text-xl tracking-wide ${txtColor}`}>
              {text}
            </Text>
          </View>
        </TouchableOpacity> 
      )
    } else if (type === 'expect') {
      return (
        <TouchableOpacity 
          className='py-3 px-6'
          onPress={handlePress}
        >
          <Text 
            className="text-sage font-rs-reg text-xl text-[16px] text-center"
          >
            {text}
          </Text>
        </TouchableOpacity>
      )
    } else if (type === 'finder') {
      return (
        <TouchableOpacity 
          className='py-2 pl-8 pr-6 flex-row'
          onPress={handlePress}
        >
          <Text 
            className="text-black font-rs-reg text-xl text-[16px] text-center"
          >
            {text}
          </Text>
          <View className="pl-1 pt-[1px]">
            <Feather name="external-link" size={14} color={`#1e212b`} />
          </View>
        </TouchableOpacity>
      )
    } 
  }

  return (
    <View 
      className={`${chooseType()} ${bgColor}`}
    >
      {renderContent()}
    </View>
  )
}

export default Buttons