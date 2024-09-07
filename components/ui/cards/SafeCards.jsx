import { View } from 'react-native'
import React from 'react'
import Card from './Card'
import CardData from '../../data/CardData'

const data = CardData.find(data => data.page === 'safe').list;

const renderPb = (content, index) => {
  let linkCount = (content.match(/\[link\]/g) || []).length;
  return index + 1 < linkCount ? 'pb-3' : '';
}


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
          // pb={renderPb(item.content, index)}
        />
      ))}
    </View>
  )
}

export default SafeCards