import { View } from 'react-native'
import React from 'react'
import Card from './Card'

const LifeStageCards = (props) => {
  const { data } = props;

  return (
    <View>
      {data.map((item, index) => (
        <Card 
          key={index}
          index={index + 1}
          title={item.title}
          content={item.content}
          mb={index === data.length - 1 ? 'mb-8' : 'mb-6'}
          bold={item.bold ? item.bold.map((str) => (str)) : []}
        />
      ))}
    </View>
  )
}

export default LifeStageCards