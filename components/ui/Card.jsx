import { Text, View, Image } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import { Link } from 'expo-router'

const Card = (props) => {
  const { index, title, src, content, href, mb } = props;

  const bgColor = index % 2 === 0 ? 'bg-black' : 'bg-white';
  const txtColor = index % 2 === 0 ? 'text-white' : 'text-black';

  return (
    <View 
      className={`${bgColor} ${mb} shadow-xl rounded-2xl w-[80vw] justify-center items-center p-4`}
    >
      <Link href={href} className='flex flex-row w-[68vw]'>
        <Text className={`${txtColor} w-[68vw] pb-4 mb-8 font-rs-reg text-[16px]`}>
          {title}
        </Text>
        <View className="pl-1">
          <Feather name="external-link" size={18} color={`#F2A202`} />
        </View>
      </Link>
      <View className="border-b border-yellow mt-2 mb-4 w-[72vw]" />
      <Image 
        source={src}
        className="w-[40vw] mb-4"
        resizeMode="contain"
      />
      <Text className={`${txtColor} w-[68vw] font-ruda-reg`}>
        "{content}"
      </Text>
    </View>
  )
}

export default Card