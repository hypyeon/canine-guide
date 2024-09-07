import { View } from 'react-native'
import React from 'react'
import Card from './Card'
import CardData from '../../data/CardData'

const data = CardData.find(data => data.page === 'unsafe').list;

const UnsafeCards = () => {
  return (
    <View>
      {data.map((item, index) => (
        <Card 
          key={index}
          index={index + 1}
          title={item.title}
          src={item.src}
          href={item.href}
          content={item.content}
          mb={index === data.length - 1 ? 'mb-8' : 'mb-6'}
          unsafe={true}
        />
      ))}
    </View>
  )
}

export default UnsafeCards