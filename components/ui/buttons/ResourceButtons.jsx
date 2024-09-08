import { View } from 'react-native'
import { router } from 'expo-router'
import React from 'react'

import Buttons from './Buttons'
import vet from '../../../assets/images/btn-icon-vet.png'
import train from '../../../assets/images/btn-icon-train.png'
import store from '../../../assets/images/btn-icon-shop.png'
import shop from '../../../assets/images/btn-icon-online.png'

const data = [
  {
    text: 'Veterinarian',
    to: '/resource',
    txtColor: 'text-sage',
    src: vet,
    position: 'top-0 right-0'
  },
  {
    text: 'Dog Training',
    to: '/resource',
    txtColor: 'text-sage',
    src: train,
    position: 'bottom-1 left-0',
    size: 'w-[9vw] h-[9vw]'
  },
  {
    text: 'Nearby Stores',
    to: '/resource',
    txtColor: 'text-yellow',
    src: store,
    position: 'bottom-1 right-0',
    size: 'w-[6vw]'
  },
  {
    text: 'Online Stores',
    to: '/resource',
    txtColor: 'text-yellow',
    src: shop,
    position: 'top-1 left-0',
    size: 'w-[5vw]'
  }
]

const ResourceButtons = () => {
  return (
    <View>
      {data.map((item, index) => (
        <Buttons 
          key={index}
          type='resource'
          text={item.text}
          handlePress={() => router.push(item.to)}
          txtColor={item.txtColor}
          mb={index === data.length - 1 ? 'mb-0' : 'mb-4'}
          src={item.src}
          imgPosition={item.position}
          imgSize={item.size}
        />
      ))}
    </View>
  )
}

export default ResourceButtons