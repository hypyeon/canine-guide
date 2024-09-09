import { View } from 'react-native'
import React from 'react'
import Card from './Card'

const ChecklistCards = (props) => {
  const { data } = props;

  return (
    <View>
      {data.map((item, index) => (
        <Card 
          key={index}
          index={index + 2}
          title={item.title}
          customize={item.customize}
          mb={index === data.length - 1 ? 'mb-8' : 'mb-6'}
        />
      ))}
    </View>
  )
}

export default ChecklistCards