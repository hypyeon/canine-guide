import { View } from 'react-native'
import React from 'react'
import Buttons from './Buttons'
import vet from '../../assets/images/btn-icon-vet.png'
import train from '../../assets/images/btn-icon-train.png'
import store from '../../assets/images/btn-icon-shop.png'
import shop from '../../assets/images/btn-icon-online.png'

const data = [
  {
    text: 'Veterinarian',
    href: '/resource',
    txtColor: 'text-sage',
    src: vet,
    position: 'top-1 right-0'
  },
  {
    text: 'Dog Training',
    href: '/resource',
    txtColor: 'text-sage',
    src: train,
    position: 'bottom-0 left-0'
  },
  {
    text: 'Nearby Stores',
    href: '/resource',
    txtColor: 'text-yellow',
    src: store,
    position: 'bottom-1 right-0'
  },
  {
    text: 'Online Stores',
    href: '/resource',
    txtColor: 'text-yellow',
    src: shop,
    position: 'top-2 left-0'
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
          href={item.href}
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