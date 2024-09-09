import { View } from 'react-native'
import React from 'react'
import Buttons from './Buttons'
import { router } from 'expo-router'

const data = [
  {
    text: 'Pre-adoption Manual',
    to: '/adoption'
  },
  {
    text: 'Guides for Each Life Stage',
    to: '/guides'
  },
  {
    text: 'Safe & Unsafe Food for Dogs',
    to: '/foods'
  },
  {
    text: 'Communicating with Dogs',
    to: '/communicating'
  },
  {
    text: 'Pet Owner Essentials',
    to: '/essentials'
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
          handlePress={() => router.push(item.to)}
          mb={index === data.length - 1 ? 'mb-12' : 'mb-4'}
        />
      ))}
    </View>
  )
}

export default ManualButtons