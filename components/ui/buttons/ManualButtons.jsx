import { View } from 'react-native'
import React from 'react'
import Buttons from './Buttons'

const data = [
  {
    text: 'Pre-adoption Manual',
    href: '/manual'
  },
  {
    text: 'Guides for Each Life Stage',
    href: '/guides'
  },
  {
    text: 'Safe & Unsafe Food for Dogs',
    href: '/foods'
  },
  {
    text: 'Communicating with Dogs',
    href: '/manual'
  },
  {
    text: 'Pet Owner Essentials',
    href: '/manual'
  }
]

const ManualButtons = () => {
  return (
    <View>
      {data.map((item, index) => (
        <Buttons 
          key={index}
          type='manual'
          text={item.text}
          href={item.href}
          mb={index === data.length - 1 ? 'mb-12' : 'mb-4'}
        />
      ))}
    </View>
  )
}

export default ManualButtons