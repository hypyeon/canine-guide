import { View, Text } from 'react-native'
import React from 'react'
import Card from './Card'
import CardData from '../../data/CardData'

const data = CardData.find(data => data.page === 'expect').list;

const ExpectCards = () => {
  return (
    <View>
      {data.map((item, index) => (
        <Card 
          key={index}
          index={index + 1}
          title={item.title}
          customize={item.customize}
          mb={index === data.length - 1 ? 'mb-8' : 'mb-6'}
        />
      ))}
    </View>
  )
}

export default ExpectCards