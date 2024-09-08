import { View } from 'react-native'
import React from 'react'
import Card from './Card'

const WebsitesCards = (props) => {
  const { data } = props;
  
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
        />
      ))}
    </View>
  )
}

export default WebsitesCards