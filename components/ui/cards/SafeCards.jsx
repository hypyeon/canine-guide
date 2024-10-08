import { View } from 'react-native'
import React from 'react'
import Card from './Card'
import CardData from '../../data/CardData'

const data = CardData.find(data => data.page === 'safe').list;

const SafeCards = () => {
  return (
    <View>
      {data.map((item, index) => (
        <Card 
          key={index}
          index={index + 1}
          title={item.title}
          content={item.content}
          mb={index === data.length - 1 ? 'mb-8' : 'mb-6'}
          list={item.list}
        />
      ))}
    </View>
  )
}

export default SafeCards