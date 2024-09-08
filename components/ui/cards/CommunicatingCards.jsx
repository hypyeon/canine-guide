import { View } from 'react-native'
import React from 'react'
import Card from './Card'

const CommunicatingCards = (props) => {
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
          list={item.list}
        />
      ))}
    </View>
  )
}

export default CommunicatingCards